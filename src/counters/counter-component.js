import React from 'react';
import './component.css'

class CounterComponent extends React.Component{

	constructor(){
		super();
		this.state = {
			totalweight: 0,
			totalvalue: null
		};

		this.handleChange = this.handleChange.bind(this);
	}

	calculateQuantity(){
		let rawValue = this.state.totalweight / this.props.weight;
		return Math.round(rawValue);
	}

	calculateValue(){
		return this.calculateQuantity() * this.props.value;
	}


	handleChange(event){
		this.setState({totalweight: event.target.value});
		this.setState({totalvalue: this.calculateValue()});
	}	

	render(){
		return(
			<div id="component">
			<div id="weightInput">
					Weight of {this.props.denom}s	: <input type="number" value={this.state.totalweight} onChange={this.handleChange}></input>
			</div>
			<div id ="valueOutput">
				{this.calculateQuantity()} coins.
			</div>
			<div id="valueOfCoins">
				£{this.state.totalvalue}
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
/show values to 2dp (see react-number-format ?)
*/