import React, { Component } from 'react'
import Quote from "./Quote.js"
import Button from "./Button.js"
import jQuery from 'jquery'

const $ = (window.$=window.jQuery=jQuery);
// const REQUEST = 'REQUEST';
// const SETCOLOR = 'SETCOLOR'
// const defaultState = {
//     quote: '',
//     author: ''
// }
// let requestAction = {
//     type: REQUEST
// }
// let colorAction = {
//     type: SETCOLOR
// }
// function requestCreator() {
//     return requestAction
// }
// function colorCreator() {
//     return colorAction
// }
// const requestReducer = (state = defaultState, action) => {
//     switch(action.type) {
//         case REQUEST : {
//             fetch(json)
//                 .then( result => result.json() )
//                 .then( quotesData => {
//                     let rdnIdx = Math.floor(Math.random()*102);
//                     return {
//                         quote : quotesData.quotes[rdnIdx].quote,
//                         author : "- " + quotesData.quotes[rdnIdx].author
//                     }
//                 })
//         }
//         default : {
//             return state
//         }
//     }
// }
// const colorReducer = (state = '', action) => {
//     switch(action.type) {
//         case SETCOLOR : {
//             let rdnIndex = Math.floor(Math.random()*13);
//             return COLOR[rdnIndex]
//         }
//         default : {
//             return state;
//         }
//     }
// }
// const rootReducer = Redux.combineReducers({
//     request: requestReducer,
//     setcolor: colorReducer
// })
// const store = Redux.createStore(rootReducer)
// store.dispatch(requestCreator());
// store.dispatch(colorCreator());
// console.log(store.getState())
// store.subscribe( () => {
//     let rdnIndex = Math.floor(Math.random()*13);
//     $("body").css("background-color", COLOR[rdnIndex]);
//     $(".rndColor").css("color", COLOR[rdnIndex])
//     $(".rndColorBorder").css("border", `2px solid ${COLOR[rdnIndex]}`)
// })

let json = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
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

class Box extends Component{
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            author: ''
        }
        this.setColor = this.setColor.bind(this)
        this.request = this.request.bind(this)
    }
    componentDidMount() {
        fetch(json)
            .then(function(result){
                return result.json();
            })
            .then( (quotesData) => {
                let rdnIdx = Math.floor(Math.random()*102);
                this.setState({
                    quote : quotesData.quotes[rdnIdx].quote,
                    author : "- " + quotesData.quotes[rdnIdx].author
                })
            })
    }

    setColor() {
        let rdnIndex = Math.floor(Math.random()*13);
        $("body").css("background-color", COLOR[rdnIndex]);
        $(".rndColor").css("color", COLOR[rdnIndex])
        $(".rndColorBorder").css("border", `2px solid ${COLOR[rdnIndex]}`)
    }
    request(json){
        fetch(json)
        .then(function(result){
            return result.json();
        })
        .then( (quotesData) => {
            let rdnIdx = Math.floor(Math.random()*102);
            //let rdnIdxColor = Math.floor(Math.random()*13);
            this.setState({
                quote : quotesData.quotes[rdnIdx].quote,
                author : "- " + quotesData.quotes[rdnIdx].author
            })
        })
        .then( () => {
            this.setColor();
        });
    }   
    render(){
        return (
            <div className="box">
                <div>
                    <Quote quote={this.state.quote} author={this.state.author}/>
                    <Button quote={this.state.quote + this.state.author} colorHandler={this.setColor} request={this.request} />
                </div>
            </div>
        )
    }
}


function setColor() {
    let rdnIndex = Math.floor(Math.random()*13);
    
    $("body").css("background-color", COLOR[rdnIndex]);
    $("body").css("transition", "background-color 0.7s linear");
    $(".rndColor").css("color", COLOR[rdnIndex])
    $(".rndColorBorder").css("border", `2px solid ${COLOR[rdnIndex]}`)
}

$(document).ready(() => {
    setColor();
    })

export default Box;
