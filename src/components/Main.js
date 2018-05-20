import React, { Component } from 'react';



class Main extends Component {

  render() {
    return (
     <div className="main">
		<div className="image" onClick={this.props.handleClick}>
			<img src={window.location.origin + '/img/dog1.png'} alt="dog"/>
		</div>
	 </div>
    );
  }
}

export default Main;