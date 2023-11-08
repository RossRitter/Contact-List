// import { useState } from 'react'
// import ContactList from './assets/ContactList'
import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";





export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}


// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)
//   // const [contacts, setContacts] 

//   return (
//     <>
//       <ContactList />
//     </>
//   )
// }

// export default App
