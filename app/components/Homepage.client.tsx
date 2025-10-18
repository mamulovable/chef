import { Chat } from './chat/Chat';
import { ChefAuthProvider } from './chat/ChefAuthWrapper';
import { useRef } from 'react';
import { useConvexChatHomepage } from '~/lib/stores/startup';
import { Toaster } from '~/components/ui/Toaster';
import { setPageLoadChatId } from '~/lib/stores/chatId';
import type { Message } from '@ai-sdk/react';
import type { PartCache } from '~/lib/hooks/useMessageParser';
import { UserProvider } from '~/components/UserProvider';

interface HomepageProps {
  loaderData?: {
    code: string | null;
    prompt: string | null;
    template: string | null;
  };
}

export function Homepage({ loaderData }: HomepageProps) {
  // Set up a temporary chat ID early in app initialization. We'll
  // eventually replace this with a slug once we receive the first
  // artifact from the model if the user submits a prompt.
  const initialId = useRef(crypto.randomUUID());
  setPageLoadChatId(initialId.current);
  // NB: On this path, we render `ChatImpl` immediately.
  return (
    <>
      <ChefAuthProvider redirectIfUnauthenticated={false}>
        <UserProvider>
          <ChatWrapper initialId={initialId.current} loaderData={loaderData} />
        </UserProvider>
      </ChefAuthProvider>
      <Toaster />
    </>
  );
}

const ChatWrapper = ({ initialId, loaderData }: { initialId: string; loaderData?: HomepageProps['loaderData'] }) => {
  const partCache = useRef<PartCache>(new Map());
  const { storeMessageHistory, initializeChat, initialMessages, subchats } = useConvexChatHomepage(initialId);
  
  // If we have a prompt or template from URL params, we'll handle it in the Chat component
  return (
    <Chat
      initialMessages={initialMessages ?? emptyList}
      partCache={partCache.current}
      storeMessageHistory={storeMessageHistory}
      initializeChat={initializeChat}
      isReload={false}
      hadSuccessfulDeploy={false}
      subchats={subchats}
      initialPrompt={loaderData?.prompt}
      initialTemplate={loaderData?.template}
    />
  );
};

const emptyList: Message[] = [];
