import React from 'react';
import CounterComponent from './counter-component';

class CounterContainer extends React.Component{

	constructor(){
		super();
	}

	render(){
		return(
			<div>
			<CounterComponent denom="£1" weight="8.75"/>
			<CounterComponent denom="50p" />
			</div>
			)
	}
}

export default CounterContainer;