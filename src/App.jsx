import React, { useState } from 'react';
import { fetchWeather } from './Services/weatherService';
import {  LogEvent } from './Services/FirebaseSerice';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    LogEvent('click', { city: city });
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
      
    }
  };

  const getWeatherEmoji = (description) => {
    if (description.includes('sunny') || description.includes('clear')) {
      return '☀️';
    } else if (description.includes('cloud')) {
      return '☁️';
    } else if (description.includes('night')) {
      return '🌙';
    } else {
      return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-8">Weather App</h1>
      <div className="flex space-x-4 mb-8">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-lg text-black"
          placeholder="Enter city"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded-lg"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && (
        <div className="mt-8 p-8 bg-white rounded-lg shadow-lg text-center text-black">
          <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
          <p className="text-xl mb-2">
            {weather.weather[0].description} {getWeatherEmoji(weather.weather[0].description)}
          </p>
          <p className="text-xl">Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;
