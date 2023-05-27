import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import axios from 'axios';

const UseFetch = (url) => {
  const [user, setUser] = useState('');

  // const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const headers = {
    Authorization: token,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          url,
          { headers }
        );
        setUser(response.data.details);
        console.log('This is the data from the backend >>>>>>>', response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [url]);

  return {user};
};

export default UseFetch;
