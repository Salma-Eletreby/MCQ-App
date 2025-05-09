import clientPromise from './helpers/mongo';
import QuestionService from '../model/questionService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { questionId, userAnswer } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db('MCQ_App');
      const service = new QuestionService(db);
      const result = await service.checkAnswer(questionId, userAnswer);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
