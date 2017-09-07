import React from 'react';
import './component.css'

class CounterComponent extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			totalWeight: "",
		};

		this.handleChange = this.handleChange.bind(this);
	}

	calculateQuantity(){
		let quantity = Math.round(this.state.totalWeight / this.props.weight)
		return quantity;
	}

	calculateValue(){
		return (this.calculateQuantity() * this.props.value).toFixed(3);
	}


	componentDidUpdate(){
		console.log(this.state.totalWeight);
	}

	handleChange(event){
		this.setState({totalWeight: event.target.value});
	}	

	render(){
		return(
			<div id="component">
			<div id="weightInput">
					Weight of {this.props.denom}s	: <input type="number" value={this.state.totalWeight} onChange={this.handleChange}></input>
			</div>
			<div id ="valueOutput">
				{this.calculateQuantity()} coins.
			</div>
			<div id="valueOfCoins">
				£{Math.round(this.calculateValue())}
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