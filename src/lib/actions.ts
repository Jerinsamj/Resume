"use server";

import { generatePortfolioDescriptions } from '@/ai/flows/generate-portfolio-descriptions';

export async function getProjectDescriptions(projectNames: string[]) {
    try {
        const result = await generatePortfolioDescriptions({ projectNames });
        if (result && result.projectDescriptions) {
            return result.projectDescriptions;
        }
        throw new Error("Invalid response from AI service");
    } catch (error) {
        console.error("Error generating project descriptions:", error);
        // Return placeholder descriptions on error
        return projectNames.map(name => `This is a description for the '${name}' project. It showcases key features and the technologies used to build a robust and scalable solution.`);
    }
}
