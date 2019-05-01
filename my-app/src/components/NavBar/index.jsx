import React, { Component } from 'react'

class NavBar
    extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark">
                < a className="navbar-brand" href="/" >
                    React Card Game
              </a >

                <div className="float-right mr-5 text-white">
                    Score:
                    <span className="mx-2">0</span>
                    &nbsp;||&nbsp;
                    High Score:
                  <span className="mx-2">0</span>
                </div>
            </nav >
        );
    }
}

export default NavBar
    ;