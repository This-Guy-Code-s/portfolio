import react from 'react'
import {connect} from 'react-redux'
import '../../../css/home.css'



class Home extends react.Component{
	constructor(props){
		super(props)
		this.state={}
	}



	render(){
		return (


			<div className="container home-container">
    <div className="d-lg-flex">
       
        <div className="col4">
            <div className="content">


             <span className="h-6" style={{WebkitTextFillColor:this.props.darkmode_txt,color:this.props.darkmode_txt}}>Guy M. Oriji</span>
                <p className=" h2 mb-4" style={{WebkitTextFillColor:this.props.darkmode_txt,color:this.props.darkmode_txt}}>Software Engineer</p>
                <p><a href="/#" className="btn btn-primary" style={{background:this.props.darkmode_comp1}}>Contact Now</a></p>
            </div>
        </div>
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

    )(Home)