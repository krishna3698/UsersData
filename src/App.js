import React from 'react'
import User from './component/User';

import './App.css';

class App extends React.Component {
  state={
    page:0,
    data:[],
    loading:false
  }

  nextHandler = ()=>{
    let count=this.state.page+1
    this.setState((prevState)=>{
      return{
        page:prevState.page+1
      }
    })    
    fetch(`https://reqres.in/api/users?page=${count}`).then((response)=>response.json()).then(data=>this.setState({data:data.data}))
  
  }

  prevHandler =()=>{    
    let count=this.state.page-1
    this.setState((prevState)=>{
      return{
        page:prevState.page-1
      }
    })    
    fetch(`https://reqres.in/api/users?page=${count}`).then((response)=>response.json()).then(data=>this.setState({data:data.data}))
  }

  componentDidMount(){
    this.setState({
      loading:true
    })
    fetch(`https://reqres.in/api/users?page=${this.state.page}`).then((response=>response.json())).then(data=>this.setState({data:data.data}))
  }

  render(){ 
    const users=this.state.data.map((data)=>{
      return(
        <>
      <User fname={data.first_name} lname={data.last_name} email={data.email} avatar={data.avatar} />
      <hr />
      </>)
    }) 
    return (
      <div className="App">
        {this.state.data.length>0?users:<div className="oops"><h3>OOPS!! No Data is Available</h3></div>}
        {this.state.page}
        {this.state.page>0 ?<button className='navBtn' onClick={this.prevHandler}>{"<<"}</button> : null}
        <button className='navBtn' onClick={this.nextHandler}>{">>"}</button>
      </div>
    );
  }
}

export default App;
