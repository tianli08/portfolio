
import React, { useEffect, useState, useRef } from "react";
import './skiservice.css';
const Modal = ({ children, show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};
const SkiService = () => {
  const [modalState, setModalState] = React.useState({
    about: false,
    rental: false,
    purchase: false,
    repair: false,
    booking: false,
  });
  const openModal = (modalName) => setModalState(prevState => ({ ...prevState, [modalName]: true }));
  const closeModal = (modalName) => setModalState(prevState => ({ ...prevState, [modalName]: false }));
  const services = [
    {
      name: 'rental',
      title: 'Ski Rentals',
      description: 'Find the perfect quality skis for any type of level, any occasion. Perfect for beginners all the way to double diamond athletes.',
      learnMore: 'More desc here.',
      image: '/skirentals.jpg'
    },
    {
      name: 'purchase',
      title: 'Gear Purchases',
      description: 'Done with constantly buying rentals and paying those prices? Or decided on a seasons pass? We have gear for purchase too!',
      learnMore: 'More desc here.',
      image: '/gearpurchases.jpg'
    },
    {
      name: 'repair',
      title: 'Repairs',
      description: 'From fresh season maintenance to mid season repairs, we got you covered! Waxing, binding, fixing, we got everything!',
      learnMore: 'More desc here.',
      image: '/skirepairs.jpg'
    }
  ];
  return (
    <div className="ski-service-container">
      <header className="brand-header">
        <img src='/logoski.png' alt="Company Brand" className="brand-logo" />
        <h1 className="brand-title">SkiPeak Services</h1>
        <button className="book-appointment-btn" onClick={() => openModal('booking')}>Book an Appointment</button>
      </header>
      <section className="about-section">
        <div className="about-image">
          <img src="aboutus.jpg" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Our Shop</h2>
          <p>
            Located in the mountains of Ottawa, SkiPeak is bound to set you up for the most enjoyable experience of your life on the slopes.
          </p>
          <button className="learn-more-btn" onClick={() => openModal('about')}>Find Out More</button>
        </div>
      </section>
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-row">
          {services.map(service => (
            <div key={service.name} className="service-box">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="learn-more-btn" onClick={() => openModal(service.name)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>
      <Modal show={modalState.about} onClose={() => closeModal('about')}>
        <h2 style={{ color: 'white' }}>Our Story</h2>
        <p style={{ color: 'white' }}>SkiPeak has a simple concept to it : to be able to provide everything any customers need for skiing. Whether its renting skis or even buying brand new ones, SkiPeak has you covered. We are aiming to be the only shop you need and the only shop you'll ever need, ensure your trip is the best it ever will be.</p>
      </Modal>
      {services.map(service => (
        <Modal key={`${service.name}-modal`} show={modalState[service.name]} onClose={() => closeModal(service.name)}>
          <h2 style={{ color: 'white' }}>More on {service.title}</h2>
          <p>{service.learnMore}</p>
        </Modal>
      ))}
      <Modal show={modalState.booking} onClose={() => closeModal('booking')}>
        <h2 style={{ color: 'white' }}>Book Your Appointment</h2>
        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
          <label htmlFor="service-type">Service Type:</label>
          <select id="service-type" name="service-type" required>
            <option value="">--Please choose an option--</option>
            <option value="binding">Equipment Binding</option>
            <option value="waxing">Equipment Waxing</option>
            <option value="replacement">Equipment Replacement</option>
          </select>
          <button type="submit" className="submit-appointment-btn">Submit</button>
        </form>
      </Modal>
    </div>
  );
};
export default SkiService;
