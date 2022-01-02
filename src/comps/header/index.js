import react from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'






class Side_Header_Nav extends react.Component{
	constructor(props){
			super(props)
			this.state={}
	}


	render(){
	return (


			<div id="nav-container">
			<div className="bg"></div>
			<div className="burger_button" tabIndex="0">
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			</div>
			<div id="inner-main-content-container" className='inner-main-content-container' tabIndex="0" style={{WebkitTextFillColor:this.props.darkmode_txt,color:this.props.darkmode_txt,background:this.props.darkmode_comp2}}>
			<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/services">Services</NavLink></li>
			<li><NavLink to="/blog">Blog</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
			<li className="header_nav_social"><a href="#0">Twitter</a><a href="#0">LinkedIn</a></li>
			</ul>
			</div>

			</div>


		)
	}
}


const mapStateToProps = state =>{
	return {
		...state
	}
}

export default connect(
	mapStateToProps,{}
	)(Side_Header_Nav)