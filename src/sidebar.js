import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Sidebar extends React.Component{
	constructor(props){
		super(props);
		this.state ={loading:false, data: [], error:null}
	}
componentDidMount(){
	this.setState({loading:true})
	axios.get('https://api.github.com/gists')
	.then(res => {
		this.setState({data:res.data, loading: false})
	})
	.catch(err => {
		this.setState({loading: false, error:err})
	})

	
}

render(){
	const gists = this.state.data.map((items,i)=>{
	return(
		<div className="list" key={'items_'+i}><Link to={'/d/'+items.id}>{items.description || 'No Description'}</Link></div>
		)
});
	console.log(this.state.data);
	return(<div className="sidebar">
		<h1>Gists</h1>
	{gists}
		</div>)
}
}
export default Sidebar;