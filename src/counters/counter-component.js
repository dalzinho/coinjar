import React from 'react';

class CounterComponent extends React.Component{

	constructor(){
		super();
		this.state = {value: null};
		this.state = {output: null};
	}

	calculateValue(){
		return this.state.value / this.props.weight;
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}

	render(){
		return(
			<div id="component">
			<div id="labelName">
			
			</div>
			<div id="weightInput">
					Weight of {this.props.denom}s	: <input type="number" value={this.state.value} onChange={this.handleChange}></input>
			</div>
			<div id ="valueOutput">
				{this.state.output}
			</div>
			</div> //component div end
			);
	}
}

export default CounterComponent;

//todo take away increment buttons from input field