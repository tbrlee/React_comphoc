import React, { Component } from 'react';

import Auxillary from '../../../hoc/Auxillary';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

/*const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};*/

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		//this.inputElement.focus();
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	render() {
		console.log('[Person] rendering...');
		return (
			<Auxillary>
				{this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}

				{/*isAuthor is replaced with data from context */}
				{/*{this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>} */}
				{/*<div className={classes.Person}> */}
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					/*ref={(inputEl) => {
						this.inputElement = inputEl;
					}}*/
					ref={this.inputElementRef}
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Auxillary>
		);
	}
}

export default withClass(Person, classes.Person);
