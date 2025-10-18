# Implementation Plan

- [x] 1. Update type definitions for OpenRouter provider


  - Add 'OpenRouter' to the ProviderType enum in annotations.ts
  - Update type exports and ensure TypeScript compilation passes
  - _Requirements: 4.1, 4.2_



- [x] 2. Extend API key storage schema for OpenRouter


  - Add openrouter field to apiKeyValidator in convex/schema.ts


  - Ensure backward compatibility with existing API key configurations
  - _Requirements: 1.2, 4.3_

- [x] 3. Implement OpenRouter model configuration


  - Add OpenRouter model definitions and max token limits
  - Implement modelForProvider case for OpenRouter with the three specified models
  - Add environment variable support for OPENROUTER_MODEL default
  - _Requirements: 2.1, 2.2_



- [x] 4. Implement OpenRouter provider in getProvider function

  - Add OpenRouter case to getProvider function using @ai-sdk/openai-compatible
  - Configure OpenRouter base URL and required headers
  - Implement proper API key handling (user-provided vs environment)


  - Set appropriate maxTokens based on selected model
  - _Requirements: 1.1, 1.3, 2.2_

- [x] 5. Add OpenRouter-specific error handling

  - Extend userKeyApiFetch to handle OpenRouter-specific error scenarios


  - Implement proper error messages for rate limiting and model availability
  - Add OpenRouter context to error reporting
  - _Requirements: 1.4, 2.4_

- [x] 6. Create unit tests for OpenRouter provider


  - Test OpenRouter provider initialization and configuration
  - Test model selection for all three supported models
  - Test API key handling scenarios (user vs environment keys)
  - Test error handling for various HTTP status codes
  - _Requirements: 4.1, 4.4_

- [x] 7. Add OpenRouter to usage annotation system

  - Extend usageAnnotationValidator to include OpenRouter metadata if needed
  - Update parseAnnotations to handle OpenRouter provider annotations
  - Ensure usage tracking works correctly with OpenRouter models
  - _Requirements: 3.1, 3.3_

- [x] 8. Test OpenRouter integration end-to-end


  - Create integration tests with actual OpenRouter API calls
  - Test each of the three free models with typical Chef prompts
  - Verify code generation produces Convex-compatible output
  - Test provider switching between OpenRouter and existing providers
  - _Requirements: 3.1, 3.2, 3.4_

- [x] 9. Add environment variable documentation


  - Document OPENROUTER_API_KEY environment variable
  - Document OPENROUTER_MODEL optional environment variable
  - Update any configuration documentation for the new provider
  - _Requirements: 4.2_

- [x] 10. Verify backward compatibility





  - Test that existing provider configurations remain unchanged
  - Verify that switching between all providers works correctly
  - Ensure no breaking changes to existing API key management
  - Test that existing user sessions and projects are preserved
  - _Requirements: 3.4, 4.4_