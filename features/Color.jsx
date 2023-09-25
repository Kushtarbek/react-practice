import { useState } from 'react';   // useState() hook

const ChangeColor = () => {
  const [color, setColor] = useState(''); 
  return (
    <div>
      <p>Progressively effective resources via business metrics.</p>
      <br />
      <div className='inputBtn-container'>
        <input
          type='text'
          className='input'
        />
        <button className='btn'>change color text</button>
      </div>
    </div>
  );
};

export default ChangeColor;