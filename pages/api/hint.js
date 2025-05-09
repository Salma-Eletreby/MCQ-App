import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { question } = req.body;

  if (!question) return res.status(400).json({ error: "Question is required" });

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Provide a hint for this question: "${question}"`,
    });

    const response = result.text;

    res.status(200).json({ hint: response });
  } catch (err) {
    console.error("Error fetching hint:", err);
    res.status(500).json({ error: "Failed to get hint" });
  }
}
