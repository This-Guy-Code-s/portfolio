import react from 'react'
import {connect} from 'react-redux'
import '../../../css/service.css'



class Pitch extends react.Component{
	constructor(props){
		super(props)
		this.state={
            pitch_cardz:[
                    {
                        img:"https://i.imgur.com/S7FJza5.png",
                        title:"Quotes are Free",
                        paragraph:"We will spend as much time going over all the help you'll need, no matter how long it takes. This will be the other side of your business you will need full power over."

                    },{
                        img:"https://i.imgur.com/xUWJuHB.png",
                        title:"I'm Unbiased",
                        paragraph:"Your vision is your vision. I will never lead you to make the wrong decision or to agree to something we both know you dont want. Your idea, company, and app."

                    },{
                        img:"https://i.imgur.com/rG3CGn3.png",
                        title:"I'll Guide you",
                        paragraph:"I will walk you through all the steps I need to take to create it, explain all the obsticles and responsibilities one needs to know to manage it to asure your web apps safety & security."

                    }

            ]
        }
	}



	render(){
		return (

<div className='container-fluid mx-auto mt-5 mb-5 col-12' style={{"textAlign": "center"}}>
    <div className="hd" style={{WebkitTextFillColor:this.props.darkmode_txt,color:this.props.darkmode_txt}}>Whats There To Lose? Nothing</div>
    <p><small className="text-muted" style={{WebkitTextFillColor:this.props.darkmode_txt,color:this.props.darkmode_txt}}>You just schedule a way to recieve your quote and at that time you get more than enough time to explain and go over your vision.</small></p>
    <div className="pitch-card-containers">
       
        {
            this.state.pitch_cardz.map((card,i)=>{
              return (

                    <div key={i} className="card pitch-card " style={{background:this.props.darkmode_comp1,WebkitTextFillColor:this.props.darkmode_txt}}>
                        <div className="card-content pitch-card-content">
                            <div className="card-body pitch-card-body"> <img className="img" alt="thisguycodez.com" src={card.img} />
                                <div className="card-title pitch-card-title"> {card.title} </div>
                                    <div className="card-subtitle pitch-card-subtitle">
                                        <p> <small className="text-muted"> {card.paragraph} </small> </p>
                                    </div>
                            </div>
                        </div>
                    </div>



                    )
            })
        }

        

    </div>
    <div className="ft pitch-ft" >
       {/* <p className="chk"><small className="text-muted" style={{WebkitTextFillColor:this.props.darkmode_txt,color:this.props.darkmode_txt}}>Still not sure?</small></p>
        <div className="btn" style={{background:this.props.darkmode_comp1,WebkitTextFillColor:this.props.darkmode_txt}}>Read All Testimonials</div>
  */}  </div>
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

    )(Pitch)