import react from 'react'
import {connect} from 'react-redux'







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
			<div id="inner-main-content-container" className='inner-main-content-container' tabIndex="0" style={{background:this.props.darkmode_comp2}}>
			<ul>
			<li><a href="#0">Home</a></li>
			<li><a href="#0">Services</a></li>
			<li><a href="#0">Blog</a></li>
			<li><a href="#0">About</a></li>
			<li><a href="#0">Contact</a></li>
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