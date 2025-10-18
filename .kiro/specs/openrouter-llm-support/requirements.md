# Requirements Document

## Introduction

This feature adds OpenRouter AI LLM support to Chef, enabling users to leverage additional AI models for app generation. OpenRouter provides access to various AI models through a unified API, and we specifically want to integrate three free models: deepseek/deepseek-chat-v3.1:free, qwen/qwen3-coder:free, and openai/gpt-oss-20b:free. This will expand Chef's AI capabilities and provide users with more model options for building their applications.

## Requirements

### Requirement 1

**User Story:** As a Chef user, I want to select OpenRouter as an AI provider, so that I can use additional AI models for app generation.

#### Acceptance Criteria

1. WHEN a user accesses the AI provider selection interface THEN the system SHALL display OpenRouter as an available provider option
2. WHEN a user selects OpenRouter as their provider THEN the system SHALL prompt for OpenRouter API key configuration
3. IF OpenRouter is selected AND no API key is configured THEN the system SHALL display an error message and prevent model usage
4. WHEN OpenRouter is properly configured THEN the system SHALL enable access to OpenRouter-specific models

### Requirement 2

**User Story:** As a Chef user, I want to choose from specific OpenRouter models, so that I can select the most appropriate model for my app generation needs.

#### Acceptance Criteria

1. WHEN OpenRouter is selected as the provider THEN the system SHALL display the following three models as options:
   - deepseek/deepseek-chat-v3.1:free
   - qwen/qwen3-coder:free  
   - openai/gpt-oss-20b:free
2. WHEN a user selects one of these models THEN the system SHALL configure the AI service to use that specific model
3. WHEN generating app code THEN the system SHALL send requests to the selected OpenRouter model
4. IF a model request fails THEN the system SHALL display appropriate error messages to the user

### Requirement 3

**User Story:** As a Chef user, I want OpenRouter models to work seamlessly with existing Chef features, so that I can generate full-stack applications without functionality loss.

#### Acceptance Criteria

1. WHEN using OpenRouter models THEN the system SHALL maintain all existing Chef capabilities including database integration, authentication, and real-time features
2. WHEN generating code with OpenRouter models THEN the system SHALL produce Convex-compatible backend code
3. WHEN using OpenRouter models THEN the system SHALL support the same prompt templates and context as other providers
4. WHEN switching between providers THEN the system SHALL preserve user session and project state

### Requirement 4

**User Story:** As a Chef administrator, I want OpenRouter integration to follow existing provider patterns, so that the codebase remains maintainable and consistent.

#### Acceptance Criteria

1. WHEN implementing OpenRouter support THEN the system SHALL follow the same architectural patterns as existing AI providers
2. WHEN adding OpenRouter configuration THEN the system SHALL use the same configuration management approach as other providers
3. WHEN handling OpenRouter API calls THEN the system SHALL implement proper error handling and rate limiting
4. WHEN OpenRouter is integrated THEN the system SHALL maintain backward compatibility with existing provider configurations