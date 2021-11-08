import React, { Component, Fragment } from 'react'
import CheckAnswers from '../../components/CheckAnswers/CheckAnswers'

class Play extends Component {

    constructor() {
        super();
        this.state = {
            questionNumber: 1,
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

    checkAnswer(a) {
        const answer = this.state.questions[this.state.questionNumber - 1].correct_answer
        if (a === answer) {
            this.state.correctQuestions.push(this.state.questions[this.state.questionNumber - 1].question)
            this.setState({
                answer: answer,
                answerComponent: 'correct',
                score: this.state.score + 1,
            })
        }
        if (a !== answer) {
            this.state.wrongQuestions.push(this.state.questions[this.state.questionNumber - 1].question)
            this.setState({
                answer: answer,
                answerComponent: 'wrong',
            })
        }
    }

    continue() {
        if (this.state.questionNumber === 10) {
            this.props.finished('end', this.state.score, this.state.correctQuestions, this.state.wrongQuestions)
        } else {
            this.setState({
                answer: '',
                answerComponent: '',
                questionNumber: this.state.questionNumber + 1
            })
        }
    }

    render() {
        let questionText;
        let category;
        if (this.state.questions.length > 0) {
            questionText = this.state.questions[this.state.questionNumber - 1].question.replaceAll('&quot;', '"').replaceAll('&#039;','\'')
            category = this.state.questions[this.state.questionNumber - 1].category
        }

        const questions = <Fragment>
            <div className="contents-question">
                <p className='question'>{questionText}</p>
            </div>
            <CheckAnswers
                answerComponent={this.state.answerComponent}
                continue={() => this.continue()}
                checkAnswer={(a) => this.checkAnswer(a)}
                answer={this.state.answer} />
            <div>
                <h3>{this.state.questionNumber} of 10</h3>
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