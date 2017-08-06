import React from 'react';
import './component.css'

class CounterComponent extends React.Component{

	constructor(){
		super();
		this.state = {
			value: null,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	calculateQuantity(){
		let rawValue = this.state.value / this.props.weight;
		return Math.round(rawValue);
	}

	calculateValue(){
		return this.calculateQuantity() * this.props.denom;
	}


	handleChange(event){
		this.setState({value: event.target.value});
	}

	render(){
		return(
			<div id="component">
			<div id="weightInput">
					Weight of {this.props.denom}s	: <input type="number" value={this.state.value} onChange={this.handleChange}></input>
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

//todo take away increment buttons from input field