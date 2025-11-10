import type { Doc } from '@convex/_generated/dataModel';
import { type ModelSelection } from '~/utils/constants';

export function hasApiKeySet(
  modelSelection: ModelSelection,
  useGeminiAuto: boolean,
  apiKey?: Doc<'convexMembers'>['apiKey'] | null,
) {
  if (!apiKey) {
    return false;
  }

  switch (modelSelection) {
    case 'auto':
      if (useGeminiAuto) {
        return !!apiKey.google?.trim();
      }
      return !!apiKey.value?.trim();
    case 'claude-3-5-haiku':
    case 'claude-4-sonnet':
    case 'claude-4.5-sonnet':
      return !!apiKey.value?.trim();
    case 'gpt-4.1':
    case 'gpt-4.1-mini':
    case 'gpt-5':
      return !!apiKey.openai?.trim();
    case 'grok-3-mini':
      return !!apiKey.xai?.trim();
    case 'gemini-2.5-pro':
    case 'gemini-2.5-flash':
      return !!apiKey.google?.trim();
    case 'meta-llama/llama-3.3-70b-instruct:free':
    case 'z-ai/glm-4.5-air:free':
    case 'openai/gpt-oss-20b:free':
    case 'openrouter/polaris-alpha':
    case 'minimax/minimax-m2:free':
      return !!apiKey.openrouter?.trim();
    case 'Qwen/Qwen3-Coder-480B-A35B-Instruct':
    case 'Qwen/Qwen2.5-Coder-32B-Instruct':
      return !!apiKey.hyperbolic?.trim();
    default: {
      const _exhaustiveCheck: never = modelSelection;
      return false;
    }
  }
}

export function hasAnyApiKeySet(apiKey?: Doc<'convexMembers'>['apiKey'] | null) {
  if (!apiKey) {
    return false;
  }
  return Object.entries(apiKey).some(([key, value]) => {
    if (key === 'preference') {
      return false;
    }
    if (typeof value === 'string') {
      return value.trim() !== '';
    }
    return false;
  });
}
