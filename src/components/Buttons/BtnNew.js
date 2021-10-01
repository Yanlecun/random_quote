import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
class BtnNew extends Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        
        $(".writing").fadeOut(300, "linear", () => {
  
            this.props.btnHandler();
        });
        $(".writing").fadeIn(300, "linear");
        
    }
    render() {
        return(
            <div>
                <button className="btn btn-default rndColor rndColorBorder animated shake" onClick={this.onClickHandler}>New Quote</button>
            </div>
        )
    }   
}
 


export default BtnNew