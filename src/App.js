import React from 'react';
import './App.css';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otel Rezervasyon Sistemi</h1>
        <BookingForm />
      </header>
    </div>
  );
}

export default App;
