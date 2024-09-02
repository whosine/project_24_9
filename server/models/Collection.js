
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

// // Route to get all collections
// router.get('/collections', (req, res) => {
//     const uploadsFolder = path.join(__dirname, '../uploads');
    
//     fs.readdir(uploadsFolder, (err, folders) => {
//       if (err) {
//         return res.status(500).json({ message: 'Failed to read collections', error: err.message });
//       }
  
//       const collections = folders.map(folder => {
//         const jsonFilePath = path.join(uploadsFolder, folder, 'collection.json');
//         if (fs.existsSync(jsonFilePath)) {
//           const collectionData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
//           return collectionData;
//         }
//         return null;
//       }).filter(collection => collection !== null);
  
//       res.status(200).json(collections);
//     });
//   });
  

// module.exports = router;



