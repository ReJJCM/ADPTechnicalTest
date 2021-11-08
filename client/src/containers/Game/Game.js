import React, { Component, Fragment } from 'react'
import Header from '../../components/Header/Header'

class Game extends Component {

    click() {
        this.props.click('play')
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Header />
                    <div className='homepage'>
                        <span>You will be presented with 10 True or False questions.</span>
                        <span> Can you score 100%? </span>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.click()}>Begin</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Game