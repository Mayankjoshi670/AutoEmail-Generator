import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from '@langchain/core/prompts';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

export const askAi = async (Props) => {
  const { recipientName, email, purpose, keyPoints } = Props;

  const chat = new ChatGoogleGenerativeAI({
    apiKey: API_KEY,
  });

  const systemPrompt = SystemMessagePromptTemplate.fromTemplate(
    `You are a professional email writer with expertise in crafting clear, concise, and polite emails. Your task is to write an email based on the purpose provided to you, ensuring it includes the recipient's name and the key points given by the user. The email should be formatted properly, respectful, and tailored to the given purpose. Ensure the tone matches the context of the purpose, whether formal, casual, or otherwise.`
  );

  const humanPrompt = HumanMessagePromptTemplate.fromTemplate(
    `Dear {recipientName},\n\nI hope this email finds you well. My name is {email}, and I am reaching out regarding the following purpose: {purpose}. Here are the key points to consider:\n\n{keyPoints}\n\nPlease let me know your availability or if you have any questions.\n\nBest regards,\n{email}`
  );

  const chatPrompt = ChatPromptTemplate.fromMessages([systemPrompt, humanPrompt]);

  const formattedMessage = await chatPrompt.formatMessages({
    recipientName,
    email,
    purpose,
    keyPoints,
  });

  const response = await chat.invoke(formattedMessage);
  return response.content;
};
