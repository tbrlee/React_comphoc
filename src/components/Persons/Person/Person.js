import React, { Component } from 'react';

import Auxillary from '../../../hoc/Auxillary';
/*import classes from './Person.css'; */

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
	render() {
		console.log('[Person] rendering...');
		return (
			<Auxillary>
				{/*<div className={classes.Person}> */}
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</Auxillary>
		);
	}
}

export default Person;
