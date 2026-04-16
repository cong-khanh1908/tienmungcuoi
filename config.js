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
  "project_id": "doanthanhnien-493208",
  "private_key_id": "36fac406d99bfac96895027217b259413110592f",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDY/AINVKGns4Dw\n/Mk/RlkcCt4Nz1bHcaFxlG/ErCMOFljZ5NblSE4UP2GEsTTtqmf0qBkdWoeTg6rk\nPkLZzSvycHX6pol+QmFuFWh3f+5c85Wsskf2nNlDRYwJuvmfXPTLS/VQ3tjKv8QW\nOTZ0yovV/zeJOvvmqFLav86ggSZ8Da2V2WqzKqJutryL1fwVJG+u2qEh2o3CYNgh\nWKn0PcYJzqfZghevZrtqVZIWOYD4o4HOi9Uw/UYvQ+tN9Xit+4IS2TuuKXTcw0H0\nXDbxtbQYS9XHKXe3/bV3aJ9weZHfIDX3HYCaor/JtWQ2Q4cutwGp0D1ybpW/XGJU\nrZepyRrrAgMBAAECggEAMLD4eupTblELLcjkFjVgmLjdlIbDB/V5T4YKQL2KDka4\ngIjoKkJ79vI0HXUwlean9lBkdmBSzSj+R8Kq+LogUwKmju0hLHqT54KZUzubjzNA\nEqVdHbuby4tHPgW9r2PKMPamIZQoXPMEeyIylKnBEG/5k+tvDJcYJKtnIEBrFOoJ\nA4kowGXHiL98Zmp66f7J/rIam3nuzYcWfHYae8khaC/5f3bTFw+1GtgwRzD7Uo0x\nyGC9RnkarcL8G31dyJ6xSE1LddkOKfkHmt0Ir1/qUxvwT92Tx13YB7hnrvRv3ueX\n0fwQzrOhA6zJGiAAwmGOSzvs5xpbdjuyZ5Z6AUvwJQKBgQDz5R22rRbSC+wOr7Ej\nDM91aIkLpI/0PoyzQcKwue+oFi5N0RcTuZoio6poOIXWb+iMQPXFQj6+Ir5YJE/j\nQC+hQie3rxw+XeCa7wNROofHJb9U30CL72aLjmcHe5qaBA/UjCtZPZblKGBs8T0i\nehIlztm3UbiADvZxFwVl2j32XQKBgQDjwPifp//QckQ0lc/cGL5Tm+rOX/6Io6jn\nda2u5pDEHaz6OW5osHX76Ne5WPeE+jMFH2OaxymIAfqUgOR66L6N+5naxOBRvwlW\ntt05/pLVANpgVx48qttS3BLhc9QrhfOnlcmFJjA7QK54IOT0vn2yt4bT651UmOv3\nm2E7cxgx5wKBgQDJHseI62UlItWvKqxc5eRxwhk486QN2kK2U2UTzNBXAKuAWgq4\nplX3eJU+SlX7hd7zQWIqHz2UFxx1nMQP9s8QIHiWHR2iRFHCEZTft+9dhsAnYc5d\nVrZuIKjPX9sWZIEVWd0pQwOaxtf1Hl22f4lViiS46ffGChCpIz29RuHPtQKBgQDD\nNkqkJg45L0fQvrvcDgVMiq6210bG/WgvhAkriYp53mm+S+2bo+xs0AXfYyc8/msu\nr9ni92RcpD2Qfe3Yf5edARO9lNQknRa3EaQLKm3WTpXez60mGNhGbEVuoqYv6++N\nK/D/xFzA3M7uPlugf4oj3fSdvi0rLqvKno63sw4A7wKBgD+3kN7o06CKtPyaPSQX\naAnhCo3d3vjI5WLK6R9yBF11xM83mHwMKxAfpxj9AEmmkQnP6A5/Yot+gg9qal1J\nfyE7XrEHnvsc2KweSX76d0UgbLr3GZWj57pnp+yRrQFgal0WO24agpMHTmwDCP4j\n7IxJWWbpl1TG3Qio8CBdR/BU\n-----END PRIVATE KEY-----\n",
  "client_email": "doanthanhnien@doanthanhnien-493208.iam.gserviceaccount.com",
  "client_id": "115449502715146255531",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/doanthanhnien%40doanthanhnien-493208.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
  }

};
