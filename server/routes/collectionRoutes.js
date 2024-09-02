

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const collectionFolder = path.join(__dirname, '../uploads', req.body.collectionName);
//     if (!fs.existsSync(collectionFolder)) {
//       fs.mkdirSync(collectionFolder, { recursive: true });
//     }
//     cb(null, collectionFolder);
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// // Route to handle file uploads and save collection data
// router.post('/upload', upload.array('files', 10), (req, res) => {
//   try {
//     const uploadedFiles = req.files.map(file => ({
//       filename: file.filename,
//       path: file.path,
//     }));

//     const collectionData = {
//       name: req.body.name,
//       collectionName: req.body.collectionName,
//       title: req.body.title,
//       files: uploadedFiles,
//     };

//     // Save the collection data as a JSON file
//     const collectionFolder = path.join(__dirname, '../uploads', req.body.collectionName);
//     const jsonFilePath = path.join(collectionFolder, 'collection.json');
//     fs.writeFileSync(jsonFilePath, JSON.stringify(collectionData, null, 2));

//     res.status(201).json({
//       message: 'Collection created and files uploaded successfully',
//       collectionData,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to upload files and save collection', error: err.message });
//   }
// });

// module.exports = router;



const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsFolder = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadsFolder)) {
      fs.mkdirSync(uploadsFolder, { recursive: true });
    }
    cb(null, uploadsFolder);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to handle file uploads and save collection data
router.post('/upload', upload.array('files', 10), (req, res) => {
  try {
    const uploadedFiles = req.files.map(file => ({
      filename: file.filename,
      path: file.path,
    }));

    const collectionData = {
      name: req.body.name,
      collectionName: req.body.collectionName,
      title: req.body.title,
      files: uploadedFiles,
    };

    // Save the collection data as a JSON file
    const jsonFileName = `${req.body.collectionName}_${Date.now()}.json`;
    const jsonFilePath = path.join(__dirname, '../uploads', jsonFileName);
    fs.writeFileSync(jsonFilePath, JSON.stringify(collectionData, null, 2));

    res.status(201).json({
      message: 'Collection created and files uploaded successfully',
      collectionData,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to upload files and save collection', error: err.message });
  }
});

// Route to fetch all collections
router.get('/collections', (req, res) => {
  const uploadsFolder = path.join(__dirname, '../uploads');

  fs.readdir(uploadsFolder, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read collections', error: err.message });
    }

    const collections = files.filter(file => file.endsWith('.json')).map(file => {
      const jsonFilePath = path.join(uploadsFolder, file);
      const collectionData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
      return collectionData;
    });

    res.status(200).json(collections);
  });
});

module.exports = router;
