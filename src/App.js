import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Notice from './components/Notice';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [homeContent, setHomeContent] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [persons, setPersons] = useState([]);
  const [services, setServices] = useState([]);

  const addNotification = (notification) => {
    setNotifications([notification, ...notifications]);
  };

  const deleteNotification = (index) => {
    const newNotifications = [...notifications];
    newNotifications.splice(index, 1);
    setNotifications(newNotifications);
  };

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const deletePerson = (index) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };

  const addService = (service) => {
    setServices([...services, service]);
  };

  const deleteService = (index) => {
    const newServices = [...services];
    newServices.splice(index, 1);
    setServices(newServices);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/notice">Notice</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home homeContent={homeContent} />
          </Route>
          <Route path="/about-us">
            <AboutUs persons={persons} services={services} />
          </Route>
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/notice">
            <Notice notifications={notifications} />
          </Route>
          <Route path="/admin">
            <Admin
              addNotification={addNotification}
              deleteNotification={deleteNotification}
              notifications={notifications}
              setHomeContent={setHomeContent}
              addPerson={addPerson}
              deletePerson={deletePerson}
              persons={persons}
              addService={addService}
              deleteService={deleteService}
              services={services}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
