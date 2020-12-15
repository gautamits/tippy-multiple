import Tippy from '@tippyjs/react';
import {hideAll} from 'tippy.js';
import './App.css';
import Cat from './cat.jpeg'
import Dog from './dog.jpeg'
import Elephant from './elephant.jpeg'

function App() {
  const tooltips = [
    {
      name: 'cat',
      src: Cat
    },
    {
      name: 'dog',
      src: Dog
    },
    {
      name: 'elephant',
      src: Elephant
    }
  ]
  return (
    <>
    <div className="App">
      {tooltips.map(({name, src}) => (
        <Tippy
          arrow
          hideOnClick='toggle'
          content={<img alt={name} src={src}/>}
          trigger='click'
        >
          <span>{name}</span>
        </Tippy>)
      )}
    </div>
    <button onClick={e=>hideAll()}>
      hide all
    </button>
    </>
  );
}

export default App;
