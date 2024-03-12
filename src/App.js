
import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
;

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleSignup = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  const handleGetLocalStorage = () => {
    const storedData = localStorage.getItem('users');
    alert(`Data from Local Storage: ${storedData}`);
  };

  const handleSetLocalStorage = () => {
    const dataToStore = 'Sample Data';
    localStorage.setItem('exampleData', dataToStore);
    alert(`Data set to Local Storage: ${dataToStore}`);
  };

  const handleRemoveLocalStorage = () => {
    localStorage.removeItem('exampleData');
    alert('Data removed from Local Storage');
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
    alert('Local Storage cleared');
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.signupContainer}>
        <Signup
          onSubmit={handleSignup}
          onGet={handleGetLocalStorage}
          onSet={handleSetLocalStorage}
          onRemove={handleRemoveLocalStorage}
          onClear={handleClearLocalStorage}
        />
      </div>
    
    </div>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  signupContainer: {
    maxWidth: '400px',
    marginRight: '20px',
  },
  userListContainer: {
    flex: 1,
  },
};

export default App;
