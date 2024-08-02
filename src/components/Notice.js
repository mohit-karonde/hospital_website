import React from 'react';

const Notice = ({ notifications }) => {
  return (
    <div>
      <h1>Notice Board</h1>
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul>
          {notifications.slice().reverse().map((notif, index) => (
            <li key={index}>
              <h3>{notif.subject}</h3>
              <p>{notif.matter}</p>
              {notif.pdf && (
                <a href={URL.createObjectURL(notif.pdf)} download>
                  Download PDF
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notice;
