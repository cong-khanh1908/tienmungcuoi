/**
 * ================================================================
 * CONFIG.JS — Cấu hình dùng chung cho tất cả thiết bị
 * ================================================================
 * File này được upload lên GitHub cùng với tra_cuu.html
 * Mọi thiết bị mở file HTML đều tự động đọc config này
 * → Không cần cấu hình lại trên từng thiết bị
 *
 * HƯỚNG DẪN:
 * 1. Điền thông tin Service Account JSON key bên dưới
 * 2. Điền Spreadsheet ID của Google Sheets
 * 3. Upload cả 2 file (HTML + config.js) lên cùng 1 thư mục GitHub
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
  sheetId: "",

  // ── Tên tab trong Google Sheets ─────────────────────────────
  sheetName: "DiLai",

  // ── Service Account JSON Key ─────────────────────────────────
  // Dán toàn bộ nội dung file .json tải về từ Google Cloud Console
  keyObj: {
    "type": "service_account",
    "project_id": "",
    "private_key_id": "",
    "private_key": "",
    "client_email": "",
    "client_id": "",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token"
  }

};
