const mongoose = require('mongoose');

// Schema cho từng lĩnh vực đào tạo
const linhVucSchema = new mongoose.Schema({
  LinhVuc: { type: String, required: true },
  MoTa: { type: String, required: true }
});

// Schema cho Ban Chủ Nhiệm
const banChuNhiemSchema = new mongoose.Schema({
    ChuNhiem: { type: String },  // Loại bỏ 'required: true' nếu không bắt buộc
    NhiemKi: { type: String, required: true }
});
// Schema cho Team Dự Án
const teamDuAnSchema = new mongoose.Schema({
  Team: { type: String, required: true },
  MoTa: { type: String, required: true }
});

// Schema cho các câu hỏi Q&A
const qaSchema = new mongoose.Schema({
  H: { type: String, required: true },  // Câu hỏi
  TL: { type: String, required: true }  // Trả lời
});

// Schema cho từng khóa đào tạo chi tiết
const khoaSchema = new mongoose.Schema({
  khoa: { type: String, required: true },
  moTa: { type: [String], required: true }
});

// Schema chính cho IUC Club
const iucClubSchema = new mongoose.Schema({
  TrangChu: { type: String, required: true },
  GioiThieu: {
    Ten: { type: String, required: true },
    MoTa: { type: String, required: true }
  },
  HoatDong: {
    CacLinhVucDaoTao: { type: [linhVucSchema], required: true },
    TongKet: { type: String, required: true }
  },
  MoiTruong: { type: String, required: true },
  CoVan: {
    CoVan1: { type: String, required: true },
    CoVan2: { type: String, required: true }
  },
  ThongTinVeBanChuNhiem: {
    CacBan: { type: [banChuNhiemSchema], required: true }
  },
  TeamDuAn: {
    CacTeam: { type: [teamDuAnSchema], required: true },
    LuuY: { type: String, required: true }
  },
  QA: { type: [qaSchema], required: true },
  MoTaChiTietTungKhoa: {
    WebApp: { type: [khoaSchema], required: true },
    Game: { type: [khoaSchema], required: true },
    Data: { type: [khoaSchema], required: true }
  }
});

// Xuất mô hình để sử dụng trong các file khác
module.exports = mongoose.model('IUCClub', iucClubSchema);