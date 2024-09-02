import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import './Home.css';
import img from '../property/doc.png';

const Home = ({ addCollection }) => {
  const [showModal, setShowModal] = useState(false);
  const [collectionData, setCollectionData] = useState({ name: '', collectionName: '', title: '' });
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleCreate = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    setCollectionData({ ...collectionData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = () => {
    addCollection(collectionData, files);
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="box1">
          <h1>Documentation Processing Engine...</h1>
          <p>This is a documentation processing one.......</p>
          <button onClick={handleCreate} className="button">Create</button>
        </div>
        <div className="box2">
          <img src={img} alt="Document Icon" className="large-icon" />
        </div>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Create Collection</h2>
          <input type="text" name="name" placeholder="Name" value={collectionData.name} onChange={handleChange} />
          <input type="text" name="collectionName" placeholder="Collection Name" value={collectionData.collectionName} onChange={handleChange} />
          <input type="text" name="title" placeholder="Title" value={collectionData.title} onChange={handleChange} />
          <input type="file" multiple onChange={handleFileChange} />
          <button onClick={handleSubmit} className="button">Submit</button>
        </Modal>
      )}
    </div>
  );
};

export default Home;
