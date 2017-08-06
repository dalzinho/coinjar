import React from 'react';
import './component.css'

class CounterComponent extends React.Component{

	constructor(){
		super();
		this.state = {
			weight: 0,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	calculateQuantity(){
		let rawValue = this.state.weight / this.props.weight;
		return Math.round(rawValue);
	}

	calculateValue(){
		return this.calculateQuantity() * this.props.value;
	}


	handleChange(event){
		this.setState({weight: event.target.value});
	}

	render(){
		return(
			<div id="component">
			<div id="weightInput">
					Weight of {this.props.denom}s	: <input type="number" value={this.state.weight} onChange={this.handleChange}></input>
			</div>
			<div id ="valueOutput">
				{this.calculateQuantity()} coins.
			</div>
			<div id="valueOfCoins">
				£{this.calculateValue()}
			</div>
			</div> //component div end
			);
	}
}

export default CounterComponent;

/*
/todo
/ take away increment buttons from input field
/line things up nicely
/insert a totaliser
/show values to 2dp
*/