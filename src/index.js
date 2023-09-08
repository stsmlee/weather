import './style.css';
import callAPI from './api';

const locationForm = document.getElementById('location-form');
const locationInput = document.getElementById('location-input');
locationInput.addEventListener('input', (e) => e.target.setCustomValidity(''));

locationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('location-input');
  callAPI(input);
});

// callAPI('New York');
