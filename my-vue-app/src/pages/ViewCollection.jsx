
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './ViewCollection.css';

// const ViewCollection = () => {
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
//             <input placeholder='enter the filed name'></input>
//             <button > add input filed</button>
//           </div>
//         </div>
//         <div className="image-card">
//           {collection.files && collection.files.length > 0 ? (
//             collection.files.map((file, index) => (
//               <img
//                 key={index}
//                 src={`http://localhost:5000/uploads/${file.filename}`}
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

// export default ViewCollection;





import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ViewCollection.css';

const ViewCollection = () => {
  const location = useLocation();
  const { collection } = location.state || {};
  
  const [fields, setFields] = useState([]);
  const [inputFieldName, setInputFieldName] = useState('');

  if (!collection) {
    return <div>No collection data available</div>;
  }

  const handleAddField = () => {
    if (inputFieldName.trim() !== '') {
      setFields([...fields, inputFieldName]);
      setInputFieldName('');
    }
  };

  return (
    <div className="collection-detail-container">
      <div className="card-container">
        <div className="data-card">
          <h1 className="collection-title">{collection.collectionName}</h1>
          <div className="data-content">
            <p><strong>Name:</strong> {collection.name}</p>
            <p><strong>Collection Name:</strong> {collection.collectionName}</p>
            <p><strong>Title:</strong> {collection.title}</p>
            
            {fields.map((field, index) => (
              <div key={index}>
                <p><strong>{field}:</strong> <input type="text" placeholder={`Enter ${field}`} /></p>
              </div>
            ))}
            
            <input
              type="text"
              placeholder="Enter field name"
              value={inputFieldName}
              onChange={(e) => setInputFieldName(e.target.value)}
            />
            <button onClick={handleAddField}>Add Input Field</button>
          </div>
        </div>
        <div className="image-card">
          {collection.files && collection.files.length > 0 ? (
            collection.files.map((file, index) => (
              <img
                key={index}
                src={`http://localhost:5000/uploads/${file.filename}`}
                alt={`Uploaded file ${index + 1}`}
                className="uploaded-image"
              />
            ))
          ) : (
            <p>No files uploaded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewCollection;
