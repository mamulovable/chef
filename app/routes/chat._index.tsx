import { json } from '@vercel/remix';
import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { ClientOnly } from 'remix-utils/client-only';
import { BuilderHeader } from '~/components/builder/BuilderHeader';
import { Homepage } from '~/components/Homepage.client';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Build with Dreamera — AI App Builder' },
    { name: 'description', content: 'Start building your dream app with Dreamera AI' },
  ];
};

export const loader = async (args: LoaderFunctionArgs) => {
  const url = new URL(args.request.url);
  let code: string | null = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const prompt = url.searchParams.get('prompt');
  const template = url.searchParams.get('template');
  
  // If state is also set, this is probably the GitHub OAuth login flow finishing.
  // The code is probably not for us.
  if (state) {
    code = null;
  }
  return json({ code, prompt, template });
};

// Chat/Builder interface where users can start building their apps.
// This is the actual app builder - the Dreamera building experience.
export default function ChatIndex() {
  const loaderData = useLoaderData<typeof loader>();
  
  return (
    <div className="flex size-full flex-col bg-[#0F0F10]">
      <BuilderHeader />
      <ClientOnly>{() => <Homepage loaderData={loaderData} />}</ClientOnly>
    </div>
  );
}

