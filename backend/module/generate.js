// import {ChatGoogleGenerativeAI} from '@langchain/google-genai'
// import {  
//     ChatPromptTemplate, SystemMessagePromptTemplate,
//      HumanMessagePromptTemplate }
//  from '@langchain/core/prompts';
// import dotenv from 'dotenv';
// dotenv.config();

// const API_KEY = process.env.API_KEY;

// export   const askAi = async (Props) => {
    
//   console.log(recipient, purpose, keyPoints) ; 
//     console.log("inside ask ai function ")
//   const chat = new ChatGoogleGenerativeAI({
//     apiKey: API_KEY,
//   });

//   const systemPrompt = SystemMessagePromptTemplate.fromTemplate(
//     `You are a specialist in writing emails based on the purpose given to you. The email should include the recipient's name and the key points provided by the user.`
//   );

//   const humanPrompt = HumanMessagePromptTemplate.fromTemplate(
//     // `Compose an email to {recipient} with the purpose "{purpose}" and include these key points: {keyPoints}.`
// "{recipient} {purpose} {keyPoints}"  
// );

//   const chatPrompt = ChatPromptTemplate.fromMessages([systemPrompt, humanPrompt]);

//   const formattedMessage = await humanPrompt.formatMessages({
//     recipient : Props.recipient,
//      purpose : Props.purpose,
//     keyPoints : Props.keyPoints,
//   });
//   const response = await chatPrompt.invoke(chatPrompt) ; 
//   return response ; 
// };
 

 

import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from '@langchain/core/prompts';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

export const askAi = async (Props) => {
  
  
  const { recipient, purpose, keyPoints } = Props;  

  const chat = new ChatGoogleGenerativeAI({
    apiKey: API_KEY,
  });

  const systemPrompt = SystemMessagePromptTemplate.fromTemplate(
    `You are a professional email writer with expertise in crafting clear, concise, and polite emails. Your task is to write an email based on the purpose provided to you, ensuring it includes the recipient's name and the key points given by the user. The email should be appropriately formatted, respectful, and tailored to the context of the purpose. Make sure the tone is suitable for the given purpose, whether it is formal, casual, or somewhere in between. Your email should be coherent, easy to understand, and focus on delivering the key message effectively.`
  );
  

  const humanPrompt = HumanMessagePromptTemplate.fromTemplate(
    "{recipient} {purpose} {keyPoints}"
  );

  const chatPrompt = ChatPromptTemplate.fromMessages([systemPrompt, humanPrompt]);
 
  const formattedMessage = await chatPrompt.formatMessages({
    recipient: recipient,
    purpose: purpose,
    keyPoints: keyPoints,
  });
  
  const response = await chat.invoke(formattedMessage);
  return response.content;
};
