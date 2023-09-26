import { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5))
  const addRandomContact = () => {
    if (contacts.length === contactsJSON.length) {
      return;
    }
    const randomcontact = Math.floor(Math.random() * contactsJSON.length)
    const randomNumber = contactsJSON[randomcontact]


    if (!contacts.some((contact) => contact.id === randomNumber.id)) {
      setContacts([...contacts, randomNumber]);
    }


  };
  const popularityRating = () => {
    const rating = [...contacts];
    rating.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    setContacts(rating)
  }
  const sortByName = () => {
    const sortname = [...contacts];
    sortname.sort((a, b) => a.name > b.name ? 1 : -1);
    setContacts(sortname)
  }
  function delet(id) {
    let copy = [...contacts];
    copy.splice(id, 1);
    setContacts(copy)

  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <div id= "buttons">
      <button className="but1" onClick={addRandomContact}>Add random Number</button>
      <button className="but2" onClick={popularityRating}>Sort by popularity</button>
      <button className="but3" onClick={sortByName}>Sort by Name</button>
      </div>





      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return (
              <tr key={oneContact.id}>
                <td>
                  <img src={oneContact.pictureUrl}
                    style={{ height: "100px" }}
                  />

                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
                <td>{oneContact.wonOscar && "🏆"}</td>
                <td>{oneContact.wonEmmy && "⭐️"}</td>
                <td><button className="del" onClick={() => delet(oneContact.id)}>Delet</button></td>

              </tr>
            )
          })

          }

        </tbody>


      </table>
    </div>
  );
}


export default App;
