import React, { useState } from 'react'
import ThemeContext from '../contexts/ThemeContext';
import '../styles/global.css'
import '../styles/theme.scss'
import '../node_modules/react-vis/dist/style.css';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
      <Component {...pageProps} />
      <style jsx global>{`
       body {
        background: ${theme==='dark' ? "#202120" : "#eef0f2"};
        }
      `}</style>
    </ThemeContext.Provider>
  )
}