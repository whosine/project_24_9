

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const router = express.Router();

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadFolder = path.join(__dirname, '../uploads');
//     if (!fs.existsSync(uploadFolder)) {
//       fs.mkdirSync(uploadFolder, { recursive: true });
//     }
//     cb(null, uploadFolder);
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

//     // Save the collection data as a JSON file in the same folder
//     const jsonFilePath = path.join(__dirname, '../uploads', `${req.body.collectionName}.json`);
//     fs.writeFileSync(jsonFilePath, JSON.stringify(collectionData, null, 2));

//     res.status(201).json({
//       message: 'Collection created and files uploaded successfully',
//       collectionData,
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to upload files and save collection', error: err.message });
//   }
// });

// // Route to fetch all collections
// router.get('/collections', (req, res) => {
//   try {
//     const uploadFolder = path.join(__dirname, '../uploads');
//     const collections = fs.readdirSync(uploadFolder)
//       .filter(file => path.extname(file) === '.json')
//       .map(file => JSON.parse(fs.readFileSync(path.join(uploadFolder, file), 'utf-8')));

//     res.status(200).json(collections);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch collections', error: err.message });
//   }
// });

// module.exports = router;
