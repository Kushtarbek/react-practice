import { getImageUrl } from "../utils.js";

function Avatar(person, size) {
  return <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />;
}

export default function ProfilePhoto() {
  return <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />;
}
