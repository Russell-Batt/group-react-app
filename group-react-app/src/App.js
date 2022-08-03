
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Section from './components/section';
import  image from './images/1.jpg'


function App() {
  const title = 'Homepage'
  const paragraph = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita velit dolor sed quis unde. Illo dolorum magni eveniet adipisci eius unde iure, architecto dignissimos fugiat provident cum, explicabo illum minus!'
  // const image = 'ima'


  return (
    <div className="App">
      <Header />
      <Section title={title} paragraph={paragraph} image={image}/>
      <Footer />
    </div>
  );
}

export default App;
