import { ObjectId } from "mongodb";
import Question from "./question";

export default class QuestionService {
  constructor(db) {
    this.collection = db.collection("questions");
  }

  async getAllQuestions() {
    const data = await this.collection.find().toArray();
    return data.map((doc) => new Question(doc));
  }

  async getQuestionById(id) {
    let query;

    if (ObjectId.isValid(id)) {
      query = { _id: new ObjectId(id) };
    } else {
      query = { _id: id };
    }

    const doc = await this.collection.findOne(query);
    return doc ? new Question(doc) : null;
  }

  async createQuestion(data) {
    const result = await this.collection.insertOne(data);
    return new Question({ ...data, _id: result.insertedId });
  }

  async createManyQuestions(dataArray) {
    const result = await this.collection.insertMany(dataArray);
    return dataArray.map(
      (question, index) =>
        new Question({
          ...question,
          _id: result.insertedIds[index],
        })
    );
  }

  async updateQuestion(id, newData) {
    await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: newData });
    return this.getById(id);
  }

  async deleteQuestion(id) {
    const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
  }

  async checkAnswer(id, selectedAnswer) {
    const question = await this.getQuestionById(id);
    if (!question) return { error: "Question not found" };

    const correct = question.correctAnswer === selectedAnswer;
    return {
      correct,
      correctAnswer: question.correctAnswer,
      ...(correct ? {} : { hint: question.hint }),
    };
  }
}
