import type { MetaFunction } from '@vercel/remix';
import { ClientOnly } from 'remix-utils/client-only';
import { TemplatesPage } from '~/components/templates/TemplatesPage';

export const meta: MetaFunction = () => {
  return [
    { title: 'Templates — Dreamera' },
    { name: 'description', content: 'Choose from professionally designed templates to start building your app faster' },
  ];
};

export default function Templates() {
  return (
    <div className="min-h-screen bg-[#0F0F10]">
      <ClientOnly>
        {() => <TemplatesPage />}
      </ClientOnly>
    </div>
  );
}

