import React, { Component } from 'react';
import Sidebar from './sidebar';
import axios from 'axios';

class App extends Component {
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
  render() {
    const gists = this.state.data.map((items,i)=>{
      if(items.id === this.props.match.params.gistId){
        return(
          <tr className="list" key={'items_list'+i}>
              <td>{items.owner.id}</td>
              <td>{items.owner.login}</td>
              <td><img src={items.owner.avatar_url} alt={items.owner.login} title={items.owner.login} /></td>
              <td>{items.description || 'No Description'}</td>
            </tr>

    )
      }
    }
    );
    return (
      <div className="App">
        <Sidebar />
        <div className="right-bar">
          <table align="center" cellPadding="0" cellSpacing="0" border="1">
          <tbody>
            <tr>
              <td>ID</td>
              <td>Login</td>
              <td>Photo</td>
              <td>Description</td>
            </tr>
        {gists}
        </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
