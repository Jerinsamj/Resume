'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate project descriptions for a portfolio.
 *
 * The flow takes project names as input and returns AI-generated descriptions for each project.
 * @fileExport generatePortfolioDescriptions - The function to call to run the flow.
 * @fileExport GeneratePortfolioDescriptionsInput - The input type for the generatePortfolioDescriptions function.
 * @fileExport GeneratePortfolioDescriptionsOutput - The output type for the generatePortfolioDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioDescriptionsInputSchema = z.object({
  projectNames: z
    .array(z.string())
    .describe('An array of project names for which to generate descriptions.'),
});
export type GeneratePortfolioDescriptionsInput = z.infer<
  typeof GeneratePortfolioDescriptionsInputSchema
>;

const GeneratePortfolioDescriptionsOutputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('An array of AI-generated project descriptions.'),
});
export type GeneratePortfolioDescriptionsOutput = z.infer<
  typeof GeneratePortfolioDescriptionsOutputSchema
>;

export async function generatePortfolioDescriptions(
  input: GeneratePortfolioDescriptionsInput
): Promise<GeneratePortfolioDescriptionsOutput> {
  return generatePortfolioDescriptionsFlow(input);
}

const generateDescriptionsPrompt = ai.definePrompt({
  name: 'generateDescriptionsPrompt',
  input: {schema: GeneratePortfolioDescriptionsInputSchema},
  output: {schema: GeneratePortfolioDescriptionsOutputSchema},
  prompt: `You are a creative content writer specializing in creating engaging project descriptions for portfolios. Generate a short, exciting, and informative description for each of the following project names:

  {{#each projectNames}}
  - {{this}}
  {{/each}}

  Return the descriptions in an array.
  `,
});

const generatePortfolioDescriptionsFlow = ai.defineFlow(
  {
    name: 'generatePortfolioDescriptionsFlow',
    inputSchema: GeneratePortfolioDescriptionsInputSchema,
    outputSchema: GeneratePortfolioDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await generateDescriptionsPrompt(input);
    return output!;
  }
);
