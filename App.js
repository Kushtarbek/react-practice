import Computers from './component/Computers';
import Gallery from './component/Sculptures';
import ButtonGroup from './component/Buttons';
import Form from './component/InputFields';
import Events from './component/RespondingToEvents';
import LandingPage from './component/LandingPage';

function Button ({text= "Click Me!", color="blue", fontSize="12", handleClick}) {

  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  }
 
  return (<button onClick={() => handleClick('https://www.timer-tab.com/')} style={buttonStyle}>{text}</button>)
}




function App() {
  const handleButtonClick = (url) => {
    window.location.href = url
  };

  return (
    <div className='App'>
    

     {/* <Button handleClick={handleButtonClick}/> */}
     {/* <Button text="Don't Click Me!" color="red" fontSize={12}/>
     <Button text="Click Me!" color="blue" fontSize={20}/> */}
      {/* <ButtonGroup/> */}

     {/* <Computers /> */}
     {/* <Gallery />
     <div>
      
     <Form />
     <br/>
     <Events />
     </div> */}
     <LandingPage />
     
    </div>
  ); 
}

export default App;
