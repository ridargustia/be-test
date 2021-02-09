# Q4 - CodeDebugging

Code debugging built with NodeJs

### Kode yang perlu diperbaiki :
1. Terdapat beberapa module yang perlu di install, seperti module axios dan dotenv
2. Membuat file .env untuk menyimpan kode environment yang diperlukan
3. Melakukan koneksi object config dari path `src/config/index.js` (Environment) dengan melakukan exports module agar dapat diakses di file lain
4. Melakukan konfigurasi pada akun Github pada menu `Setting/DeveloperSetting/OAuthApps/NewOAuthApps` untuk membuat Oauth baru dengan mengisi form konfigurasi (Application Name, Homepage URL, Application Description (Optional), dan Authorization Callback URL) yang digunakan untuk koneksi dengan aplikasi nodeJS sebagai fitur login via Github
5. Konfigurasi pada akun Github akan menghasilkan Homepage URL, Authorization Callback URL, Client ID dan Client Secrets yang di isikan ke file .env pada aplikasi nodeJS
6. Melakukan perbaikan pada sintaks axios resolve pada file `src/services/AuthCallbackService.js`
7. Melakukan perbaikan pada URL axios (change users to user), headers axios (Authorization: Bearer token) dan menambahkan callback function pada `src/services/userInfoService.js` agar dapat diakses dari file/module lain

### Cara eksekusi : 
- Buka console / terminal
- Arahkan ke direktori program
- Ketikkan **node app** untuk eksekusi program (Running/Compile)
- Akses dengan URL http://localhost:9000 

