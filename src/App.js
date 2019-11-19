import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state = {
    persons : [
      {name : 'Max', age: 28},
      {name : 'Steven', age:22},
      {name : 'James', age: 32}

    ],
    showPersons : false

  }



  nameChangedHandler = (event) =>{
    this.setState({
      persons : [
        {name : 'Max', age: 28},
        {name : event.target.value, age:22},
        {name : 'James', age: 39}
  
      ]
    })
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    const style = {
      backgroundColor:'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person =>{
            return <Person 
              name={person.name}
              age = {person.age}/>
          })}
        </div>
      );
    }

  return (
    <div className="App">
      <h1>Hi, I'm a react app</h1>
      <p>This is really working</p>
      <button 
        style = {style}
        onClick = {this.togglePersonHandler}>Switch Name</button>
        {persons}
    </div>
  );
  //return React.createElement('div', {className:'App'},React.createElement('h1',null,  'Hi, I\'m a react app!!!'))
}
}

export default App;
