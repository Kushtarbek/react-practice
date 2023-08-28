function List(props){
  // if(!props.animals) {
  //   return <div>Loading...</div>
  // }

  // if(props.animals.length === 0){
  //   return <div>There are no animals in the list!</div>
  // }

  // return (
  //   <ul>
  //     {props.animals.map((animal) => {
  //       return <li key={animal}>{animal}</li>
  //     })}
  //   </ul>
  // )

return (
  //conditional rendering examples
  <>
    {!props.animals ? (<div>Loading...</div>) : props.animals.length > 0 ? (
      <ul>
        {props.animals.map((animal) => {
          return <li key={animal}>{animal}</li>
        })}
      </ul>
    ) : (
      <div>There are no animals on the list!</div>
    )}
  </>
  );
}

//or

function Lists(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}> {animal}</li>
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
    </>
  )
}

// function List(props){
//   return (
//     <ul>
//       {props.animalsList.map((animal) => {
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;

//         //return animal.startsWith("L")&& <li key={animal}>{animal}</li>;
//       })}
//     </ul>
//   )
// }




function App() {
  const animals = ["cow", "dog", "goat"];
  return (
    <div>
      <h1>Animals: </h1>
     <List animals={animals} />
     <Lists animals={animals} />


    </div>
  );
}

export default App;
