import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';


class App extends Component{
  state = {
    persons : [
      {id:"dnefnafd", name : 'Max', age: 28},
      {id:"asdcxxsa", name : 'Steven', age:22},
      {id:"dsdfdcea", name : 'James', age: 32}

    ],
    showPersons : false

  }



  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    //let person = this.state.persons[personIndex]; this is bad because it mutates the original state
    const person = {
      ...this.state.persons[personIndex]
    }; //copy the one wanted object
  
    person.name = event.target.value;
    const persons = [...this.state.persons]; // copy the whole persons array
    persons[personIndex]=person;
    this.setState({persons : persons});
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    const style = {
      backgroundColor:'green',
      color:'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person 
              click = {() =>this.deletePersonHandler(index)}
              name={person.name}
              age = {person.age}
              key = {person.id}
              changed ={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] ={
        backgroundColor: 'salmon',
        color: 'white'
      }
    }

    let classes = [];

    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
  return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style = {style}
          onClick = {this.togglePersonHandler}>Toggle Name</button>
          {persons}
      </div>
  );
  //return React.createElement('div', {className:'App'},React.createElement('h1',null,  'Hi, I\'m a react app!!!'))
}
}

export default App;
