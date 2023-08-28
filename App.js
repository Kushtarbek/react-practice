function ListItem(props){
  return <li>{props.animal}</li>
}

function List(props){
  return (
    <ul>
      {props.animalsList.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
        
        //return animal.startsWith("L")&& <li key={animal}>{animal}</li>;

      })}
    </ul>
  )
}




const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
function App() {
  return (
    <div>
      <h1>Animals: </h1>
     <List animalsList={animals} />
    </div>
  );
}

export default App;
