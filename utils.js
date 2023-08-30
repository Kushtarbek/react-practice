  function getImageUrl1(person) {
    return "https://i.imgur.com/" + person.imageId + "s.jpg";
  }
  

  export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }