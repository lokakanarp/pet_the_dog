import React, { Component } from 'react';
import Ball from './Ball'


class Sidebar extends Component {

  render() {
	  //console.log(this.props)
    return (
		
     <div className="sidebar">
			<Ball items={this.props} handleBall={this.props.handleBall}/>
			<p>food <br />
				<span className="sidebar_points">150 points.</span>
			</p>
			<p>treats <br />
				<span className="sidebar_points">500 points.</span>
			</p>
			<p>stick <br />
				<span className="sidebar_points">800 points.</span>
			</p>
			<p>bone <br />
				<span className="sidebar_points">1500 points.</span>
			</p>
		
	 </div>
    );
  }
}

export default Sidebar;