import react from 'react'
import {connect} from 'react-redux'
import {Route,Routes,withHistory} from 'react-router-dom'
import Home from './home/'



class Main extends react.Component{
	constructor(props){
		super(props)
		this.state={}
	}



	render(){
		return (


			<main className="Main">
			
			<Routes>
			<Route exact path='/' element={<Home/>}/>
			</Routes>


			</main>


			)
	}
}





export default Main