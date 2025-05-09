import clientPromise from './helpers/mongo';
import QuestionService from '../model/questionService';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('MCQ_App');
      const service = new QuestionService(db);
      const questions = await service.getAllQuestions();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: 'Server error.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
