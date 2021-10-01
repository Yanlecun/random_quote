
import React, { Component } from 'react';
import BtnIcon from "./Buttons/BtnIcon.js"
import BtnNew from "./Buttons/BtnNew.js"
import jQuery from 'jquery'
const $ = (window.$=window.jQuery=jQuery);
const COLOR = [
    "#e1d5c4",
    "#5fc1a0",
    "#3D2B1F",
    "#a52a2a",
    "#5f9ea0",
    "#ff7f50",
    "#e9967a",
    "#483d8b",
    "#90ee90",
    "#9370db",
    "#c9b4b1",
    "#dda0dd",
    "#663399"
    ]
let json = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

class Button extends Component {
    constructor(props){
        super(props)
        this.state= {
            quote: ''
        }
        this.btnHandler = this.btnHandler.bind(this)
    }
    btnHandler() {
        this.props.request(json); 
        //this.props.colorHandler();
    }
    render() {
        return (
            <div className="btnBox">
                <BtnIcon quote={this.props.quote}/>
                <BtnNew btnHandler={this.btnHandler}/>
            </div>
        )
    }
}
Button.defaultProps = {quote: 'CamperBot'};

export default Button