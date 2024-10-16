const express = require('express');
const router = express.Router();
const IUCClub = require('../models/subscriber'); // Model IUC Club

// Lấy tất cả dữ liệu của IUC Club
router.get('/', async (req, res) => {
  try {
    const allData = await IUCClub.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Lấy dữ liệu Trang Chủ
router.get('/homepage', async (req, res) => {
  try {
    const homepageData = await IUCClub.findOne().select('TrangChu');
    if (!homepageData) return res.status(404).json({ message: "No homepage data found" });
    res.json(homepageData.TrangChu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Trang Chủ
router.post('/homepage', async (req, res) => {
  try {
    const homepageData = req.body; // Dữ liệu từ request body
    let club = await IUCClub.findOne(); // Lấy dữ liệu hiện tại của IUCClub

    if (!club) {
      const newClub = new IUCClub({ TrangChu: homepageData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.TrangChu = homepageData;
      await club.save();
      return res.status(200).json(club.TrangChu);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin Giới Thiệu
router.get('/introduce', async (req, res) => {
  try {
    const introduceData = await IUCClub.findOne().select('GioiThieu');
    if (!introduceData) return res.status(404).json({ message: "No introduce data found" });
    res.json(introduceData.GioiThieu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Giới Thiệu
router.post('/introduce', async (req, res) => {
  try {
    const introduceData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ GioiThieu: introduceData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.GioiThieu = introduceData;
      await club.save();
      return res.status(200).json(club.GioiThieu);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin Cố vấn
router.get('/advisors', async (req, res) => {
  try {
    const advisorsData = await IUCClub.findOne().select('CoVan');
    if (!advisorsData) return res.status(404).json({ message: "No advisors data found" });
    res.json(advisorsData.CoVan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu cho Cố vấn
router.post('/advisors', async (req, res) => {
  try {
    const advisorsData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ CoVan: advisorsData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.CoVan = advisorsData;
      await club.save();
      return res.status(200).json(club.CoVan);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin Ban Điều Hành
router.get('/managementboard', async (req, res) => {
  try {
    const managementBoardData = await IUCClub.findOne().select('BanDieuHanh');
    if (!managementBoardData) return res.status(404).json({ message: "No management board data found" });
    res.json(managementBoardData.BanDieuHanh);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Ban Điều Hành
router.post('/managementboard', async (req, res) => {
  try {
    const managementBoardData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ BanDieuHanh: managementBoardData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.BanDieuHanh = managementBoardData;
      await club.save();
      return res.status(200).json(club.BanDieuHanh);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin Team Dự Án
router.get('/teamprojects', async (req, res) => {
  try {
    const teamProjectsData = await IUCClub.findOne().select('TeamDuAn');
    if (!teamProjectsData) return res.status(404).json({ message: "No team projects data found" });
    res.json(teamProjectsData.TeamDuAn);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Team Dự Án
router.post('/teamprojects', async (req, res) => {
  try {
    const teamProjectsData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ TeamDuAn: teamProjectsData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.TeamDuAn = teamProjectsData;
      await club.save();
      return res.status(200).json(club.TeamDuAn);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin FAQ
router.get('/faq', async (req, res) => {
  try {
    const faqData = await IUCClub.findOne().select('FAQ');
    if (!faqData) return res.status(404).json({ message: "No FAQ data found" });
    res.json(faqData.FAQ);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu cho FAQ
router.post('/faq', async (req, res) => {
  try {
    const faqData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ FAQ: faqData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.FAQ = faqData;
      await club.save();
      return res.status(200).json(club.FAQ);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin Đào Tạo
router.get('/educationslider', async (req, res) => {
  try {
    const educationSliderData = await IUCClub.findOne().select('DaoTaoSlider');
    if (!educationSliderData) return res.status(404).json({ message: "No education slider data found" });
    res.json(educationSliderData.DaoTaoSlider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Đào Tạo
router.post('/educationslider', async (req, res) => {
  try {
    const educationSliderData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ DaoTaoSlider: educationSliderData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.DaoTaoSlider = educationSliderData;
      await club.save();
      return res.status(200).json(club.DaoTaoSlider);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin Chương Trình Đào Tạo
router.get('/program', async (req, res) => {
  try {
    const programData = await IUCClub.findOne().select('ChuongTrinhDaoTao');
    if (!programData) return res.status(404).json({ message: "No program data found" });
    res.json(programData.ChuongTrinhDaoTao);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Chương Trình Đào Tạo
router.post('/program', async (req, res) => {
  try {
    const programData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ ChuongTrinhDaoTao: programData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.ChuongTrinhDaoTao = programData;
      await club.save();
      return res.status(200).json(club.ChuongTrinhDaoTao);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Lấy thông tin Hoạt Động
// Lấy thông tin Hoạt Động
router.get('/eventslider', async (req, res) => {
  try {
    const eventSliderData = await IUCClub.findOne().select('HoatDongSlider');
    if (!eventSliderData) return res.status(404).json({ message: "No event slider data found" });
    res.json(eventSliderData.HoatDongSlider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Hoạt Động
router.post('/eventslider', async (req, res) => {
  try {
    const eventSliderData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ HoatDongSlider: eventSliderData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.HoatDongSlider = eventSliderData;
      await club.save();
      return res.status(200).json(club.HoatDongSlider);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Lấy thông tin Gallery
router.get('/gallery', async (req, res) => {
  try {
    const galleryData = await IUCClub.findOne().select('Gallery');
    if (!galleryData) return res.status(404).json({ message: "No gallery data found" });
    res.json(galleryData.Gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Gallery
router.post('/gallery', async (req, res) => {
  try {
    const galleryData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ Gallery: galleryData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.Gallery = galleryData;
      await club.save();
      return res.status(200).json(club.Gallery);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Lấy thông tin Các Hoạt Động Khác
router.get('/othersevent', async (req, res) => {
  try {
    const otherEventsData = await IUCClub.findOne().select('CacHoatDongKhac');
    if (!otherEventsData) return res.status(404).json({ message: "No other events data found" });
    res.json(otherEventsData.CacHoatDongKhac);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST dữ liệu Các Hoạt Động Khác
router.post('/othersevent', async (req, res) => {
  try {
    const otherEventsData = req.body;
    const club = await IUCClub.findOne();
    if (!club) {
      const newClub = new IUCClub({ CacHoatDongKhac: otherEventsData });
      await newClub.save();
      return res.status(201).json(newClub);
    } else {
      club.CacHoatDongKhac = otherEventsData;
      await club.save();
      return res.status(200).json(club.CacHoatDongKhac);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Tạo mới dữ liệu IUC Club (POST toàn bộ dữ liệu)
router.post('/', async (req, res) => {
  const clubData = new IUCClub(req.body);
  try {
    const newClub = await clubData.save();
    res.status(201).json(newClub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
