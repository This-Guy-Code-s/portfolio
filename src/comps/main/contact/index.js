import react from 'react'
import {connect} from 'react-redux'
import '../../../css/contact.css'



class Contact extends react.Component{
	constructor(props){
		super(props)
		this.state={}
	}

	render(){
		return (



<section id="contact">
  
  <h1 className="section-header">Contact</h1>
  <small>This contact form will send your message to my phone,email,TV screen,and admin PC</small>
  
  <div className="contact-wrapper">
  
    
    <form id="contact-form" className="form-horizontal" >
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  required/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  required/>
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">DC - MD - VA</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(202) 858-7794</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">CodingViewDMV@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul className="social-media-list">
          <li><a href="/#" target="_blank" className="contact-icon">
            <i className="fab fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="/#" target="_blank" className="contact-icon">
            <i className="fab fa-linkedin" aria-hidden="true"></i></a>
          </li>
          <li><a href="/#" target="_blank" className="contact-icon">
            <i className="fab fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="/#" target="_blank" className="contact-icon">
            <i className="fab fa-facebook" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/>

        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>  
  
  

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
  )
(Contact)