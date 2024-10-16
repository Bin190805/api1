const mongoose = require('mongoose');

// Schema cho hình ảnh
const imageSchema = new mongoose.Schema({
  url: { type: String } // Không bắt buộc
});

// Schema cho các cố vấn
const advisorSchema = new mongoose.Schema({
  name: { type: String }, // Không bắt buộc
  position: { type: String }, // Không bắt buộc
  imgSrc: { type: String } // Không bắt buộc
});

// Schema cho ban điều hành
const managementBoardSchema = new mongoose.Schema({
  name: { type: String }, // Không bắt buộc
  role: { type: String }, // Không bắt buộc
  term: { type: String }, // Không bắt buộc
  imgSrc: { type: String }, // Không bắt buộc
  status: { type: String }, // Không bắt buộc
  isButtonDisabled: { type: Boolean }, // Không bắt buộc
  link: { type: String } // Không bắt buộc
});

// Schema cho team dự án
const teamProjectSchema = new mongoose.Schema({
  title: { type: String }, // Không bắt buộc
  image: { type: String } // Không bắt buộc
});

// Schema cho FAQ
const faqSchema = new mongoose.Schema({
  question: { type: String }, // Không bắt buộc
  answer: { type: String } // Không bắt buộc
});

// Schema cho các chương trình đào tạo
const programSchema = new mongoose.Schema({
  title: { type: String }, // Không bắt buộc
  image: { type: String }, // Không bắt buộc
  description: { type: [String] } // Không bắt buộc
});

// Schema cho hoạt động
const activitySchema = new mongoose.Schema({
  title: { type: String }, // Không bắt buộc
  description: { type: String }, // Không bắt buộc
  image: { type: String } // Không bắt buộc
});

// Schema chính cho IUC Club
const iucClubSchema = new mongoose.Schema({
  TrangChu: {
    header_title: { type: String }, // Không bắt buộc
    header_description: { type: String }, // Không bắt buộc
    slider_title: { type: String }, // Không bắt buộc
    slider_description: { type: String }, // Không bắt buộc
    images: { type: [imageSchema], default: [] } // Không bắt buộc
  },
  GioiThieu: {
    title: { type: String }, // Không bắt buộc
    slogan: { type: String }, // Không bắt buộc
    description: { type: String }, // Không bắt buộc
    images: { type: [String], default: [] } // Không bắt buộc
  },
  CoVan: {
    title: { type: String }, // Không bắt buộc
    description: { type: String }, // Không bắt buộc
    data: { type: [advisorSchema], default: [] } // Không bắt buộc
  },
  BanDieuHanh: {
    title: { type: String }, // Không bắt buộc
    data: { type: [managementBoardSchema], default: [] } // Không bắt buộc
  },
  TeamDuAn: {
    title: { type: String }, // Không bắt buộc
    data: { type: [teamProjectSchema], default: [] } // Không bắt buộc
  },
  FAQ: {
    title: { type: String }, // Không bắt buộc
    description: { type: String }, // Không bắt buộc
    data: { type: [faqSchema], default: [] } // Không bắt buộc
  },
  DaoTaoSlider: {
    title: { type: String }, // Không bắt buộc
    description: { type: String }, // Không bắt buộc
    img: { type: String } // Không bắt buộc
  },
  ChuongTrinhDaoTao: {
    title: { type: String }, // Không bắt buộc
    data: { type: [programSchema], default: [] } // Không bắt buộc
  },
  HoatDongSlider: {
    title: { type: String }, // Không bắt buộc
    description: { type: String }, // Không bắt buộc
    image: { type: String }, // Không bắt buộc
    data: { type: [activitySchema], default: [] } // Không bắt buộc
  },
  CacHoatDongKhac: {
    title: { type: String }, // Không bắt buộc
    events: [
      {
        img: { type: String }, // Không bắt buộc
        title: { type: String } // Không bắt buộc
      }
    ]
  },
  Gallery: { // Thêm phần Gallery
    title: { type: String }, // Không bắt buộc
    data: [
      {
        title: { type: String }, // Không bắt buộc
        description: { type: String }, // Không bắt buộc
        image: { type: String } // Không bắt buộc
      }
    ]
  }
});

module.exports = mongoose.model('IUCClub', iucClubSchema);