import react from 'react'
import {connect} from 'react-redux'
import '../../../css/service.css'



class Services extends react.Component{
	constructor(props){
		super(props)
		this.state={
            serv_cardz:[
                {
                    fa:"fas fa-tools",
                    title:"Website Maintenance",
                    paragraph:"Is there an error on your current website? Need it fixed with no other changes being made?"

                },{
                    fa:"far fa-image",
                    title:"Basic Website",
                    paragraph:"Get a 1-3 page website built to represent you business. Users can learn about your company and contact you from your website."

                },{
                    fa:"fas fa-photo-video",
                    title:"Full Web App",
                    paragraph:"A full web application customly built to aid a large scale company and there services."

                }
            ],
        }
	}



	render(){
		return (

  <div className="container-fluid serv-container">
    <div className="d-lg-flex serv-d-lg-flex">
        <div className="d-md-flex align-items-center mb-lg-0 mb-md-5">
            

            {
                this.state.serv_cardz.map((card,i)=>{
                    return (


            <div key={i} className={`col${i+1} me-md-4 mb-md-0 mb-5`}>
                <div className="card serv-card pb-4" style={{background:this.props.darkmode_comp1,WebkitTextFillColor:this.props.darkmode_txt,color:this.props.darkmode_txt}}> <span className={`${card.fa} mt-3`}></span>
                    <p className="h4 pt-4">{card.title}</p>
                    <p className="p1 text-muted">{card.paragraph}</p> <span className="fas fa-arrow-right"></span>
                </div>
            </div>


                        )
                })
            }




        </div>
        <div className="col4">
            <div className="content serv-content">
                <p className=" h2 mb-4" style={{color:this.props.darkmode_txt}}>Web Services</p>
                <p className="text-muted mb-4" style={{color:this.props.darkmode_txt}}>Get a quote, to get a better understanding on how much my services will cost to you. Quotes can be done over the phone,email,or video chat. Schedule one now!</p>
                <p><a href="/#" className="btn btn-primary" style={{background:this.props.darkmode_comp1}}>Get a Quote</a></p>
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

    )(Services)