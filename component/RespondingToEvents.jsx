export default function Events() {
  function handleClick() {
    alert("You clicked me");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert("you clicked me 2")}>Click me 2</button>
      <h3>-------------------------</h3>
      <AlertButton message="Playing!">Play movie</AlertButton>
      <AlertButton message="Uploading!">Upload image</AlertButton>

      <h3>-------------------------</h3>

      <PlayButton movieName="Howl's moving castle" />
      <PlayButton></PlayButton>
      <UploadButton />
    </div>
  );
}

function AlertButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }

  return <AlertButton onClick={handlePlayClick}>PLay "{movieName}"</AlertButton>;
}

function UploadButton() {
  return <AlertButton onClick={() => alert("Uploading!")}>Upload Image</AlertButton>;
}
