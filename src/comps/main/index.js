import react from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './home/'

import Services from './services/'
import Pitch from './services/Pitch'

import About from './about/'

import Contact from './contact/'



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
			<Route exact path='/services' element={[<Services key={0}/>,<Pitch key={1}/>]}/>
			<Route exact path='/about' element={<About/>}/>
			<Route exact path='/contact' element={<Contact/>}/>
				

			</Routes>


			</main>


			)
	}
}





export default Main