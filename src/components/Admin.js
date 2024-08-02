import React, { useState } from 'react';

const Admin = ({ addNotification, deleteNotification, notifications, setHomeContent, addPerson, deletePerson, addService, deleteService, persons, services }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [matter, setMatter] = useState('');
  const [pdf, setPdf] = useState(null);
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [leftDescription, setLeftDescription] = useState('');
  const [rightDescription, setRightDescription] = useState('');
  const [headline, setHeadline] = useState('');
  const [personName, setPersonName] = useState('');
  const [personDetails, setPersonDetails] = useState('');
  const [personImage, setPersonImage] = useState(null);
  const [serviceHeading, setServiceHeading] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');
  const [serviceImage, setServiceImage] = useState(null);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  const handleAddNotification = () => {
    if (subject && matter) {
      const newNotification = { subject, matter, pdf };
      addNotification(newNotification);
      setSubject('');
      setMatter('');
      setPdf(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSetHomeContent = () => {
    const newContent = { leftImage, rightImage, leftDescription, rightDescription, headline };
    setHomeContent(newContent);
    setLeftImage(null);
    setRightImage(null);
    setLeftDescription('');
    setRightDescription('');
    setHeadline('');
  };

  const handleAddPerson = () => {
    if (personName && personDetails && personImage) {
      const newPerson = { name: personName, details: personDetails, image: personImage };
      addPerson(newPerson);
      setPersonName('');
      setPersonDetails('');
      setPersonImage(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleAddService = () => {
    if (serviceHeading && serviceDetails && serviceImage) {
      const newService = { heading: serviceHeading, details: serviceDetails, image: serviceImage };
      addService(newService);
      setServiceHeading('');
      setServiceDetails('');
      setServiceImage(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Admin Dashboard</h1>

          <h2>Manage Home Page Content</h2>
          <input
            type="file"
            onChange={(e) => setLeftImage(e.target.files[0])}
          />
          <input
            type="file"
            onChange={(e) => setRightImage(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Headline"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
          <textarea
            placeholder="Left Image Description"
            value={leftDescription}
            onChange={(e) => setLeftDescription(e.target.value)}
          />
          <textarea
            placeholder="Right Image Description"
            value={rightDescription}
            onChange={(e) => setRightDescription(e.target.value)}
          />
          <button onClick={handleSetHomeContent}>Update Home Content</button>

          <h2>Add Notification</h2>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Matter"
            value={matter}
            onChange={(e) => setMatter(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setPdf(e.target.files[0])}
          />
          <button onClick={handleAddNotification}>Add Notification</button>

          <h2>Existing Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>
                <h3>{notification.subject}</h3>
                <p>{notification.matter}</p>
                {notification.pdf && <a href={URL.createObjectURL(notification.pdf)} target="_blank" rel="noopener noreferrer">View PDF</a>}
                <button className="delete" onClick={() => deleteNotification(index)}>Delete</button>
              </li>
            ))}
          </ul>

          <h2>Add Person</h2>
          <input
            type="text"
            placeholder="Name"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
          <textarea
            placeholder="Details"
            value={personDetails}
            onChange={(e) => setPersonDetails(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setPersonImage(e.target.files[0])}
          />
          <button onClick={handleAddPerson}>Add Person</button>

          <h2>Existing Persons</h2>
          <ul>
            {persons.map((person, index) => (
              <li key={index}>
                <h3>{person.name}</h3>
                <p>{person.details}</p>
                {person.image && <img src={URL.createObjectURL(person.image)} alt={person.name} />}
                <button className="delete" onClick={() => deletePerson(index)}>Delete</button>
              </li>
            ))}
          </ul>

          <h2>Add Service</h2>
          <input
            type="text"
            placeholder="Heading"
            value={serviceHeading}
            onChange={(e) => setServiceHeading(e.target.value)}
          />
          <textarea
            placeholder="Details"
            value={serviceDetails}
            onChange={(e) => setServiceDetails(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setServiceImage(e.target.files[0])}
          />
          <button onClick={handleAddService}>Add Service</button>

          <h2>Existing Services</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <h3>{service.heading}</h3>
                <p>{service.details}</p>
                {service.image && <img src={URL.createObjectURL(service.image)} alt={service.heading} />}
                <button className="delete" onClick={() => deleteService(index)}>Delete</button>
              </li>
            ))}
          </ul>

        </div>
      ) : (
        <div>
          <h1>Admin Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
