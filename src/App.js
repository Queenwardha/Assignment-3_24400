import React, { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: isDarkMode ? '#333333' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#333333',
      }}
    >
      <div className="switcher">
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      {!isLoggedIn ? (
        <div className="login-page">
          <h1>Login</h1>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <>
          <h1>Welcome to the App</h1>
          {isOnline ? (
            <div
              className="notification"
              style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '10px',
                marginTop: '20px',
                borderRadius: '5px',
                fontWeight: 'bold',
                width: '200px',
                textAlign: 'center',
              }}
            >
              Online
            </div>
          ) : (
            <div
              className="notification"
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '10px',
                marginTop: '20px',
                borderRadius: '5px',
                fontWeight: 'bold',
                width: '200px',
                textAlign: 'center',
              }}
            >
              Offline
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
