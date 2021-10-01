/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let regExp = /\s/g
class BtnIcon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <a href={getRegexp(this.props.quote)} target="_blank" rel="noreferrer" className="rndColor" id="tweet-quote"><FontAwesomeIcon icon={faTwitter}  size="2x"/></a>
                <a href="https://www.tumblr.com/" target="_blank" rel="noreferrer" className="rndColor"><FontAwesomeIcon icon={faTumblr}  size="2x"/></a>
            </div>
        )
    }   
}

function getRegexp(str) {
    str = str.replace(regExp, "%20")
    str = JSON.stringify(str)
    return `https://twitter.com/intent/tweet?hashtags=quotes&text=${str}`
}

export default BtnIcon;