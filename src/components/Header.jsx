import React from 'react';
import profileImg from '../assets/profile.JPG';

export default function Header() {
    
    return (
      <header>
        <img src={profileImg} alt="Stylized atom" />
        <h1>AMANDEEP KAUR SANDHU</h1>
        <p>
          Full Stack Web Developer
        </p>
      </header>
    );
  }