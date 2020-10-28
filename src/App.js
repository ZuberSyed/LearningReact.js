import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state={
                count:0
        }  
        this.start = this.start.bind(this)
       this.increment = this.increment.bind(this)
       this.decrement = this.decrement.bind(this)
    }
    start(){
        this.setState({count:0})
    }
    increment(){
        this.setState(prevState => {
           return{
            count:prevState.count +1
           } 
        })
    }
    decrement(){
        this.setState(prevState => {
            return{
                count : prevState.count-1
         }
         })
    }
    render(){
        const mainStyle ={
           maxWidth:"22%",
           margin:"0 auto"
        }
        const styles ={
           fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
           fontSize:"15px",
           border:"none",
           margin:"15px",
           padding:"5px",
           color:"#000",
           backgroundColor :"#db9"
        }
        
        return(
            <div style = {mainStyle}>
                <h1 style={{color:"blue",margin:"50px 0px 20px 120px",fontFamily:"Arial",fontSize:"42px"}}>{this.state.count}</h1>
                <button onClick={this.start} style={styles}>Set</button>
                <button onClick={this.increment} style={styles}>Increment</button>
                <button onClick={this.decrement} style={styles}>Decrement</button>
                
            </div>
        )
    }
}

export default App