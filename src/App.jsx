import { useState } from 'react';
import './index.scss';

function App() {

  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);
  // const [editArray, setEditArray] = useState([]);
  let array1 = [];
  
  const renderElements = (number, e) => {

    for(let i=0; i<number; i++){
      array1[i] = `Element nr: ${i+1}`;
    }
    setArray(array1);

  }

  const copyArray = () => {
    setArray2(array);
  }

  const editElements = () => {
    // for(let i=0; i<array.length; i++){
    //   setArray(`${array[i]} edited`);
    // }
  }

  // console.log(array);
  // console.log(array1);

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
        <button className="btn">Delete Elements</button>
        <div className="line"></div>
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
