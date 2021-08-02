import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
//import data from 

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [friendsName, setFriendsName] = useState([]);
  const fetchfriends = useEffect(() => {
      axios.get('https://swapi.dev/api/people').then(function(data) {
      setFriendsName(data.data)

      })}, [])
      
  
 
 //console.log(friendsName.name);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
   let names = ['e', 'r']

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character friends={friendsName} 
      key={friendsName.name}
      />

    </div>
  );
}

export default App;
