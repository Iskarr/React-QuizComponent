import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrect_answer: false };
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrect_answer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrect_answer: true });
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_options, index) => {
                return (
                  <QuizQuestionButton
                    key={index}
                    button_text={answer_options}
                    clickHandler={this.handleClick.bind(this)}
                  />
                );
              }
            )}
          </ul>
        </section>
        {this.state.incorrect_answer ? (
          <p className="error">Sorry, That isn't right.</p>
        ) : null}
      </main>
    );
  }
}

export default QuizQuestion;
