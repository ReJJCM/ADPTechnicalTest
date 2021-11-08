import React, { Component, Fragment } from 'react'

class Game extends Component {

    click() {
        this.props.click('play')
    }

    render() {
        return (
            <Fragment>
                <div className="container-homepage">
                    <div className="header">
                        <h1>Welcome to the Trivia Challange!</h1>
                    </div>
                    <div className='homepage homepage-text'>
                        <span>You will be presented with 10 True or False questions.</span>
                    </div>
                    <div className='homepage homepage-text'>
                        <span> Can you score 100%? </span>
                    </div>
                    <button
                            type="button"
                            className="start-button"
                            onClick={() => this.click()}>Begin
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default Game