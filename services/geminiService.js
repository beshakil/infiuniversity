import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are the "Infiuniversity AI Academic Advisor". 
Your tone is professional, welcoming, and knowledgeable.
Infiuniversity is a world-class prestigious institution known for innovation, global diversity, and top-tier research.
Provide information about:
1. Courses (CS, Medicine, Business, Arts).
2. Campus life (clubs, athletics, dorms).
3. Admission process (applications open in Fall, competitive, requires GPA/SAT).
4. History (Founded in 1920, motto: "Semper Ultra" - Always Beyond).

Keep responses concise but helpful. Always encourage students to visit the campus or apply.
`;

export const askAcademicAdvisor = async (userPrompt) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to my database. Please reach out to our admissions office at admissions@infiuniversity.com!";
  }
};
