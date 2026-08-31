# HGTV8 - Hermes Gold Terminal V8 - Private - GitHub Pages Deploy

## Cara Deploy ke GitHub Pages (3 Menit)

### Langkah 1: Buat Repository GitHub
1. Buka https://github.com/new
2. Repository name: `hgtv8-terminal` (atau bebas)
3. Public / Private bebas
4. Klik Create Repository

### Langkah 2: Upload File
1. Di repo baru, klik "Add file" > "Upload files"
2. Drag & drop SEMUA file dari folder ini:
   - index.html
   - hermes_anti_copy.js
   - dashboard.jpg
   - hgtv8_logo_1_luxury_gold.png
   - hgtv8_favicon_32.png
   - hgtv8_favicon_16.png
3. Commit changes

### Langkah 3: Aktifkan GitHub Pages
1. Settings > Pages (di sidebar)
2. Build and deployment > Source: Deploy from a branch
3. Branch: main / root
4. Save
5. Tunggu 1-2 menit, URL akan muncul: https://username.github.io/hgtv8-terminal/

### Langkah 4: Test Anti-Copy
Buka URL GitHub Pages:
- Klik kanan -> harus muncul overlay 🔒 HERMES GOLD TERMINAL V8 - LICENSED PRIVATE - lynk.id/antonntlnewlife
- Ctrl+C -> clipboard jadi link Lynk.id
- Pojok kanan bawah ada watermark Licensed to buyer@email.com

### Langkah 5: Hubungkan ke Lynk.id Webhook
Edit file hermes-lynk-webhook.php di hosting:
```php
define('DOWNLOAD_BASE_URL', 'https://username.github.io/hgtv8-terminal/');
```

Di Lynk.id Dashboard > Webhook:
URL: https://domainkamu.com/hermes-lynk-webhook.php

Flow: Buyer bayar -> webhook generate license -> private link -> https://username.github.io/hgtv8-terminal/?email=buyer@gmail.com&key=HERMES-V8-XXXX&mt5=12345678

### Custom Domain (Opsional)
Settings > Pages > Custom domain: terminal.hermesgoldv8.com

---

Official: lynk.id/antonntlnewlife
Logo: HGTV8
Voice: Mark Natural Conversations (en-US) sp100 s44 sb75 v3
