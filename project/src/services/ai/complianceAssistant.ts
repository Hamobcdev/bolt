import { HF_CONFIG } from './config';
import { OpenAIApi } from 'openai';
import { OPENAI_CONFIG } from './config';

const openai = new OpenAIApi(OPENAI_CONFIG);

export async function analyzeComplianceRisk(userData: any) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{
        role: "system",
        content: "You are a compliance risk analysis expert."
      }, {
        role: "user",
        content: `Analyze compliance risk for user: ${JSON.stringify(userData)}`
      }],
      temperature: 0.3,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error analyzing compliance risk:', error);
    throw error;
  }
}