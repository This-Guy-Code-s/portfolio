import react from 'react'
import {connect} from 'react-redux'
import '../../../css/about.css'



class About extends react.Component{
	constructor(props){
		super(props)
		this.state={}
	}



	render(){
		return (


<div className="container about-container">

<hr className="sep-x"/>

<div style={{WebkitTextFillColor:this.props.darkmode_txt}}>
    <h2 className='about-titles'>Services</h2>
    <article>
    You are in the right place if you need a developer to fix your current website,
     build a new one for you, and or manage it for you as well.
    Contact me to set up a meeting for a free quote and lets get started.
    </article>
</div>


<hr className="sep-x sep-xx"/>

<div style={{WebkitTextFillColor:this.props.darkmode_txt}}>
    <h2 className='about-titles'>Blog</h2>
    <article>
    Head over to the blog page to see the latest post on any videos, articles, or projects I will post.
     Watch videos from here or from its sourced location. 
    </article>
</div>


<hr className="sep-x"/>


<div style={{WebkitTextFillColor:this.props.darkmode_txt}}>
    <h2 className='about-titles'>Accounts</h2>
    <article>
    Making an account is mainly for my clients, to stay up to date with me, my schedule, and there application
     updates if they have any pending. they're apart of a credit system that allows them to earn and manage credits
     they can use as money to pay for updates to there application. Other than that a regular viewer may still create an account for any reason they see fits.  
    </article>
</div>

<hr className="sep-x sep-xx"/>

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

    )(About)