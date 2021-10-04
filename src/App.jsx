import React, { useState } from 'react';
import './App.css';

const GIFS = [
  'https://media3.giphy.com/media/5et67krLaThvja8DPZ/giphy480p.mp4?cid=ecf05e47l6hadq2jfqsp2t08xhwodns02hettjufkgw3ha5d&rid=giphy480p.mp4&ct=v',
  'https://media4.giphy.com/media/QpibquJGVzhsHsIotL/giphy360p.mp4?cid=ecf05e47l6hadq2jfqsp2t08xhwodns02hettjufkgw3ha5d&rid=giphy360p.mp4&ct=v&cc=en',
];

function App() {
  // eslint-disable-next-line no-unused-vars
  const [gifs, setGifs] = useState(GIFS);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((singleGif) => (
            <img src={singleGif} alt="gif" />
          ))
        }
      </section>
    </div>
  );
}

export default App;
