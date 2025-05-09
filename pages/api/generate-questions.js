import { GoogleGenAI } from "@google/genai";
import clientPromise from '../helpers/mongo';
import QuestionService from '../model/questionService';

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  
  const { count, title } = await req.body;

  if (!count || !title) return res.status(400).json({ error: "Topic and How many questions are required!" });

  try { 
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate ${count} questions about ${title} in the form of an array of json objects for MongoDB that have _id, question, choices which is an array of 4 strings, correctAnswer, hint, category where category is ${title}`,
    });
    
    const cleanedText = result.text.replace(/```json|```/g, '').trim();

    let generatedQuestions;
    try {
      generatedQuestions = JSON.parse(cleanedText);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
      return res.status(500).json({ error: "Failed to parse AI-generated questions" });
    }

    const client = await clientPromise;
    const db = client.db('MCQ_App');
    const service = new QuestionService(db);

    const insertedQuestions = await service.createManyQuestions(generatedQuestions);

    return res.status(200).json({ success: true, data: insertedQuestions });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Failed to generate or insert questions" });
  }
}
