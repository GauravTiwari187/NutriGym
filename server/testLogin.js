import axios from 'axios';

const testLogin = async () => {
  try {
    const response = await axios.post('https://nutrigym-8ox5.onrender.com/api/v1/auth/login', {
      email: 'test@example.com',
      password: 'yourpassword',
    });
    console.log('Login Response:', response.data);
  } catch (error) {
    console.error('Error during login:', error.response ? error.response.data : error.message);
  }
};

testLogin();
