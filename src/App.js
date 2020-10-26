import React from "react"
import Greeting from "./Greetings"
import "./style.css"

/*Class-based Components*/

class App extends React.Component{
    render(){
        return(<div>
            <Greeting greet="Welcome"/>
            </div>)
    }
}
export default App