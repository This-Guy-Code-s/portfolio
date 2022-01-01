// import axios from 'axios'

export const DARKMODE = 'DARKMODE'

// server's api link
// const api = 'http://127.0.0.1:5000'





// darkmode
export const toggle_darkmode = () => dispatch =>{
	// does a saved darkmode exist???(as "x")
	const x = window.sessionStorage.getItem('darkmode')

	if(Number(x)){
		window.sessionStorage.setItem('darkmode',0)
		return dispatch({type:DARKMODE,payload:0})
	}else{
		window.sessionStorage.setItem('darkmode',1)
		return dispatch({type:DARKMODE,payload:1})
	}
	
}




