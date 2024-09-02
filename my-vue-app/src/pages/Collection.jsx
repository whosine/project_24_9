// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './Collection.css';

// const Collection = () => {
//   const location = useLocation();
//   const { collection } = location.state || {};

//   if (!collection) {
//     return <div>No collection data available</div>;
//   }

//   return (
//     <div className="collection-detail-container">
//       <div className="card-container">
//         <div className="data-card">
//           <h1 className="collection-title">{collection.collectionName}</h1>
//           <div className="data-content">
//             <p><strong>Name:</strong> {collection.name}</p>
//             <p><strong>Collection Name:</strong> {collection.collectionName}</p>
//             <p><strong>Title:</strong> {collection.title}</p>
//           </div>
//         </div>
//         <div className="image-card">
//           {collection.files && collection.files.length > 0 ? (
//             collection.files.map((file, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:5000/uploads/${collection.collectionName}/${file.filename}`}
//                 alt={`Uploaded file ${index + 1}`}
//                 className="uploaded-image"
//               />
//             ))
//           ) : (
//             <p>No files uploaded</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;



