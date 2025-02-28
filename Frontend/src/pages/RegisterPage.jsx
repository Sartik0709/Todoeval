import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://todoeval.onrender.com/register', { username, password });
      alert('User registered successfully');
      navigation('/tasks')
    } catch (error) {
      alert('Error registering user');
    }
  };
  const goToLogin = () => {
    navigation('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
        <button onClick={goToLogin}>Already have aaccount</button>
      </form>
    </div>
  );
};

export default RegisterPage;
