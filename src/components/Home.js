import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ homeContent }) => {
  return (
    <div>
      <h1>Sparsh Multispeciality Hospital</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <div style={{ width: '25%', textAlign: 'center', marginRight: '10px' }}>
          {homeContent.leftImage && (
            <img
              src={URL.createObjectURL(homeContent.leftImage)}
              alt="Left"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '1/1' }}
            />
          )}
          <p>{homeContent.leftDescription}</p>
        </div>
        <div style={{ width: '50%', textAlign: 'center' }}>
          <h2>{homeContent.headline}</h2>
        </div>
        <div style={{ width: '25%', textAlign: 'center', marginLeft: '10px' }}>
          {homeContent.rightImage && (
            <img
              src={URL.createObjectURL(homeContent.rightImage)}
              alt="Right"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '1/1' }}
            />
          )}
          <p>{homeContent.rightDescription}</p>
        </div>
      </div>
      <p>{homeContent.description}</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/notice" style={{ textDecoration: 'none', color: '#007BFF' }}>
          View Notices
        </Link>
      </div>
    </div>
  );
};

export default Home;
