import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { projects } from '@/data/projects';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `You are a helpful assistant for a portfolio website. You have access to the following projects:

${JSON.stringify(projects, null, 2)}

Your role is to:
1. Help visitors understand the projects and their tech stacks
2. Provide detailed technical information for engineers and recruiters
3. Help users discover projects based on specific technologies or features
4. Be conversational and friendly while maintaining professionalism

When responding:
- For general visitors: Focus on high-level overview and key features
- For technical users: Provide detailed technical breakdowns and code architecture
- For recruiters: Emphasize business impact and technical achievements
- Always maintain context of the conversation
- If asked about technologies not in the projects, politely mention that you can only discuss the projects listed above`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        ...history.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0].message.content;

    return NextResponse.json({
      message: response,
      type: 'chat_response',
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
} 