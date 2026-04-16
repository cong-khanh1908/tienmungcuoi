/**
 * ================================================================
 * CONFIG.JS — Cấu hình dùng chung cho tất cả thiết bị
 * ================================================================
 * File này được upload lên GitHub cùng với index.html
 * Mọi thiết bị mở file HTML đều tự động đọc config này
 * → Không cần cấu hình lại trên từng thiết bị
 *
 * HƯỚNG DẪN:
 * 1. Điền thông tin Service Account JSON key bên dưới
 * 2. Điền Spreadsheet ID của Google Sheets
 * 3. Upload cả 2 file (index.html + config.js) lên cùng 1 thư mục GitHub
 * 4. Bật GitHub Pages để truy cập qua trình duyệt
 *
 * BẢO MẬT:
 * - Đặt repo GitHub ở chế độ PRIVATE nếu dữ liệu nhạy cảm
 * - Service Account chỉ nên có quyền Editor vào đúng 1 Spreadsheet
 * ================================================================
 */

window.GS_DEFAULT_CONFIG = {

  // ── Spreadsheet ID ──────────────────────────────────────────
  // Lấy từ URL: https://docs.google.com/spreadsheets/d/[ID]/edit
  // VÍ DỤ: sheetId: "1tA6uGgZYpoH8Xg-0tVCn91PSgApdJJobF0UUXVLtj5Y",
  sheetId: "1tA6uGgZYpoH8Xg-0tVCn91PSgApdJJobF0UUXVLtj5Y",

  // ── Tên tab trong Google Sheets ─────────────────────────────
  sheetName: "DiLai",

  // ── Service Account JSON Key ─────────────────────────────────
  // Dán toàn bộ nội dung file .json tải về từ Google Cloud Console
  keyObj: {
    "type": "service_account",
    "project_id": "tienmungcuoi",
    "private_key_id": "d8cc9ddd1e4615cf590ca1cf411c7095a4ec0b07",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCGcPkjf862ypA\n42TU4hG6M7RQVnEVHGswGpsGAlGWMrhSEnb7w2+r70rsyZ3RRCebZ/5pvqStsrKC\nKdMrdUx082F1SVrXmTIzPN4UX6sb9VXivESGrMzPVJxHK6Yv5TcqwBhk7/Tt2JLN\nDBWgbjeloZJl6lzNT4KlemAZXNaqtLIpvgp6xw03hLSR61oS8poV00c9+Zm2peDX\nM5nEpjwn85TK1+B5N648tmQ4MkoAsZB9nRUcc9eMHDbV+bgpJgZBE4MM5xkGrY9u\nTYiqct0hp3/3PWEz7GuZIwoAGlJcXc178twjU7U2bKKdH20W5vPIO49qgSbObWCN\n6mESiGL9AgMBAAECggEARGPWqWu838yEJUvZ5cZn758zK9FhU8ppHBBryeC8RXtG\nhah64vd4G/EbCbZ6VFc6y1+HfVPOa2NY0VMSVDAmydhNYQmBKBES5onOSAhzXk0B\nv3uNe5RcL7tEuzDug9a0Kux3S+1edAWIqBXXcukS01nMHvvGShL3Wf316UnUW13l\niHW4g+EKvVOmqVhJ0iYReAnGHwAMTW9ZmG0DtxFW0ReK5U6mhGxZmiI31m5lPzgG\nJdOUZGcEjgoCLg1meayH7YvJBxYY/lW2YTZlkv0hxSaZdysstzlYQIxlJKy/2nG5\n1MO9XbgQVR9sDsOLNVA/Z8GqJlKA6Ydr5EFAn018YwKBgQDfyiw5F4C7MCxwV1RK\nUzCUFvBHZLmNLqBFxEmOBIrrkFFWD+RDNQAJKC6UKvY/jTk7WwBjzsMpV6AJwNC7\nztHhVLvNpSHo1ouSzrb4H+xVH26yLsPIDck7S+V6d/MkH8bvFJu4rTA9NXJAF6xP\njpYbUvv8GO0suvDpWlH9zVXsuwKBgQDeCain8ivbJVh6L6MpEL0+cMYeJQBPbpaR\n/bofqRoaJerTz1ES89135eXaUk+VhEeLCHZjC5bC2N3u1Q1xA3NZ4yZRdT0f8+0Y\n2wZBl1EdTh7PhrcBt2PPqGbYExDivJMYqwFI1ulyqHvxeM9kisFaTRIZsjuFn/wv\nw8snSBQPpwKBgBTTiMgLYuSIuCoARozgLw4pEFVkj0wPQcUcXkgELjV76cXblr+W\naBlyDtulH+OMLf5TGrcvH8RyLieaNRK1TZztuMiLjJtRlA2mhSqUNfc6BKA6b+fn\nOIn3JzT9grgi6O2I+nD2VR3tImPKkDObLmb+kwrD+xaFkzP0Ptsix9NPAoGBAJdz\n4S4FuzJ1S9+0ZMfbGirgQ9NGC+silOQqPO3hq+NQH9iwni2eWF+zWlDMOmrTWvWU\nJSS0P/bSdLe3bb67ys/yaC3CGZqVCRIePCs7auHhapTF4Ej0bcm0pcoXXzo5xOBb\nrLmhloVWNYzlihmbp/3Pelw6ve0MzrlKBWXa/YwbAoGAVnGUX7EoGAsLWCYyxEQD\nu3TTxdxy5cXrmHCkCt+a5fIl7IeRMw6czS6wprFI0qFUkM39hXwcaOcqDzbREpQ1\nL7SV87b2Bd7Y0JNZiDxC4p55+q9jMm3c5m/r9vD8jCuRCAackmrMYY3fKaIlV1D0\nTUYYhvHkMCDaSaoi/sJrhG0=\n-----END PRIVATE KEY-----\n",
    "client_email": "tienmungcuoi@tienmungcuoi.iam.gserviceaccount.com",
    "client_id": "105668714165328048769",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/tienmungcuoi%40tienmungcuoi.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }

};
