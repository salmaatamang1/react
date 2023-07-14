
import React, { useState } from 'react';
import axios from 'axios';
import './cform.css'

const Cform = () => {
  const [wasteType, setWasteType] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [totalDonation, setTotalDonation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://', {
        wasteType,
        totalAmount,
        totalDonation,
      });

      
      setWasteType('');
      setTotalAmount('');
      setTotalDonation('');
    } catch (error) {
    
      console.error(error);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 20) {
      setTotalAmount(value);
    }
  };

  const handleDonationChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 20) {
      setTotalDonation(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contribution Form</h2>
      <div>
        <label>Type of waste:</label>
        <input
          type="text"
          value={wasteType}
          onChange={(e) => setWasteType(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Total amount:</label>
        <input
          type="number"
          value={totalAmount}
          onChange={handleAmountChange}
          min={0}
          max={20}
          required
        />
      </div>
      <div>
        <label>Total donation:</label>
        <input
          type="number"
          value={totalDonation}
          onChange={handleDonationChange}
          min={0}
          max={20}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Cform;

