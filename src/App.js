import React from 'react';
import './style.css';
import Input from './Components/Input';

export default function App() {
  return (
    <div className="container">
      <h1>SUBSCRIBE</h1>
      <p>sign up with your email address to receive news and updates</p>
      <div className="input-container">
        <Input spaceHolder="FirstName" />
        <Input spaceHolder="LastName" />
        <Input spaceHolder="Email" />
      </div>
      <button>Subscribe</button>
    </div>
  );
}
