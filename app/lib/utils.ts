import { classNames } from '~/utils/classNames';

/**
 * Utility function for conditionally joining class names.
 * This is an alias to classNames for compatibility with shadcn components.
 */
export function cn(...args: Parameters<typeof classNames>) {
  return classNames(...args);
}

