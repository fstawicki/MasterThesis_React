import { useState } from 'react';
import './index.scss';

function App() {

  const [array, setArray] = useState([]);
  const [copyingArray, setCopyingArray] = useState([]);
  
  let array1 = [];
  let array2 = [];

  const renderElements = (number, e) => {

    for(let i=0; i<number; i++){
      array1[i] = `Element nr: ${i+1}`;
    }
    setArray(array1);

  }

  const copyArray = () => {
    setCopyingArray(array);
  }

  const editElements = () => {
    for(let i=0; i<array.length; i++){
      array2[i] = `${array[i]} + edited`;
    }
    setArray(array2)
  }

  const deleteElements = () => {
    setArray([]);
  }

  console.log(copyingArray);

  return (
    <div className="App">
      <div className="container">
        <div className="icon" />
        <h1 className='title'>React Testing App</h1>
        <div className="render_div">
          <button className="btn" onClick={(e) => renderElements(1000, e)}>Render 1000</button>
          <button className="btn" onClick={(e) => renderElements(10000, e)}>Render 10000</button>
          <button className="btn" onClick={(e) => renderElements(25000, e)}>Render 25000</button>
          <button className="btn" onClick={(e) => renderElements(50000, e)}>Render 50000</button>
        </div>
        <button className='btn' onClick={copyArray}>Copy Array</button>
        <button className="btn" onClick={editElements}>Edit Elements</button>
        <button className="btn" onClick={deleteElements}>Delete Elements</button>
        <div className="line" />
        <ul className='list'>{
          array.map((element) => (
            <li key={element}>{element}</li>
          ))
        }</ul>
      </div>
    </div>
  );
}

export default App;