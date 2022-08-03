import { useState } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Section from './components/section';
import image from './images/1.jpg';

function App() {
  const [ darkMode, setDarkMode ] = useState(false);
  const title = 'Homepage'
  const paragraph = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita velit dolor sed quis unde. Illo dolorum magni eveniet adipisci eius unde iure, architecto dignissimos fugiat provident cum, explicabo illum minus!'

  return (
    <div className={`App ${darkMode && 'dark-mode'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Section darkMode={darkMode} setDarkMode={setDarkMode} title={title} paragraph={paragraph} image={image}/>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
