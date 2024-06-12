/* eslint-disable unused-imports/no-unused-vars */
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

interface OutputFormat {
  [key: string]: string | string[] | OutputFormat;
}

export async function strict_output(
  system_prompt: string,
  user_prompt: string | string[],
  output_format: OutputFormat
): Promise<
  {
    question: string;
    answer: string;
  }[]
> {
  return [];
}
