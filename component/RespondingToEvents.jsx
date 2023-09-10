export default function Events() {
  function handleClick() {
    alert("You clicked me");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert("you clicked me 2")}>Click me 2</button>
    </div>
  );
}
