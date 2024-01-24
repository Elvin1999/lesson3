import React from "react";

// const people = [
//   "Elvin Camalzade : Software Engineer",
//   "Ali Mammadov : IT Specialist",
//   "Togrul Babayev : Designer",
//   "Aysel Mammadova : Curator",
//   "Ayshen Oruclu : Telecommunication Master",
// ];

// const listItems = people.map((p) => <li>{p}</li>);

// export default function ListItems() {
//   return <div>
//     <ul>
//         {listItems}
//     </ul>
//   </div>;
// }

// const listItems = people.map((p) => <li>{p}</li>);

// export default function ListItems() {
//   return <div>
//     <ul>
//         {listItems}
//     </ul>
//   </div>;
// }

import { people } from "../../data.js";
import { getImageUrl } from "../../Utils.js";

const persons = people.filter((p) => p.imageId >= 1);

const listItems = persons.map((person) => (
  <li id={person.id}>
    <img className="user-img" src={getImageUrl(person)}></img>
    <h3>Name : <b>{person.name}</b></h3>
    <h4>Profession : <b>{person.profession}</b></h4>
    <hr/>
  </li>
));

export default function ListItems() {
  return <div>
    <ul>
        {listItems}
    </ul>
  </div>;
}
