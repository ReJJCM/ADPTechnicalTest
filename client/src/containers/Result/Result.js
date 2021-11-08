import React, { Component, Fragment } from 'react'

class Result extends Component {

    render() {

        let component = <Fragment>
            <h2>You scored</h2>
            <h2>{this.props.score} / 10</h2>
            <div>{this.props.correctQuestions.map(question => <li> + {question}</li>)}</div>
            <div>{this.props.wrongQuestions.map(question => <li> - {question}</li>)}</div>
            <p
                onClick={() => this.props.click('start')}>PLAY AGAIN?</p>
        </Fragment>

        return (
            <Fragment>
                <div className="container">
                    <div className="header result">
                        {component}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Result