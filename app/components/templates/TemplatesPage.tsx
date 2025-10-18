import { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@convex/_generated/api';
import { Button } from '@ui/Button';
import { TemplatePreview } from './TemplatePreview';
import { 
  EyeIcon, 
  RocketIcon, 
  PaletteIcon,
  ChartIcon,
} from '../icons/FeatureIcons';
import { 
  CodeBracketIcon as CodeIcon,
  ShoppingBagIcon as ShoppingCartIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserIcon,
  HomeIcon,
  ClockIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

interface Template {
  _id: string;
  name: string;
  description: string;
  category: string;
  thumbnailUrl?: string;
  previewUrl?: string;
  aiTags: string[];
  metadata?: {
    techStack: string[];
    features: string[];
    estimatedBuildTime?: string;
  };
}

const categoryIcons = {
  'Landing Page': HomeIcon,
  'Portfolio': UserIcon,
  'Blog': DocumentTextIcon,
  'Storefront': ShoppingCartIcon,
  'Dashboard': ChartBarIcon,
};

const categoryColors = {
  'Landing Page': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Portfolio': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Blog': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'Storefront': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'Dashboard': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
};

export function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  
  const templates = useQuery(api.templates.getAllTemplates, { 
    category: selectedCategory || undefined,
    includeUserTemplates: false,
  });

  const seedTemplates = useMutation(api.seedTemplates.seedBuiltInTemplates);

  const handleSeedTemplates = async () => {
    try {
      await seedTemplates({});
      // The page will automatically refresh due to the query
    } catch (error) {
      console.error('Failed to seed templates:', error);
    }
  };

  // If templates are loading or don't exist, show a message
  if (templates === undefined) {
    return (
      <div className="min-h-screen bg-bolt-elements-background-depth-2">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F5C542] mx-auto mb-4"></div>
            <p className="text-content-secondary">Loading templates...</p>
          </div>
        </div>
      </div>
    );
  }

  if (templates.length === 0) {
    return (
      <div className="min-h-screen bg-bolt-elements-background-depth-2">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-content-primary mb-4">No Templates Available</h1>
            <p className="text-content-secondary mb-6">
              Templates haven't been seeded yet. Click the button below to initialize the template database.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={handleSeedTemplates} 
                variant="primary"
              >
                Initialize Templates
              </Button>
              <Button 
                onClick={() => window.location.reload()} 
                variant="outline"
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const categories = [
    { name: 'All', count: templates?.length || 0 },
    { name: 'Landing Page', count: templates?.filter(t => t.category === 'Landing Page').length || 0 },
    { name: 'Portfolio', count: templates?.filter(t => t.category === 'Portfolio').length || 0 },
    { name: 'Blog', count: templates?.filter(t => t.category === 'Blog').length || 0 },
    { name: 'Storefront', count: templates?.filter(t => t.category === 'Storefront').length || 0 },
    { name: 'Dashboard', count: templates?.filter(t => t.category === 'Dashboard').length || 0 },
  ];

  const handleUseTemplate = (template: Template) => {
    // Navigate to chat with template context
    const prompt = `Build me a ${template.name.toLowerCase()} using the ${template.name} template. ${template.description}`;
    window.location.href = `/chat?prompt=${encodeURIComponent(prompt)}&template=${template._id}`;
  };

  const handlePreviewTemplate = (template: Template) => {
    setPreviewTemplate(template);
  };

  if (!templates) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F5C542]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-content-primary mb-2">
          Choose Your Template
        </h1>
        <p className="text-content-secondary">
          Start building faster with our professionally designed templates. Each template includes 
          layout, sample components, and AI tags to help the agent understand your vision.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "primary" : "neutral"}
              size="sm"
              onClick={() => setSelectedCategory(category.name === 'All' ? null : category.name)}
              className="flex items-center gap-2"
            >
              {category.name}
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => {
          const CategoryIcon = categoryIcons[template.category as keyof typeof categoryIcons] || CodeIcon;
          const categoryColor = categoryColors[template.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800';
          
          return (
            <div key={template._id} className="rounded-lg border bg-bolt-elements-background-depth-1 shadow-sm group hover:shadow-lg transition-all duration-200">
              <div className="p-6">
                {/* Template Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${categoryColor}`}>
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-content-primary">{template.name}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
                        {template.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-content-secondary text-sm mb-4 line-clamp-3">
                  {template.description}
                </p>

                {/* Tech Stack */}
                {template.metadata?.techStack && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CodeIcon className="w-4 h-4 text-content-tertiary" />
                      <span className="text-xs font-medium text-content-tertiary">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {template.metadata.techStack.map((tech) => (
                        <span key={tech} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {template.metadata?.features && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <PaletteIcon className="w-4 h-4 text-content-tertiary" />
                      <span className="text-xs font-medium text-content-tertiary">Features</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {template.metadata.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      ))}
                      {template.metadata.features.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300">
                          +{template.metadata.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* AI Tags */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TagIcon className="w-4 h-4 text-content-tertiary" />
                    <span className="text-xs font-medium text-content-tertiary">AI Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {template.aiTags.slice(0, 4).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        {tag}
                      </span>
                    ))}
                    {template.aiTags.length > 4 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        +{template.aiTags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Estimated Build Time */}
                {template.metadata?.estimatedBuildTime && (
                  <div className="flex items-center gap-2 mb-4 text-xs text-content-tertiary">
                    <ClockIcon className="w-4 h-4" />
                    <span>Estimated build time: {template.metadata.estimatedBuildTime}</span>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleUseTemplate(template)}
                    className="flex-1"
                  >
                    <RocketIcon className="w-4 h-4 mr-2" />
                    Use Template
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePreviewTemplate(template)}
                  >
                    <EyeIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <TemplatePreview
          templateType={previewTemplate.name}
          onClose={() => setPreviewTemplate(null)}
        />
      )}

      {/* Empty State */}
      {templates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <CodeIcon className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-content-primary mb-2">
            No templates found
          </h3>
          <p className="text-content-secondary">
            {selectedCategory 
              ? `No templates found in the ${selectedCategory} category.`
              : 'No templates are available at the moment.'
            }
          </p>
        </div>
      )}
    </div>
  );
}

