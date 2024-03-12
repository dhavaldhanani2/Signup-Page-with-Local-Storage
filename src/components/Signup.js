
import React, { useState } from 'react';

const Signup = ({ onSubmit, onGet, onSet, onRemove, onClear }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
      <div style={styles.localStorageActions}>
        <button onClick={onGet} style={styles.button}>
          Get from Local Storage
        </button>
        <button onClick={onSet} style={styles.button}>
          Set to Local Storage
        </button>
        <button onClick={onRemove} style={styles.button}>
          Remove from Local Storage
        </button>
        <button onClick={onClear} style={styles.button}>
          Clear Local Storage
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
    fontSize: '16px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    margin: '5px 0',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  localStorageActions: {
    marginTop: '20px',
  },
};

export default Signup;
