import type { MetaFunction } from '@vercel/remix';
import { ClientOnly } from 'remix-utils/client-only';
import { AnimatedAIChat } from '~/components/ui/animated-ai-chat';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dreamera - Animated Chat Demo' },
    { name: 'description', content: 'Demo of Dreamera animated chat interface' },
  ];
};

export default function Demo() {
  return (
    <div className="flex w-screen h-screen overflow-hidden bg-[#0F0F10]">
      <ClientOnly>{() => <AnimatedAIChat />}</ClientOnly>
    </div>
  );
}

