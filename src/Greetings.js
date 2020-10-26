import React from "react"
import "./style.css"

class Greetings extends React.Component{
        render(){
            const date = new Date();
            const hours = date.getHours();
            let wordDisplay;
             if(hours < 12){
                 wordDisplay = "GoodMorning";
             }else if(hours >=12 && hours<17){
                 wordDisplay = "Good Morning"
             }else{
                 wordDisplay ="Good Night";
             }
             return (<div className="display">
                        <p> {this.props.greet} !!!</p>
                        <h2>{wordDisplay} :)</h2>
                    </div>)
        }
}

export default Greetings
