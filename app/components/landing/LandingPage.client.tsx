import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { LandingNav } from './LandingNav';
import { useTheme } from '../../lib/hooks/useTheme';
import {
  CoinIcon,
  LockOpenIcon,
  UsersIcon,
  PaletteIcon,
  LightbulbIcon,
  ClipboardIcon,
  BoltIcon,
  RocketIcon,
  BrainIcon,
  DatabaseIcon,
  ShieldIcon,
  EyeIcon,
  ChartIcon,
  UploadIcon,
  ChevronDownIcon,
} from '../icons/FeatureIcons';

export function LandingPage() {
  const [promptValue, setPromptValue] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const { theme } = useTheme();

  const quickPrompts = [
    'Build a portfolio site',
    'Create a chatbot',
    'Design an e-commerce store',
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleStep = (index: number) => {
    setActiveStep(activeStep === index ? 0 : index);
  };

  return (
    <div className="landing-container">
      <LandingNav />
      
      {/* Hero Section */}
      <section className="landing-hero-gradient relative overflow-hidden px-6 pb-24 pt-32 md:pt-40">
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            Build Your Dream Website{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
              Effortlessly
            </span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg md:text-xl" style={{ 
            color: 'var(--landing-text-secondary)' 
          }}>
            Create compelling web apps and launch your ideas in a snap using intuitive AI
            without any setup or coding knowledge required.
          </p>

          {/* Prompt Input Box */}
          <div className="mx-auto mb-8 max-w-3xl">
            <div className="relative">
              <input
                type="text"
                value={promptValue}
                onChange={(e) => setPromptValue(e.target.value)}
                placeholder="What would you like to build today?"
                className="w-full rounded-2xl px-6 py-5 text-lg transition focus:outline-none"
                style={{
                  backgroundColor: 'var(--landing-bg-secondary)',
                  color: 'var(--landing-text-primary)',
                  border: '2px solid var(--landing-border-color)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--landing-accent-primary)';
                  e.currentTarget.style.boxShadow = 'var(--landing-shadow-lg)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--landing-border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && promptValue.trim()) {
                    window.location.href = `/chat?prompt=${encodeURIComponent(promptValue)}`;
                  }
                }}
              />
              <a
                href={promptValue.trim() ? `/chat?prompt=${encodeURIComponent(promptValue)}` : '/chat'}
                className="landing-button-primary absolute right-2 top-1/2 -translate-y-1/2 text-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Quick Prompt Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => setPromptValue(prompt)}
                className="rounded-full px-5 py-2 text-sm transition"
                style={{
                  border: '1px solid var(--landing-border-color)',
                  backgroundColor: 'var(--landing-bg-secondary)',
                  color: 'var(--landing-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--landing-accent-primary)';
                  e.currentTarget.style.color = 'var(--landing-accent-primary)';
                  e.currentTarget.style.backgroundColor = 'var(--landing-bg-tertiary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--landing-border-color)';
                  e.currentTarget.style.color = 'var(--landing-text-secondary)';
                  e.currentTarget.style.backgroundColor = 'var(--landing-bg-secondary)';
                }}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="size-10 rounded-full border-2"
                  style={{
                    borderColor: 'var(--landing-bg-primary)',
                    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                  }}
                />
              ))}
            </div>
            <p className="text-sm" style={{ color: 'var(--landing-text-tertiary)' }}>
              Join over <span className="font-semibold" style={{ color: 'var(--landing-accent-primary)' }}>120,000+ users</span> building smarter with
              Dreamora
            </p>
          </div>
        </div>
      </section>

      {/* Why Dreamora Section */}
      <section id="features" className="landing-section" style={{ backgroundColor: 'var(--landing-bg-subtle)' }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            Why Dreamora <span style={{ color: 'var(--landing-accent-primary)' }}>Stands Out</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                Icon: CoinIcon,
                title: 'Fair Token Pricing',
                desc: 'Only pay when you build. No expensive subscription locks, just straightforward pricing.',
              },
              {
                Icon: LockOpenIcon,
                title: 'Built on Transparency',
                desc: 'Open core vision with full access to your code. Never be locked into our platform.',
              },
              {
                Icon: UsersIcon,
                title: 'Community & Ownership',
                desc: 'As Dreamora grows, our community thrives. Share in our collective success.',
              },
              {
                Icon: PaletteIcon,
                title: 'One Platform, Many Dreams',
                desc: 'From dashboards and e-shops to blogs and tools — Dreamora handles them all with ease.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="landing-card group"
              >
                <item.Icon className="landing-icon mb-4" />
                <h3 className="mb-3 text-xl font-semibold" style={{ color: 'var(--landing-accent-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--landing-text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Interactive */}
      <section id="how-it-works" className="landing-section">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            How It Works
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center" style={{ color: 'var(--landing-text-secondary)' }}>
            Dreamora helps you create stunning web applications with AI - no coding required.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Side - Interactive Steps */}
            <div className="space-y-4">
              {[
                {
                  title: 'Describe Your Vision',
                  desc: 'Simply tell us what you want to build in everyday language. Our AI instantly creates a development roadmap tailored to your needs.',
                  Icon: LightbulbIcon,
                },
                {
                  title: 'AI Generates Code',
                  desc: 'Watch as our AI transforms your vision into production-ready code in seconds, handling everything from UI to backend logic.',
                  Icon: BrainIcon,
                },
                {
                  title: 'Review & Test',
                  desc: 'See your application come to life instantly in a live preview environment. Validate features with zero waiting time.',
                  Icon: EyeIcon,
                },
                {
                  title: 'Iterate & Refine',
                  desc: 'Fine-tune your app through natural conversation. Our AI implements changes in real-time as you provide feedback.',
                  Icon: RocketIcon,
                },
              ].map((step, index) => (
                <button
                  key={index}
                  onClick={() => toggleStep(index)}
                  className="w-full text-left transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--landing-bg-secondary)',
                    border: activeStep === index ? '2px solid var(--landing-accent-primary)' : '1px solid var(--landing-border-color)',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: activeStep === index ? 'var(--landing-shadow-lg)' : 'var(--landing-shadow-sm)',
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex size-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
                        style={{
                          backgroundColor: activeStep === index ? 'var(--landing-accent-primary)' : 'var(--landing-bg-tertiary)',
                          color: activeStep === index ? 'white' : 'var(--landing-accent-primary)',
                        }}
                      >
                        <step.Icon className="size-6" />
                      </div>
                      <div className="flex-1">
                        <h3 
                          className="mb-2 text-lg font-semibold transition-colors duration-300"
                          style={{ 
                            color: activeStep === index ? 'var(--landing-accent-primary)' : 'var(--landing-text-primary)' 
                          }}
                        >
                          {step.title}
                        </h3>
                        <div
                          className="overflow-hidden transition-all duration-300"
                          style={{
                            maxHeight: activeStep === index ? '200px' : '0',
                            opacity: activeStep === index ? 1 : 0,
                          }}
                        >
                          <p 
                            className="text-sm leading-relaxed"
                            style={{ color: 'var(--landing-text-secondary)' }}
                          >
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div 
                      className="transition-transform duration-300"
                      style={{
                        transform: activeStep === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: 'var(--landing-accent-primary)',
                      }}
                    >
                      <ChevronDownIcon className="size-5 shrink-0" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Side - Animated Preview */}
            <div 
              className="relative flex min-h-[500px] items-center justify-center rounded-2xl p-8 transition-all duration-500"
              style={{
                backgroundColor: 'var(--landing-bg-secondary)',
                border: '1px solid var(--landing-border-color)',
                boxShadow: 'var(--landing-shadow-lg)',
              }}
            >
              {/* Step 0 - Describe Your Vision */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500"
                style={{
                  opacity: activeStep === 0 ? 1 : 0,
                  transform: activeStep === 0 ? 'scale(1)' : 'scale(0.95)',
                  pointerEvents: activeStep === 0 ? 'auto' : 'none',
                }}
              >
                <div 
                  className="mb-6 flex size-20 items-center justify-center rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                    animation: activeStep === 0 ? 'pulse 2s ease-in-out infinite' : 'none',
                  }}
                >
                  <BrainIcon className="size-10 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-center" style={{ color: 'var(--landing-text-primary)' }}>
                  Describe your goal
                </h3>
                <p className="max-w-md text-center leading-relaxed" style={{ color: 'var(--landing-text-secondary)' }}>
                  Start a conversation with Dreamora by describing what you want to build or the problem you're trying to solve. 
                  Dreamora will ask clarifying questions and break it down into a development plan.
                </p>
              </div>

              {/* Step 1 - AI Generates Code */}
              <div
                className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500"
                style={{
                  opacity: activeStep === 1 ? 1 : 0,
                  transform: activeStep === 1 ? 'scale(1)' : 'scale(0.95)',
                  pointerEvents: activeStep === 1 ? 'auto' : 'none',
                }}
              >
                <div className="w-full max-w-md space-y-4">
                  {/* Chat Message Simulation */}
                  <div 
                    className="rounded-lg p-4"
                    style={{ backgroundColor: 'var(--landing-bg-tertiary)' }}
                  >
                    <p className="text-sm" style={{ color: 'var(--landing-text-secondary)' }}>
                      Adjust the padding on the landing page's Hero section.
                    </p>
                  </div>
                  
                  <div 
                    className="rounded-lg p-4"
                    style={{ 
                      backgroundColor: 'var(--landing-bg-primary)',
                      border: '1px solid var(--landing-border-color)',
                    }}
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <div 
                        className="flex size-8 items-center justify-center rounded-full"
                        style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)' }}
                      >
                        <BoltIcon className="size-4 text-white" />
                      </div>
                      <span className="font-semibold" style={{ color: 'var(--landing-text-primary)' }}>
                        dreamora
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--landing-text-secondary)' }}>
                      I'll help you fix the padding top of the landing page. Looking at the Hero component, 
                      I'll adjust the padding and layout to match the design better.
                    </p>
                    
                    {/* Code Changes Preview */}
                    <div 
                      className="rounded-lg p-3 text-xs"
                      style={{ backgroundColor: 'var(--landing-bg-tertiary)' }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-semibold" style={{ color: 'var(--landing-text-primary)' }}>
                          📄 View Code Changes
                        </span>
                        <span 
                          className="rounded-full px-2 py-1 text-xs font-semibold"
                          style={{ 
                            backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                            color: 'var(--landing-accent-primary)',
                          }}
                        >
                          4 actions
                        </span>
                      </div>
                      <div className="space-y-2">
                        {['src/styles/global.css', 'src/pages/index.tsx', 'src/components/hero.tsx'].map((file, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span style={{ color: '#10B981' }}>✓</span>
                            <span style={{ color: 'var(--landing-text-secondary)' }}>{file}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Review & Test */}
              <div
                className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500"
                style={{
                  opacity: activeStep === 2 ? 1 : 0,
                  transform: activeStep === 2 ? 'scale(1)' : 'scale(0.95)',
                  pointerEvents: activeStep === 2 ? 'auto' : 'none',
                }}
              >
                {/* Browser Window Preview */}
                <div 
                  className="w-full overflow-hidden rounded-lg"
                  style={{
                    boxShadow: 'var(--landing-shadow-xl)',
                    border: '1px solid var(--landing-border-color)',
                  }}
                >
                  {/* Browser Chrome */}
                  <div 
                    className="flex items-center gap-2 px-4 py-3"
                    style={{ backgroundColor: 'var(--landing-bg-tertiary)' }}
                  >
                    <div className="flex gap-2">
                      <div className="size-3 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                      <div className="size-3 rounded-full" style={{ backgroundColor: '#F59E0B' }} />
                      <div className="size-3 rounded-full" style={{ backgroundColor: '#10B981' }} />
                    </div>
                    <div 
                      className="ml-4 flex-1 rounded px-3 py-1 text-xs"
                      style={{ 
                        backgroundColor: 'var(--landing-bg-secondary)',
                        color: 'var(--landing-text-tertiary)',
                      }}
                    >
                      🔒 yourwebsite.com
                    </div>
                  </div>
                  
                  {/* Website Preview */}
                  <div 
                    className="relative h-64"
                    style={{
                      background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="mb-2 text-2xl font-bold text-white">
                        Luxury Travel
                      </h3>
                      <p className="mb-4 text-sm text-gray-300">
                        Experience premium destinations with expert guides
                      </p>
                      <button 
                        className="landing-button-primary"
                        style={{ fontSize: '14px' }}
                      >
                        Explore Tours
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Iterate & Refine */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-500"
                style={{
                  opacity: activeStep === 3 ? 1 : 0,
                  transform: activeStep === 3 ? 'scale(1)' : 'scale(0.95)',
                  pointerEvents: activeStep === 3 ? 'auto' : 'none',
                }}
              >
                <div className="w-full max-w-md text-center">
                  <div 
                    className="mb-6 flex size-20 items-center justify-center rounded-full mx-auto"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                    }}
                  >
                    <RocketIcon className="size-10 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold" style={{ color: 'var(--landing-text-primary)' }}>
                    Iterate in Real-Time
                  </h3>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--landing-text-secondary)' }}>
                    Have a conversation with Dreamora to refine your application. Changes are implemented instantly 
                    as you describe what you'd like to improve.
                  </p>
                  
                  {/* Sample refinement requests */}
                  <div className="space-y-2">
                    {['Make the button larger', 'Change the color scheme', 'Add a contact form'].map((text, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-3 text-left text-sm transition-all duration-300"
                        style={{
                          backgroundColor: 'var(--landing-bg-tertiary)',
                          border: '1px solid var(--landing-border-color)',
                          animation: activeStep === 3 ? `slideInRight 0.5s ease-out ${i * 0.2}s both` : 'none',
                        }}
                      >
                        <span style={{ color: 'var(--landing-text-secondary)' }}>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-section" style={{ backgroundColor: 'var(--landing-bg-subtle)' }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            Dream-Powering <span style={{ color: 'var(--landing-accent-primary)' }}>Features</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: BrainIcon,
                title: 'AI-Driven Stack Generation',
                desc: 'React, Next.js, Supabase, and more — all automatically configured.',
              },
              {
                Icon: DatabaseIcon,
                title: 'Built-in Backend & Storage',
                desc: 'No database configuration needed — we manage everything for you.',
              },
              {
                Icon: ShieldIcon,
                title: 'Auth, Payments, APIs',
                desc: 'Dreamora seamlessly integrates essential services.',
              },
              {
                Icon: EyeIcon,
                title: 'Live Preview & Iterate',
                desc: 'See changes instantly reflected in your application.',
              },
              {
                Icon: ChartIcon,
                title: 'Token Analytics Dashboard',
                desc: 'Monitor your usage and credits in real-time.',
              },
              {
                Icon: UploadIcon,
                title: 'Export Code or Deploy',
                desc: 'Download your codebase or host directly with Dreamora.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="landing-card"
              >
                <feature.Icon className="landing-icon-sm mb-4" />
                <h3 className="mb-2 text-lg font-semibold" style={{ color: 'var(--landing-accent-primary)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--landing-text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Showcase Section */}
      <section className="landing-section">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            Dreams Built by <span style={{ color: 'var(--landing-accent-primary)' }}>Real Users</span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center" style={{ color: 'var(--landing-text-secondary)' }}>
            Discover what innovative creators are building with Dreamora.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              'B2B SaaS Platform',
              'Job Board',
              'Marketplace',
              'AI Chat Tool',
              'Dashboard',
              'E-commerce Store',
            ].map((useCase) => (
              <div
                key={useCase}
                className="landing-card group relative"
              >
                <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold" style={{
                  backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--landing-accent-primary)',
                }}>
                  Live App
                </div>
                <div className="mb-4 flex size-16 items-center justify-center rounded-xl" style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                }}>
                  <BoltIcon className="size-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--landing-text-primary)' }}>
                  {useCase}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="landing-section" style={{ backgroundColor: 'var(--landing-bg-subtle)' }}>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            Choose Your <span style={{ color: 'var(--landing-accent-primary)' }}>Dream Plan</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Free Dreamer',
                price: '₦0',
                tokens: '7,000 tokens',
                features: ['Build up to 3 mini apps', 'Dreamora branding', 'Community support'],
                cta: 'Start Free',
                popular: false,
              },
              {
                name: 'Starter Dreamer',
                price: '₦1,000',
                tokens: '100,000 tokens',
                features: ['Build bigger apps', 'Remove branding', 'Email support'],
                cta: 'Get Started',
                popular: true,
              },
              {
                name: 'Pro Dreamer',
                price: '₦2,000',
                tokens: '250,000 tokens',
                features: ['Advanced features', 'Model selection (Gemini/GPT-5)', 'Priority support'],
                cta: 'Go Pro',
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`landing-card relative ${plan.popular ? 'landing-pricing-popular' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-semibold text-white" style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 className="mb-2 text-2xl font-bold" style={{ color: 'var(--landing-text-primary)' }}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: 'var(--landing-accent-primary)' }}>
                    {plan.price}
                  </span>
                  <div className="mt-2 text-sm" style={{ color: 'var(--landing-text-tertiary)' }}>
                    {plan.tokens}
                  </div>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: 'var(--landing-text-secondary)' }}>
                      <CheckIcon className="mt-0.5 size-5 shrink-0" style={{ color: 'var(--landing-accent-primary)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/chat"
                  className={`block w-full rounded-xl py-3 text-center font-semibold transition ${
                    plan.popular ? 'landing-button-primary' : 'landing-button-secondary'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="landing-section">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            What <span style={{ color: 'var(--landing-accent-primary)' }}>Dreamers Say</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: 'Dreamora transformed my concept into a live application in just hours.',
                name: 'Aisha Mohammed',
                title: 'Founder, TechHub Lagos',
              },
              {
                quote: 'With Dreamora, I went from concept to paying customers in days.',
                name: 'Kwame Osei',
                title: 'SaaS Entrepreneur',
              },
              {
                quote: 'Finally, a tool that truly understands my vision and brings it to life.',
                name: 'Zainab Okoro',
                title: 'Product Designer',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="landing-card"
              >
                <div className="mb-4 text-4xl" style={{ color: 'var(--landing-accent-primary)' }}>"</div>
                <p className="mb-6" style={{ color: 'var(--landing-text-secondary)' }}>{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full" style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                  }} />
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--landing-text-primary)' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm" style={{ color: 'var(--landing-text-tertiary)' }}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="landing-section" style={{ backgroundColor: 'var(--landing-bg-subtle)' }}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            Frequently Asked <span style={{ color: 'var(--landing-accent-primary)' }}>Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What exactly is Dreamora?',
                a: 'Dreamora is an AI-powered app and website builder that transforms your ideas into working software — no coding experience required.',
              },
              {
                q: 'How do tokens work?',
                a: 'Tokens are consumed whenever you build features. You can easily top up with prepaid token packs as needed.',
              },
              {
                q: 'Can I export the code?',
                a: 'Yes — you have full access to export your complete codebase or deploy directly using Dreamora.',
              },
              {
                q: 'What tech stacks are supported?',
                a: 'React, Next.js, Supabase backend, payment integrations, authentication, storage — Dreamora handles it all seamlessly.',
              },
              {
                q: 'Is hosting included?',
                a: 'Yes — Dreamora provides integrated hosting for your apps with built-in backend infrastructure.',
              },
              {
                q: 'What if I want my own database or server?',
                a: 'You can optionally connect your own Supabase instance or custom server for advanced use cases.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="landing-faq-item"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="landing-faq-question w-full text-left"
                >
                  <span>{faq.q}</span>
                  <div style={{ color: 'var(--landing-accent-primary)' }}>
                    <ChevronDownIcon 
                      className={`size-5 transition-transform ${openFaqIndex === i ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                {openFaqIndex === i && (
                  <div className="landing-faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="landing-section">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold md:text-6xl" style={{ 
            color: 'var(--landing-text-primary)' 
          }}>
            Ready to <span style={{ color: 'var(--landing-accent-primary)' }}>Build Your Dream?</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl" style={{ color: 'var(--landing-text-secondary)' }}>
            Launch your web app idea today — no development team, no complexity.
          </p>
          <a
            href="/chat"
            className="landing-button-primary inline-block text-xl"
            style={{ padding: '20px 48px', fontSize: '1.25rem' }}
          >
            Start Building for Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12" style={{ borderTop: '1px solid var(--landing-border-color)' }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-lg" style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
              }}>
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--landing-accent-primary)' }}>Dreamora</span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm" style={{ color: 'var(--landing-text-secondary)' }}>
              <a href="/pricing" className="transition hover:underline" 
                 onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
                Pricing
              </a>
              <a href="/blog" className="transition hover:underline"
                 onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
                Blog
              </a>
              <a href="/changelog" className="transition hover:underline"
                 onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
                Changelog
              </a>
              <a href="/docs" className="transition hover:underline"
                 onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
                API Docs
              </a>
              <a href="https://github.com/get-convex/dreamora" className="transition hover:underline"
                 onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
                GitHub
              </a>
              <a href="/support" className="transition hover:underline"
                 onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
                Support
              </a>
            </div>
          </div>
          <div className="pt-8 text-center text-sm" style={{ 
            borderTop: '1px solid var(--landing-border-color)',
            color: 'var(--landing-text-tertiary)' 
          }}>
            © 2025 Dreamora Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
