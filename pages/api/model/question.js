export default class Question {
  constructor({ _id, question, choices, correctAnswer, hint, category }) {
    this._id = _id;
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
    this.hint = hint;
    this.category = category;
  }
}