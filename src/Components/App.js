import React from 'react';
import './App.css';
import Card from './Card';
import contacts from '../contacts';

function App() {
  console.log(contacts);

  return (
    <div>
        
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img= {contacts[0].imgURL}
        tel= {contacts[0].phone}
        email={contacts[0].email}
      />
    </div>

    <div>
      
      <Card
        name={contacts[1].name}
        img= {contacts[1].imgURL}
        tel= {contacts[1].phone}
        email={contacts[1].email}
      />
    </div>

    <div>
      
      <Card
        name={contacts[2].name}
        img= {contacts[2].imgURL}
        tel= {contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
    
    </div>
    
  );
  

    
    
  

}

export default App;
