import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import CreatureDetails from '../Creatures/CreatureDetails';
import { Route, NavLink } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <main className="App">
        <nav>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route exact path="/" render={ Home }/>
        <Route 
          exact
          path="/puppies/" 
          render={({match}) => <Creatures {...match} name="puppies" data={puppies} />} 
        />
        <Route 
          exact
          path="/puppies/:id" 
          render={({match}) =>{
            const { id } = match.params;
            const puppyData = puppies.find(pup => pup.id === parseInt(id));
            return <CreatureDetails {...puppyData} />
          }}
        />
        <Route exact path="/sharks" render={({ match }) => <Creatures {...match} name="sharks" data={sharks} />} />
        <Route 
          exact
          path="/sharks/:id" 
          render={({match}) =>{
            const { id } = match.params;
            const sharkData = sharks.find(pup => pup.id === parseInt(id));
            return <CreatureDetails {...sharkData} />
          }}
        />

      </main>
    );
  }
}
