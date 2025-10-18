import React from 'react';
import { LandingPageTemplate } from './LandingPageTemplate';
import { PortfolioTemplate } from './PortfolioTemplate';
import { BlogTemplate } from './BlogTemplate';
import { StorefrontTemplate } from './StorefrontTemplate';
import { DashboardTemplate } from './DashboardTemplate';

interface TemplatePreviewProps {
  templateType: string;
  onClose: () => void;
}

export function TemplatePreview({ templateType, onClose }: TemplatePreviewProps) {
  const renderTemplate = () => {
    switch (templateType) {
      case 'Landing Page':
        return <LandingPageTemplate />;
      case 'Portfolio':
        return <PortfolioTemplate />;
      case 'Blog':
        return <BlogTemplate />;
      case 'Storefront':
        return <StorefrontTemplate />;
      case 'Dashboard':
        return <DashboardTemplate />;
      default:
        return <div className="p-8 text-center">Template not found</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Preview: {templateType} Template
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-auto">
          <div className="min-h-full">
            {renderTemplate()}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              This is a live preview of the {templateType.toLowerCase()} template
            </div>
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  // This would navigate to chat with template context
                  window.location.href = `/?template=${encodeURIComponent(templateType)}`;
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Use This Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
