/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Quote extends Component {
  render() {
      return (
          <div className="container">
            <div className="quoteBox">
              <FontAwesomeIcon icon={faQuoteLeft} className="icon rndColor" color="red" size="4x" />
              <span className="quote rndColor writing">{this.props.quote}</span>
            </div>
            <div className="author writing">{this.props.author}</div>
          </div>
      )
  }
}




export default Quote