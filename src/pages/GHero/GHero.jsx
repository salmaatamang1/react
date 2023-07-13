/*import React from 'react';
import './gHero.css'
import Footer from '../../components/Footer'
import {gcollector} from '../../data.js'
const GHero = () => {
  return (
    <div>
      <div className='main_container'>
    <h2>Our Hero</h2>
    <ul>
      {
        gcollector.map((gcollectors)=> <li key={gcollectors.gid}>
        <img src={gcollectors.photo} alt={gcollectors.name}/><br/>
        <h4>Name:{gcollectors.name}</h4><br/>
        <h4>Address:{gcollectors.address}</h4><br/>
        <h4>Number:{gcollectors.phonenumber}</h4>
        

        </li>)
      }
      </ul>  
   </div>
      
      <Footer/>
    </div>
  )
}

export default GHero
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gHero.css';
import Footer from '../../components/Footer';
import { gcollector } from '../../data.js';

const GHero = () => {
  const [gcollectors, setGCollectors] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/ghero/ghero/1')
      .then(response => {
        setGCollectors(response.data);
      })
      .catch(error => {
        console.error('Error fetching gcollectors:', error);
      });
  }, []);

  return (
    <div>
      <div className='main_container'>
        <h2>Our Hero</h2>
        <ul>
          {gcollector.map(gcollector => (
            <li key={gcollector.gid}>
              <img src={gcollector.photo} alt={gcollector.name} /><br />
              <h4>Name: {gcollector.name}</h4><br />
              <h4>Address: {gcollector.address}</h4><br />
              <h4>Number: {gcollector.phonenumber}</h4>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default GHero;  

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gHero.css';
import Footer from '../../components/Footer';
import { gcollector } from '../../data.js';

const GHero = () => {
  const [gcollectors, setGCollectors] = useState([]);
  const [newGCollector, setNewGCollector] = useState({
    name: '',
    address: '',
    phoneNumber: ''
  });

  useEffect(() => {
    fetchGCollectors();
  }, []);

  const fetchGCollectors = () => {
    axios
      .get('https://api.example.com/gcollectors')
      .then(response => {
        setGCollectors(response.data);
      })
      .catch(error => {
        console.error('Error fetching gcollectors:', error);
      });
  };

  const createGCollector = () => {
    axios
      .post('https://api.example.com/gcollectors', newGCollector)
      .then(response => {
        console.log('GCollector created successfully:', response.data);
        fetchGCollectors(); // Refresh the gcollectors list after creating
      })
      .catch(error => {
        console.error('Error creating gcollector:', error);
      });
  };

  const deleteGCollector = (gcollectorId) => {
    axios
      .delete(`https://api.example.com/gcollectors/${gcollectorId}`)
      .then(response => {
        console.log('GCollector deleted successfully:', response.data);
        fetchGCollectors(); // Refresh the gcollectors list after deleting
      })
      .catch(error => {
        console.error('Error deleting gcollector:', error);
      });
  };

  const updateGCollector = (gcollectorId, updatedData) => {
    axios
      .put(`https://api.example.com/gcollectors/${gcollectorId}`, updatedData)
      .then(response => {
        console.log('GCollector updated successfully:', response.data);
        fetchGCollectors(); // Refresh the gcollectors list after updating
      })
      .catch(error => {
        console.error('Error updating gcollector:', error);
      });
  };

  const handleCreate = () => {
    createGCollector();
    // Reset the form after creating
    setNewGCollector({
      name: '',
      address: '',
      phoneNumber: ''
    });
  };

  const handleDelete = (gcollectorId) => {
    deleteGCollector(gcollectorId);
  };

  const handleUpdate = (gcollectorId, updatedData) => {
    updateGCollector(gcollectorId, updatedData);
  };

  return (
    <div>
      <div className='main_container'>
        <h2>Our Hero</h2>
        <ul>
          {gcollector.map(gcollector => (
            <li key={gcollector.gid}>
              <img src={gcollector.photo} alt={gcollector.name} /><br />
              <h4>Name: {gcollector.name}</h4><br />
              <h4>Address: {gcollector.address}</h4><br />
              <h4>Number: {gcollector.phoneNumber}</h4>
              <button onClick={() => handleDelete(gcollector.gid)}>Delete</button>
              <button onClick={() => handleUpdate(gcollector.gid, { address: 'New Address' })}>Update</button>
            </li>
          ))}
        </ul>
        <h2>Create GCollector</h2>
        <input
          type="text"
          placeholder="Name"
          value={newGCollector.name}
          onChange={(e) => setNewGCollector({ ...newGCollector, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newGCollector.address}
          onChange={(e) => setNewGCollector({ ...newGCollector, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={newGCollector.phoneNumber}
          onChange={(e) => setNewGCollector({ ...newGCollector, phoneNumber: e.target.value })}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <Footer />
    </div>
  );
};

export default GHero;*/

