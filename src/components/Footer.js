import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  return (
    <div className='footer'>
      Gracias por tomarte el tiempo para visitarme<span style={styleSymbol}>©</span> 2025
    </div>
  )
}
