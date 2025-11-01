import { stripIndents } from '../utils/stripIndent.js';
import type { SystemPromptOptions } from '../types.js';

export function templateGuidelines(options: SystemPromptOptions) {
  if (!options.templateContext) {
    return '';
  }

  const template = options.templateContext;
  
  return stripIndents`
  # Template Context Guidelines
  
  You are working with a pre-built template that provides a foundation for the user's application. Here's the template information:
  
  ## Template Details
  - **Name**: ${template.name}
  - **Category**: ${template.category}
  - **Description**: ${template.description}
  - **Tech Stack**: ${template.metadata?.techStack?.join(', ') || 'React, TailwindCSS, Convex'}
  - **Key Features**: ${template.metadata?.features?.join(', ') || 'Standard web app features'}
  - **Estimated Build Time**: ${template.metadata?.estimatedBuildTime || '2-4 hours'}
  
  ## Template-Specific Instructions
  
  ### Working with the Template
  1. **Preserve Core Structure**: The template provides a working foundation with authentication, routing, and basic styling already configured.
  2. **Build Upon Existing Code**: Modify and extend the existing components rather than replacing them entirely.
  3. **Maintain Design Consistency**: Use the existing color scheme, typography, and component patterns.
  4. **Leverage Template Features**: Take advantage of the pre-built features and components in the template.
  
  ### Template-Specific Guidelines
  
  ${getTemplateSpecificGuidelines(template)}
  
  ### AI Tags Context
  The template is optimized for these use cases: ${template.aiTags.join(', ')}
  
  When implementing features, prioritize functionality that aligns with these tags and the template's intended purpose.
  
  ### Code Organization
  - Keep the existing file structure and naming conventions
  - Add new components in appropriate directories
  - Maintain the existing authentication flow
  - Use the established styling patterns and design system
  
  ### Deployment Considerations
  - The template is already configured for deployment
  - Ensure all new features work with the existing Convex backend
  - Test that authentication flows remain intact
  - Verify responsive design is maintained
  
  Remember: You're enhancing an existing application, not building from scratch. Work with the template's strengths and build upon its foundation.
  `;
}

function getTemplateSpecificGuidelines(template: any): string {
  switch (template.name) {
    case 'Landing Page':
      return stripIndents`
      **Landing Page Template Guidelines:**
      - Focus on conversion optimization and clear value proposition
      - Maintain hero section prominence with compelling headlines
      - Ensure call-to-action buttons are prominent and actionable
      - Use testimonials and social proof effectively
      - Optimize for mobile-first responsive design
      - Keep loading times fast and content scannable
      `;
      
    case 'Portfolio':
      return stripIndents`
      **Portfolio Template Guidelines:**
      - Showcase work effectively with high-quality project displays
      - Maintain clean, professional aesthetic throughout
      - Ensure easy navigation between projects and sections
      - Include clear contact information and call-to-action
      - Optimize for showcasing skills and achievements
      - Use consistent visual hierarchy for project presentations
      `;
      
    case 'Blog':
      return stripIndents`
      **Blog Template Guidelines:**
      - Prioritize readability and content consumption
      - Implement effective categorization and search functionality
      - Ensure smooth article navigation and related content suggestions
      - Optimize for SEO and social sharing
      - Maintain consistent typography and spacing for articles
      - Include author information and publication dates
      `;
      
    case 'Storefront':
      return stripIndents`
      **Storefront Template Guidelines:**
      - Focus on product discovery and conversion funnel
      - Implement effective product filtering and search
      - Ensure smooth shopping cart and checkout experience
      - Optimize product pages for conversion
      - Include trust signals and security indicators
      - Maintain consistent product presentation and pricing
      `;
      
    case 'Dashboard':
      return stripIndents`
      **Dashboard Template Guidelines:**
      - Prioritize data visualization and user experience
      - Implement effective navigation and information architecture
      - Ensure responsive design for various screen sizes
      - Focus on actionable insights and clear metrics
      - Maintain consistent data presentation patterns
      - Optimize for quick decision-making and task completion
      `;
      
    default:
      return stripIndents`
      **General Template Guidelines:**
      - Maintain the existing design system and component patterns
      - Build upon the established functionality and features
      - Ensure new features integrate seamlessly with existing code
      - Preserve the user experience and navigation flow
      - Keep the application performant and responsive
      `;
  }
}







