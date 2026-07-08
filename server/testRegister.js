import axios from 'axios';

const testRegister = async () => {
  try {
    const response = await axios.post('https://nutrigym-8ox5.onrender.com/api/v1/auth/register', {
      name: 'Test User',
      email: 'test@example.com',
      password: 'yourpassword',
      city: 'Test City',
      contact: '1234567890',
      age: 25,
      weight: 70,
      height: 175,
    });
    console.log('Registration Response:', response.data);
  } catch (error) {
    console.error('Error during registration:', error.response ? error.response.data : error.message);
  }
};

testRegister();
