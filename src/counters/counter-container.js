import React from 'react';
import CounterComponent from './counter-component';

class CounterContainer extends React.Component{

	constructor(){
		super();
		this.state = {
			coinSum: 0
		};
	}

	componentDidUpdate(){
		this.setState({coinSum: this.state.coinSum + 1});
	}

	render(){
		return(
			<div>
			<div>
			<CounterComponent denom="£2" value="2" weight="12" />
			<CounterComponent denom="old £1" value="1" weight="9.5"/>
			<CounterComponent denom="new £1" value="1" weight="8.75"/>
			<CounterComponent denom="50p" value="0.5" weight="8" />
			<CounterComponent denom="20p" value="0.2" weight="5"/>
			<CounterComponent denom="10p" value="0.1" weight="6.5"/>
			<CounterComponent denom="5p" value="0.05" weight="3.25"/>
			<CounterComponent denom="2p" value="0.02" weight="7.12"/>
			<CounterComponent denom="1p" value="0.01" weight="3.56"/>
			</div>
			<div>
				{this.state.coinSum}
			</div>
			</div>
		)
	}
}

export default CounterContainer;