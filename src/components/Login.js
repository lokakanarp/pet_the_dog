import React, { Component } from 'react';

class Login extends Component {
	state = {
		dogName: '',
		dogAge: '',
		message: '',
		}

	handleDogName = (event) => {
		this.setState({ dogName: event.target.value });
	}
	
	handleDogAge = (event) => {
		this.setState({ dogAge: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if(this.state.dogName.length > 0 && this.state.dogAge.length > 0){
	  		this.props.handleLogin(this.state.dogName, this.state.dogAge);
		} else {
	  		this.setState({ message: "Please enter the dog's name and age." });
		}
	}

	render() {

	return (
		<form className="form" onSubmit={this.handleSubmit}>
				<label htmlFor="dogName">Enter your dog's name:</label><br />
				<input 
					className="inputField"
					type="text"
					name="dogName"
					id="dogName"
					placeholder="For exemple: Caro."
					onChange={this.handleDogName}
					value={this.state.dogName}
				/>
				<label htmlFor="dogAge">Enter your dog's age:</label><br />
				<input 
					className="inputField"
					type="text"
					id="dogAge"
					name="dogAge"
					placeholder="For exemple: 5."
					onChange={this.handleDogAge}
					value={this.state.dogAge}
				/>
			<p> {this.state.message} </p>
			<button type="submit" className="submitButton">Submit</button>
		</form>
		);
	}
}

	

	export default Login;