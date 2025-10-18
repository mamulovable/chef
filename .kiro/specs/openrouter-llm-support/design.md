# Design Document

## Overview

This design adds OpenRouter AI LLM support to Chef by integrating it into the existing AI provider architecture. OpenRouter provides access to various AI models through a unified API, and we'll specifically support three free models: deepseek/deepseek-chat-v3.1:free, qwen/qwen3-coder:free, and openai/gpt-oss-20b:free.

The implementation follows Chef's existing provider pattern, leveraging the AI SDK's OpenAI-compatible provider since OpenRouter uses an OpenAI-compatible API. This ensures consistency with the current architecture while adding new model capabilities.

## Architecture

### Current Provider System
Chef currently supports five AI providers:
- **Anthropic** - Claude models with rate limiting fallback
- **Bedrock** - AWS-hosted Anthropic models  
- **OpenAI** - GPT models with reasoning effort options
- **XAI** - Grok models with streaming usage
- **Google** - Gemini models via Vertex AI or direct API

### OpenRouter Integration
OpenRouter will be added as the sixth provider, following the same architectural patterns:

1. **Provider Type**: Add 'OpenRouter' to the `ProviderType` enum
2. **Model Selection**: Support the three specified free models
3. **API Integration**: Use `@ai-sdk/openai-compatible` for OpenRouter's OpenAI-compatible API
4. **Configuration**: Follow existing API key management patterns
5. **Error Handling**: Implement consistent error handling and rate limiting

## Components and Interfaces

### 1. Type System Updates

**File**: `app/lib/common/annotations.ts`
- Add 'OpenRouter' to `providerValidator` enum
- Update `ProviderType` to include OpenRouter
- Add OpenRouter-specific metadata to `usageAnnotationValidator` if needed

**File**: `convex/schema.ts`  
- Add `openrouter` field to `apiKeyValidator` object for API key storage

### 2. Provider Implementation

**File**: `app/lib/.server/llm/provider.ts`
- Add OpenRouter case to `modelForProvider()` function
- Add OpenRouter case to `getProvider()` function
- Implement OpenRouter-specific configuration using `@ai-sdk/openai-compatible`
- Set appropriate `maxTokens` limits for OpenRouter models
- Add environment variable support for default model selection

### 3. Model Configuration

**OpenRouter Models**:
```typescript
const OPENROUTER_MODELS = {
  'deepseek/deepseek-chat-v3.1:free': { maxTokens: 8192 },
  'qwen/qwen3-coder:free': { maxTokens: 8192 },
  'openai/gpt-oss-20b:free': { maxTokens: 4096 }
} as const;
```

### 4. API Integration

OpenRouter uses an OpenAI-compatible API with these specifics:
- **Base URL**: `https://openrouter.ai/api/v1`
- **Authentication**: Bearer token via `Authorization` header
- **Model Names**: Full model identifiers (e.g., `deepseek/deepseek-chat-v3.1:free`)
- **Headers**: Additional headers for referrer tracking and app identification

## Data Models

### API Key Storage
The existing `apiKeyValidator` in the Convex schema will be extended:

```typescript
export const apiKeyValidator = v.object({
  preference: v.union(v.literal("always"), v.literal("quotaExhausted")),
  value: v.optional(v.string()), // Anthropic
  openai: v.optional(v.string()),
  xai: v.optional(v.string()),
  google: v.optional(v.string()),
  openrouter: v.optional(v.string()), // New field
});
```

### Provider Configuration
OpenRouter provider configuration will follow the existing pattern:

```typescript
case 'OpenRouter': {
  model = modelForProvider(modelProvider, modelChoice);
  const openrouter = createOpenAI({
    apiKey: userApiKey || getEnv('OPENROUTER_API_KEY'),
    baseURL: 'https://openrouter.ai/api/v1',
    defaultHeaders: {
      'HTTP-Referer': 'https://chef.convex.dev',
      'X-Title': 'Chef - AI Full-Stack App Builder'
    },
    fetch: userApiKey ? userKeyApiFetch('OpenRouter') : fetch,
  });
  provider = {
    model: openrouter(model),
    maxTokens: getOpenRouterMaxTokens(model),
  };
  break;
}
```

## Error Handling

### API Error Management
OpenRouter error handling will follow the existing `userKeyApiFetch` pattern:

1. **401 Unauthorized**: Invalid API key error
2. **413 Payload Too Large**: Request size exceeded
3. **429 Rate Limited**: Rate limiting error with OpenRouter-specific messaging
4. **529 Service Overloaded**: Temporary service unavailability
5. **Other Errors**: Generic error handling with OpenRouter context

### Model Availability
- Handle cases where free models may be temporarily unavailable
- Provide clear error messages when models are rate-limited or offline
- Fallback messaging for quota exhaustion on free models

## Testing Strategy

### Unit Tests
1. **Provider Configuration Tests**
   - Test OpenRouter provider initialization
   - Verify correct model selection for each supported model
   - Test API key handling (user-provided vs environment)

2. **Model Selection Tests**
   - Test `modelForProvider()` with OpenRouter provider
   - Verify default model selection
   - Test custom model choice handling

3. **Error Handling Tests**
   - Test various HTTP error responses
   - Verify error message formatting
   - Test rate limiting scenarios

### Integration Tests
1. **API Integration Tests**
   - Test actual API calls to OpenRouter (with test API key)
   - Verify request formatting and headers
   - Test response parsing and token usage tracking

2. **End-to-End Tests**
   - Test complete chat flow with OpenRouter models
   - Verify code generation capabilities
   - Test provider switching functionality

### Manual Testing
1. **Model Performance Testing**
   - Test each of the three free models with typical Chef prompts
   - Verify code generation quality and Convex compatibility
   - Test with various project types and complexity levels

2. **User Experience Testing**
   - Test API key configuration flow
   - Test model selection interface
   - Test error handling and user feedback

## Implementation Notes

### Environment Variables
New environment variables to support:
- `OPENROUTER_API_KEY`: Default API key for OpenRouter
- `OPENROUTER_MODEL`: Default model selection (optional)

### Dependencies
- Leverage existing `@ai-sdk/openai-compatible` package
- No new dependencies required

### Backward Compatibility
- All existing provider functionality remains unchanged
- New OpenRouter provider is additive only
- Existing user configurations and API keys are preserved

### Performance Considerations
- OpenRouter free models may have rate limits
- Implement appropriate timeout handling
- Consider caching strategies for model availability

This design ensures OpenRouter integration follows Chef's established patterns while providing users with access to additional free AI models for their app generation needs.