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
  output_format: OutputFormat,
  default_category = '',
  output_value_only = false,
  model = 'accounts/fireworks/models/mixtral-8x7b-instruct',
  temperature = 1,
  num_tries = 3,
  verbose = false
): Promise<
  {
    question: string;
    answer: string;
  }[]
> {
  return [];
}
