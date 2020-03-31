import React, { Component } from 'react';
import Person from './Person/Person';

//Concised implied "return" function
/*const persons = (props) =>
	props.persons.map((person, index) => {
		return (
			<Person
				click={() => props.clicked(index)}
				name={person.name}
				age={person.age}
				key={person.id}
				changed={(event) => props.changed(event, person.id)}
			/>
		);
	}); */

// Explicit return block in function
/*const persons = (props) => {
	console.log('[Person.js] rendering...');
	return props.persons.map((person, index) => {
		return (
			<Person
				click={() => props.clicked(index)}
				name={person.name}
				age={person.age}
				key={person.id}
				changed={(event) => props.changed(event, person.id)}
			/>
		);
	});
};*/

class Persons extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return this.props.persons.map((person, index) => {
			return (
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
