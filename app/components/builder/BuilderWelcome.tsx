import { SparklesIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export function BuilderWelcome() {
  const quickStarts = [
    {
      icon: CodeBracketIcon,
      title: 'Portfolio Website',
      description: 'Build a stunning personal portfolio',
      prompt: 'Create a modern portfolio website with sections for about, projects, and contact',
    },
    {
      icon: SparklesIcon,
      title: 'SaaS Dashboard',
      description: 'Full-featured admin panel',
      prompt: 'Build a SaaS dashboard with analytics, user management, and settings',
    },
    {
      icon: RocketLaunchIcon,
      title: 'E-commerce Store',
      description: 'Online store with payments',
      prompt: 'Create an e-commerce website with product catalog, cart, and checkout',
    },
  ];

  const handleQuickStart = (prompt: string) => {
    const input = document.querySelector('textarea[name="chat-input"]') as HTMLTextAreaElement;
    if (input) {
      input.value = prompt;
      input.focus();
      // Trigger input event to update the state
      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-4xl text-center">
        {/* Hero */}
        <div className="mb-12">
          <div className="mb-6 flex justify-center">
            <div className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B2C83] to-[#7A3CA3] shadow-lg shadow-[#5B2C83]/50">
              <SparklesIcon className="size-10 text-[#F5C542]" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Welcome to <span className="text-[#F5C542]">Dreamera</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Describe your dream app, and watch it come to life. No code, just your imagination.
          </p>
        </div>

        {/* Quick Starts */}
        <div className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-gray-200">Quick Starts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {quickStarts.map((item) => (
              <button
                key={item.title}
                onClick={() => handleQuickStart(item.prompt)}
                className="group relative overflow-hidden rounded-xl border border-[#5B2C83]/40 bg-gradient-to-br from-[#1a1a1c] to-[#0F0F10] p-6 text-left transition hover:border-[#F5C542]/50 hover:shadow-lg hover:shadow-[#5B2C83]/20"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-[#5B2C83]/20">
                  <item.icon className="size-6 text-[#F5C542]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <SparklesIcon className="size-5 text-[#F5C542]" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="rounded-xl border border-[#5B2C83]/30 bg-[#1a1a1c] p-6">
          <h3 className="mb-4 text-lg font-semibold text-[#F5C542]">💡 Pro Tips</h3>
          <ul className="space-y-2 text-left text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#F5C542]">•</span>
              <span>Be specific about features you want - the more detail, the better the result</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F5C542]">•</span>
              <span>You can iterate and refine as you go - just ask for changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F5C542]">•</span>
              <span>Preview your app in real-time as Dreamera builds it</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F5C542]">•</span>
              <span>Export your code or deploy directly when you're ready</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <p className="text-sm text-gray-400">
            Start by describing your app in the message box below ↓
          </p>
        </div>
      </div>
    </div>
  );
}

