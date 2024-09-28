
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateCollection from './pages/CreateCollection';
import ViewCollection from './pages/ViewCollection';
import './App.css';

function App() {
  const [collections, setCollections] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/collections');
        setCollections(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  const addCollection = async (collectionData, files) => {
    try {
      const formData = new FormData();
      formData.append('name', collectionData.name);
      formData.append('collectionName', collectionData.collectionName);
      formData.append('title', collectionData.title);

      files.forEach((file) => {
        formData.append('files', file);
      });

      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCollections([...collections, response.data.collectionData]);
    } catch (error) {
      console.error('Error adding collection:', error);
    }
  };

  return (
    <>
      {location.pathname === '/' && <Navbar />}

      <div className="container">
        <Routes>
          <Route path="/" element={<Home addCollection={addCollection} />} />
          <Route path="/create" element={<CreateCollection collections={collections} />} />
          <Route path="/view/:collectionName" element={<ViewCollection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

