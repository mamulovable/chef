import { useQuery } from 'convex/react';
import { api } from '@convex/_generated/api';

// Hook to get template information and enhance prompts
export function useTemplateEnhancement(templateId?: string | null) {
  const template = useQuery(
    api.templates.getTemplate,
    templateId ? { templateId: templateId as any } : 'skip'
  );

  const enhancePromptWithTemplate = (prompt: string): string => {
    if (!template) return prompt;

    const templateContext = `
Template Context:
- Template: ${template.name}
- Category: ${template.category}
- Description: ${template.description}
- AI Tags: ${template.aiTags.join(', ')}
${template.metadata?.techStack ? `- Tech Stack: ${template.metadata.techStack.join(', ')}` : ''}
${template.metadata?.features ? `- Features: ${template.metadata.features.join(', ')}` : ''}

Please use this template as a starting point and build upon it according to the user's requirements.
`;

    return `${templateContext}\n\nUser Request: ${prompt}`;
  };

  return {
    template,
    enhancePromptWithTemplate,
  };
}

// Function to get relevant templates based on user prompt
export function getRelevantTemplates(prompt: string): string[] {
  const keywords = prompt.toLowerCase().split(/\s+/);
  
  // Map keywords to template categories
  const keywordToTemplate: Record<string, string[]> = {
    'landing': ['Landing Page'],
    'homepage': ['Landing Page'],
    'business': ['Landing Page'],
    'startup': ['Landing Page'],
    'marketing': ['Landing Page'],
    'sales': ['Landing Page'],
    'portfolio': ['Portfolio'],
    'personal': ['Portfolio'],
    'work': ['Portfolio'],
    'projects': ['Portfolio'],
    'skills': ['Portfolio'],
    'resume': ['Portfolio'],
    'blog': ['Blog'],
    'articles': ['Blog'],
    'content': ['Blog'],
    'writing': ['Blog'],
    'news': ['Blog'],
    'posts': ['Blog'],
    'store': ['Storefront'],
    'shop': ['Storefront'],
    'ecommerce': ['Storefront'],
    'products': ['Storefront'],
    'cart': ['Storefront'],
    'checkout': ['Storefront'],
    'payment': ['Storefront'],
    'dashboard': ['Dashboard'],
    'admin': ['Dashboard'],
    'analytics': ['Dashboard'],
    'data': ['Dashboard'],
    'charts': ['Dashboard'],
    'metrics': ['Dashboard'],
    'management': ['Dashboard'],
  };

  const relevantTemplates: string[] = [];
  
  for (const keyword of keywords) {
    if (keywordToTemplate[keyword]) {
      relevantTemplates.push(...keywordToTemplate[keyword]);
    }
  }

  // Remove duplicates
  return [...new Set(relevantTemplates)];
}

