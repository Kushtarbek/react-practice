import Computers from './component/Computers';
import Gallery from './component/Sculptures';
import ButtonGroup from './component/Buttons';
import Form from './component/InputFields';
import Events from './component/RespondingToEvents';
import LandingPage from './component/LandingPage';
import Carousel from './component/Carousel';
import UseCaseUseEffect from './Hooks/UseCaseFetchAPI';
import UseCaseInputValidation from './Hooks/UseCaseInputValidation';
import UseCaseLiveFilter from './Hooks/UseCaseLiveFilter';

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

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

     <Carousel images={images} />
     <UseCaseUseEffect/>
     
     <UseCaseInputValidation/>
     <UseCaseLiveFilter/>
     
    </div>
  ); 
}

export default App;
