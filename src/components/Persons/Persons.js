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
	/*static getDerivedStateFromProps(props, state) {
		console.log('[Person.js] getDerivedStateFromProps');
		return state;
	} */

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Person.js] shouldComponentUpdate');
		if (nextProps.persons !== this.props.persons) {
			return true;
		} else return false;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Person.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	/* componentWillUpdate() {
		}
	*/

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Person.js] componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('[Person.js] componentWillUnmount');
	}

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
					isAuth={this.props.isAuthenticated}
				/>
			);
		});
	}
}

export default Persons;
