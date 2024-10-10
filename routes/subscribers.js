const express = require('express');
const router = express.Router();
const IUCClub = require('../models/subscriber'); // Model IUC Club (chỉnh tên file models tương ứng)

// Lấy tất cả thông tin IUC Club
router.get('/', async (req, res) => {
  try {
    const clubData = await IUCClub.find();
    res.json(clubData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Lấy thông tin câu lạc bộ theo ID
router.get('/:id', getIUCClub, (req, res) => {
  res.json(res.club); // Gửi dữ liệu câu lạc bộ dựa trên ID
});

// Tạo mới thông tin câu lạc bộ
router.post('/', async (req, res) => {
  const clubData = new IUCClub(req.body); // Tự động nhận tất cả dữ liệu từ body
  try {
    const newClub = await clubData.save();
    res.status(201).json(newClub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Cập nhật thông tin câu lạc bộ
router.patch('/:id', getIUCClub, async (req, res) => {
  // Cập nhật từng trường nếu có trong request body
  Object.assign(res.club, req.body); // Sao chép tất cả thuộc tính từ req.body vào object câu lạc bộ hiện có
  try {
    const updatedClub = await res.club.save();
    res.json(updatedClub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Xóa thông tin câu lạc bộ
router.delete('/:id', getIUCClub, async (req, res) => {
  try {
    await res.club.deleteOne();
    res.json({ message: 'Deleted IUC Club information' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware để lấy dữ liệu câu lạc bộ theo ID
async function getIUCClub(req, res, next) {
  let club;
  try {
    club = await IUCClub.findById(req.params.id);
    if (club == null) {
      return res.status(404).json({ message: 'Cannot find club information' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.club = club;
  next();
}

module.exports = router;