import { json } from '@vercel/remix';
import type { LoaderFunctionArgs } from '@vercel/remix';
import type { LinksFunction, MetaFunction } from '@vercel/remix';
import { ClientOnly } from 'remix-utils/client-only';
import { LandingPage } from '~/components/landing/LandingPage.client';

export const meta: MetaFunction = () => {
  return [
    { title: 'Dreamera — Build Your Dream App & Website — No Code, Just Dream' },
    { 
      name: 'description', 
      content: 'Explain what you want, and Dreamera will turn it into a fully functioning web app or website in minutes. No setup, no server, no headaches. Join over 120,000 dreamers building smarter.' 
    },
    {
      property: 'og:image',
      content: '/social_preview_index.png',
    },
    {
      property: 'og:title',
      content: 'Dreamera — Build Your Dream App & Website — No Code, Just Dream',
    },
    {
      property: 'og:description',
      content: 'Turn your ideas into fully functioning web apps in minutes with AI-powered development.',
    },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: 'canonical',
    href: 'https://dreamera.ai/',
  },
];

export const loader = async (args: LoaderFunctionArgs) => {
  const url = new URL(args.request.url);
  let code: string | null = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  // If state is also set, this is probably the GitHub OAuth login flow finishing.
  // The code is probably not for us.
  if (state) {
    code = null;
  }
  return json({ code });
};

// Landing page showcasing Dreamera's features, pricing, and capabilities.
// Users can start building directly from the hero section or explore features first.
export default function Index() {
  return (
    <ClientOnly>
      {() => <LandingPage />}
    </ClientOnly>
  );
}
