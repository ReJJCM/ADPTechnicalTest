import React, { Component, Fragment } from 'react'

class Result extends Component {

    render() {

        let component = <Fragment>
            <h2>You scored</h2>
            <h2>{this.props.score} / 10</h2>
            <div className="answer correct">{this.props.correctQuestions.map(question => <li className="result-answers" key={question}> + {question.replaceAll('&quot;', '"').replaceAll('&#039;','\'')}</li>)}</div>
            <div className="answer wrong">{this.props.wrongQuestions.map(question => <li className="result-answers" key={question}> - {question.replaceAll('&quot;', '"').replaceAll('&#039;','\'')}</li>)}</div>
            <p className="start-button" onClick={() => this.props.click('start')}>PLAY AGAIN?</p>
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