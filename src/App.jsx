import { useState } from 'react';
import './index.scss';

function App() {

  let elements = [
    'First Element',
    'Second Element',
    'Third Element',
    'Fourth Element',
    'Fifth Element',
  ]

  const [numbers, setNumbers] = useState([]);

  const createElements = () => {
    for(let i=0;i<=1000;i++){
      let random = (1 + (Math.random() * (1000 - 1)));
      setNumbers([...random])
    }
  }

  return (
    <div className="App">
      <div className="container">
        <img src="./reacticon.png" alt="react icon" />
        <h1 className='title'>React Testing App</h1>
        <button className="btn" onClick={createElements}>Add Elements</button>
        <button className="btn">Edit Elements</button>
        <button className="btn">Delete One Element</button>
        <button className="btn">Delete All Elements</button>
        <ul className='list'>{
          elements.map((el) => <li className='element'>{el}</li>)
        }</ul>
        <ul>{
          numbers.map((num) => <li key={num}>{num}</li>)
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
