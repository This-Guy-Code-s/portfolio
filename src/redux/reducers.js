import {DARKMODE} from './actions.js'




// initial state storage
const initialState = {
	// intial app features
	darkmode:Number(window.sessionStorage.getItem('darkmode'))?"#01060c":"#d9e1f1",
	darkmode_txt:Number(window.sessionStorage.getItem('darkmode'))?"azure":"#000",
	darkmode_comp1:Number(window.sessionStorage.getItem('darkmode'))?"#182643":"#7d8dab",
	darkmode_comp2:Number(window.sessionStorage.getItem('darkmode'))?"#4f5a6b":"#e7e1c3",
	darkmode_bulb:Number(window.sessionStorage.getItem('darkmode'))?"gold":"azure",



	
}



// reducer
const reducer = (state=initialState,actions) =>{
	switch(actions.type){


		case DARKMODE:
			return {
				...state,
				darkmode:actions.payload?"#01060c":"#d9e1f1",
				darkmode_txt:actions.payload?"azure":"#000",
				darkmode_comp1:actions.payload?"#182643":"#7d8dab",
				darkmode_comp2:actions.payload?"#4f5a6b":"#e7e1c3",
				darkmode_bulb:actions.payload?"gold":"azure"
			}




		default:
			return state
	}
}





export default reducer