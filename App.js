
// function ListItem(props){
//   return <li>{props.animal}</li>
// }

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
import getImageUrl from "./utils";
import { people } from "./data";
import {PackingList} from "./component/Item"





function App() {


function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.filter((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

  return (
    <div>
     <List />
     <PackingList />
    </div>
  );
}

export default App;
