import './style.css';
import callAPI from './api';

const locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('location-input').value;
  callAPI(input);
});

// callAPI('New York');
