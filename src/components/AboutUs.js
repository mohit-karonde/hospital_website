import React from 'react';

const AboutUs = ({ persons, services }) => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
    
      <h2>Our Team</h2>
      <div className="persons">
        {persons.map((person, index) => (
          <div key={index} className="person">
            {person.image && (
              <img
                src={URL.createObjectURL(person.image)}
                alt={person.name}
                className="person-image"
              />
            )}
            <h3>{person.name}</h3>
            <p>{person.details}</p>
          </div>
        ))}
      </div>
      <h2>Services We Offer</h2>
      <div className="services">
        {services.slice().reverse().map((service, index) => (
          <div key={index} className="service">
            {service.image && (
              <img
                src={URL.createObjectURL(service.image)}
                alt={service.heading}
                className="service-image"
              />
            )}
            <h3>{service.heading}</h3>
            <p>{service.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
