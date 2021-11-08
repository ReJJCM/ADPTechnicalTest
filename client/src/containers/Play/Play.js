import React, { Component, Fragment } from 'react'
import Check from '../../components/Check/Check'

class Play extends Component {

    constructor() {
        super();
        this.state = {
            qNumber: 1,
            score: 0,
            questions: {},
            answerComponent: '',
            answer: '',
            wrongQuestions: [],
            correctQuestions: []
        }
    }

    componentDidMount() {
        this.setState({
            questions: this.props.questions
        })
    }

    checkAns(a) {
        const answer = this.state.questions[this.state.qNumber - 1].correct_answer
        if (a === answer) {
            this.state.correctQuestions.push(this.state.questions[this.state.qNumber - 1].question)
            this.setState({
                answer: answer,
                answerComponent: 'correct',
                score: this.state.score + 1,
            })
        }
        if (a !== answer) {
            this.state.wrongQuestions.push(this.state.questions[this.state.qNumber - 1].question)
            this.setState({
                answer: answer,
                answerComponent: 'wrong',
            })
        }
    }

    continue() {
        if (this.state.qNumber === 10) {
            this.props.finished('end', this.state.score, this.state.correctQuestions, this.state.wrongQuestions)
        } else {
            this.setState({
                answer: '',
                answerComponent: '',
                qNumber: this.state.qNumber + 1
            })
        }
    }

    render() {
        let qText;
        let category;
        if (this.state.questions.length > 0) {
            qText = this.state.questions[this.state.qNumber - 1].question
            category = this.state.questions[this.state.qNumber - 1].category
        }

        let questions = <Fragment>
            <div className="contents-question">
                <p className='question'>{qText}</p>
            </div>
            <Check
                outOfTime={this.state.time}
                answerComponent={this.state.answerComponent}
                continue={() => this.continue()}
                checkAns={(a) => this.checkAns(a)}
                answer={this.state.answer} />
            <div>
                <h3>{this.state.qNumber} of 10</h3>
            </div>
        </Fragment>

        return (
            <Fragment>
                <div className="container">
                    <div className="header">
                        <h1>{category}</h1>
                    </div>
                    {questions}
                </div>
            </Fragment>
        )
    }
}

export default Play