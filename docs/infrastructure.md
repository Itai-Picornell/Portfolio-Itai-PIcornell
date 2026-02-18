# Guía de Infraestructura AWS — Portfolio Personal

> **Objetivo:** Desplegar un sitio web estático (Vue.js) de forma segura y eficiente usando
> **S3 privado + CloudFront con OAC**. Esta arquitectura es la recomendada por AWS para 2024+,
> reemplazando el antiguo método de S3 público con OAI.

---

## Arquitectura

```
Usuario → CloudFront (CDN global) → OAC → S3 Bucket (privado)
                                  ↑
                         GitHub Actions (CI/CD)
```

---

## Paso 1: Crear el Bucket S3 Privado

### 1.1 Crear el bucket

1. Ir a **AWS Console → S3 → Create bucket**.
2. **Bucket name:** `portfolio-itai-picornell` *(debe ser único globalmente)*.
3. **AWS Region:** Elige tu región (ej: `eu-west-1` para Europa).
4. **Object Ownership:** Selecciona **ACLs disabled (recommended)**.
5. **Block Public Access:** ✅ Mantén **TODAS las opciones activadas** (bloqueo total).
6. Deja el resto de opciones por defecto y haz clic en **Create bucket**.

> [!IMPORTANT]
> El bucket debe ser **completamente privado**. CloudFront accederá a él mediante OAC,
> no mediante acceso público directo.

### 1.2 Verificar el bloqueo de acceso público

En la pestaña **Permissions** del bucket, confirma que las 4 opciones de
"Block public access" están en **On**.

---

## Paso 2: Crear la Distribución de CloudFront con OAC

### 2.1 Crear el Origin Access Control (OAC)

1. Ir a **CloudFront → Origin access → Create control setting**.
2. **Name:** `OAC-Portfolio-S3`.
3. **Origin type:** S3.
4. **Signing behavior:** Sign requests (recommended).
5. Haz clic en **Create**.

### 2.2 Crear la distribución de CloudFront

1. Ir a **CloudFront → Distributions → Create distribution**.

2. **Origin:**
   - **Origin domain:** Selecciona tu bucket S3 del desplegable.
   - **Origin access:** Selecciona **Origin access control settings (recommended)**.
   - **Origin access control:** Selecciona el OAC creado en el paso anterior.
   - Haz clic en **Copy policy** cuando CloudFront te lo indique (lo usarás en el Paso 3).

3. **Default cache behavior:**
   - **Viewer protocol policy:** `Redirect HTTP to HTTPS`.
   - **Allowed HTTP methods:** `GET, HEAD`.
   - **Cache policy:** `CachingOptimized` (recomendado por AWS).
   - **Origin request policy:** `CORS-S3Origin`.

4. **Settings:**
   - **Price class:** Elige según tu audiencia (ej: `Use only North America and Europe`).
   - **Default root object:** `index.html`.
   - **Supported HTTP versions:** HTTP/2 y HTTP/3.

5. Haz clic en **Create distribution**.

> [!NOTE]
> La distribución puede tardar entre 5 y 15 minutos en desplegarse globalmente.
> Anota el **Distribution ID** y el **Domain name** (ej: `d1234abcd.cloudfront.net`).

---

## Paso 3: Actualizar la Política del Bucket S3

Después de crear la distribución, debes autorizar a CloudFront a leer el bucket.

1. Ve a **S3 → tu bucket → Permissions → Bucket policy**.
2. Pega la política que copiaste en el Paso 2.2. Debe tener esta estructura:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipal",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::TU-BUCKET-NAME/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::TU-ACCOUNT-ID:distribution/TU-DISTRIBUTION-ID"
        }
      }
    }
  ]
}
```

> [!CAUTION]
> Reemplaza `TU-BUCKET-NAME`, `TU-ACCOUNT-ID` y `TU-DISTRIBUTION-ID` con tus valores reales.

---

## Paso 4: Configurar Páginas de Error para SPA Routing

Vue Router en modo `history` requiere que cualquier URL desconocida devuelva `index.html`
para que la aplicación pueda manejar el routing en el cliente.

1. Ve a **CloudFront → tu distribución → Error pages → Create custom error response**.
2. Crea **dos reglas** idénticas:

| HTTP Error Code | Response Page Path | HTTP Response Code |
|:---:|:---:|:---:|
| `403` | `/index.html` | `200` |
| `404` | `/index.html` | `200` |

> [!IMPORTANT]
> Esto es **crítico** para que el routing de Vue funcione correctamente.
> Sin estas reglas, al acceder directamente a una URL como `/about` obtendrías un error 403.

---

## Paso 5: Crear el Usuario IAM para GitHub Actions

GitHub Actions necesita credenciales AWS con permisos mínimos para desplegar.

### 5.1 Crear la política IAM

1. Ir a **IAM → Policies → Create policy**.
2. Selecciona **JSON** y pega la siguiente política:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3SyncPortfolio",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::TU-BUCKET-NAME",
        "arn:aws:s3:::TU-BUCKET-NAME/*"
      ]
    },
    {
      "Sid": "CloudFrontInvalidation",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::TU-ACCOUNT-ID:distribution/TU-DISTRIBUTION-ID"
    }
  ]
}
```

3. **Name:** `GithubActions-Portfolio-Deploy`.
4. Haz clic en **Create policy**.

### 5.2 Crear el usuario IAM

1. Ir a **IAM → Users → Create user**.
2. **User name:** `github-actions-portfolio`.
3. En **Permissions**, selecciona **Attach policies directly** y adjunta `GithubActions-Portfolio-Deploy`.
4. Crea el usuario y ve a **Security credentials → Create access key**.
5. Selecciona **Application running outside AWS** y guarda el **Access Key ID** y el **Secret Access Key**.

> [!CAUTION]
> Guarda las credenciales en un lugar seguro. **No podrás volver a ver el Secret Access Key.**

---

## Paso 6: Configurar los Secrets en GitHub

1. Ve a tu repositorio en GitHub → **Settings → Secrets and variables → Actions**.
2. Haz clic en **New repository secret** y crea los siguientes secretos:

| Secret Name | Valor |
|---|---|
| `AWS_ACCESS_KEY_ID` | El Access Key ID del usuario IAM |
| `AWS_SECRET_ACCESS_KEY` | El Secret Access Key del usuario IAM |
| `AWS_REGION` | Tu región AWS (ej: `eu-west-1`) |
| `S3_BUCKET_NAME` | El nombre de tu bucket S3 |
| `CLOUDFRONT_DISTRIBUTION_ID` | El ID de tu distribución CloudFront |

---

## Resumen de la Arquitectura Final

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Repository                     │
│  Push a main → GitHub Actions → Build Vue → Deploy AWS  │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    AWS CloudFront                        │
│  - CDN global (200+ edge locations)                     │
│  - HTTPS obligatorio                                     │
│  - Caché optimizada para assets estáticos               │
│  - Errores 403/404 → /index.html (SPA routing)         │
└─────────────────────────────────────────────────────────┘
                          │ OAC (Origin Access Control)
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    AWS S3 (Privado)                      │
│  - Acceso público bloqueado                             │
│  - Solo CloudFront puede leer los objetos               │
│  - Almacena el build de Vue (dist/)                     │
└─────────────────────────────────────────────────────────┘
```
