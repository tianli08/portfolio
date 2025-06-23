import React from 'react';
import { Link } from 'react-router-dom';
import './casestudies.css';

//Inline styling done here since I thought it might've been easier. Copy + pasted.

const CaseStudies = () => {
  return (
    <div className="project-gallery">
      <Link to="/skiservice" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-card">
          <h2 className="project-heading">Service: SKIBYND</h2>
          <p className="project-description">
            For any services involving ski's.
          </p>
          <img 
            src="/Alpine_ski_bindings_01.jpg" 
            style={{
              maxWidth: '100%',
              maxHeight: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginTop: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
        </div>
      </Link>

      <Link to="/cardgame" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-card">
          <h2 className="project-heading">Play CardGame: Memory Tiles</h2>
          <p className="project-description">
            Tricky shuffling game.
          </p>
          <img 
            src="/cardgame.png" 
            style={{
              maxWidth: '100%',
              maxHeight: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginTop: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
        </div>
      </Link>

      <Link to="/sneakerresell" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-card">
          <h2 className="project-heading">E-Commerce: SneakerRetrieve</h2>
          <p className="project-description">
            Personalized shoe selling platform.
          </p>
          <img 
            src="/resell.jpg" 
            style={{
              maxWidth: '100%',
              maxHeight: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginTop: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
        </div>
      </Link>

      <Link to="/basketball" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-card">
          <h2 className="project-heading">Sports Website: Basketball Pro</h2>
          <p className="project-description">
            For all things basketball.
          </p>
          <img 
            src="/basketball.jpg" 
            style={{
              maxWidth: '100%',
              maxHeight: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginTop: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
        </div>
      </Link>
    </div>
  );
};

export default CaseStudies;
