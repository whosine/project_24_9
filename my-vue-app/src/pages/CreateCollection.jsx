
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './CreateCollection.css';

// const CreateCollection = ({ collections }) => {
//   return (
//     <div className="create-container">
//       <div className="header">
//         <h1>Create Collection</h1>
//         <Link to="/" className="button_2">Back</Link>
//       </div>
//       <div className="collections-grid">
//         {collections.map((collection, index) => (
//           <Link
//             key={index}
//             to={`/view/${collection.collectionName}`}
//             state={{ collection }}
//             className="collection-card"
//           >
//             {/* Render the first image as a thumbnail if it exists */}
//             {collection.files && collection.files.length > 0 && (
//               <img
//                 src={`http://localhost:5000/uploads/${collection.files[0].filename}`}
//                 alt={`Thumbnail for ${collection.collectionName}`}
//                 className="collection-thumbnail"
//               />
//             )}
//             <h2>{collection.collectionName}</h2>
//             <h3>Name: {collection.name}</h3>
//             <h4>Title: {collection.title}</h4>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CreateCollection;





import React from 'react';
import { Link } from 'react-router-dom';
import './CreateCollection.css';

const CreateCollection = ({ collections }) => {
  return (
    <div className="create-container">
      <div className="header">
        <h1>Create Collection</h1>
        <Link to="/" className="button_2">Back</Link>
      </div>
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <Link
            key={index}
            to={`/view/${collection.collectionName}`}
            state={{ collection }}
            className="collection-card"
          >
            {/* Render the first image as a thumbnail if it exists */}
            {collection.files && collection.files.length > 0 && (
              <img
                src={`http://localhost:5000/uploads/${collection.files[0].filename}`}
                alt={`Thumbnail for ${collection.collectionName}`}
                className="collection-thumbnail"
              />
            )}
            <h2>{collection.collectionName}</h2>
            <h3>Name: {collection.name}</h3>
            <h4>Title: {collection.title}</h4>
          </Link>
        ))}
      </div>
      <div className="footer">
        <p>Total Collections: {collections.length}</p>
      </div>
    </div>
  );
};

export default CreateCollection;
