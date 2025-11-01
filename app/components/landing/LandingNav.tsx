import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '../icons/FeatureIcons';
import { useTheme } from '../../lib/hooks/useTheme';

export function LandingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full border-b backdrop-blur-xl" style={{ 
      borderColor: 'var(--landing-border-color)',
      backgroundColor: theme === 'dark' ? 'rgba(15, 15, 16, 0.8)' : 'rgba(248, 249, 252, 0.8)'
    }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-lg" style={{ 
              background: 'linear-gradient(135deg, var(--landing-accent-primary) 0%, var(--landing-accent-secondary) 100%)' 
            }}>
              <span className="text-xl font-bold text-white">D</span>
            </div>
            <span className="text-xl font-bold" style={{ color: 'var(--landing-accent-primary)' }}>
              Dreamora
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium transition" style={{ 
              color: 'var(--landing-text-secondary)' 
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'} 
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium transition" style={{ 
              color: 'var(--landing-text-secondary)' 
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'} 
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium transition" style={{ 
              color: 'var(--landing-text-secondary)' 
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'} 
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
              Pricing
            </a>
            <a href="/docs" className="text-sm font-medium transition" style={{ 
              color: 'var(--landing-text-secondary)' 
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'} 
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
              Docs
            </a>
            <a href="/blog" className="text-sm font-medium transition" style={{ 
              color: 'var(--landing-text-secondary)' 
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--landing-accent-primary)'} 
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--landing-text-secondary)'}>
              Blog
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 transition"
              style={{
                color: 'var(--landing-text-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--landing-bg-tertiary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="size-5" />
              ) : (
                <MoonIcon className="size-5" />
              )}
            </button>
            <a
              href="/settings"
              className="rounded-lg px-4 py-2 text-sm font-medium transition"
              style={{ color: 'var(--landing-text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--landing-bg-tertiary)';
                e.currentTarget.style.color = 'var(--landing-accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--landing-text-secondary)';
              }}
            >
              Settings
            </a>
            <a
              href="/chat"
              className="landing-button-primary text-sm"
            >
              Start Building
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2"
              style={{ color: 'var(--landing-accent-primary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="size-5" />
              ) : (
                <MoonIcon className="size-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="size-6" style={{ color: 'var(--landing-accent-primary)' }} />
              ) : (
                <Bars3Icon className="size-6" style={{ color: 'var(--landing-accent-primary)' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="py-4 md:hidden" style={{ borderTop: '1px solid var(--landing-border-color)' }}>
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium" style={{ color: 'var(--landing-text-secondary)' }}>
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium" style={{ color: 'var(--landing-text-secondary)' }}>
                How It Works
              </a>
              <a href="#pricing" className="text-sm font-medium" style={{ color: 'var(--landing-text-secondary)' }}>
                Pricing
              </a>
              <a href="/docs" className="text-sm font-medium" style={{ color: 'var(--landing-text-secondary)' }}>
                Docs
              </a>
              <a href="/blog" className="text-sm font-medium" style={{ color: 'var(--landing-text-secondary)' }}>
                Blog
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <a
                  href="/chat"
                  className="landing-button-secondary text-center text-sm"
                >
                  Sign In
                </a>
                <a
                  href="/chat"
                  className="landing-button-primary text-center text-sm"
                >
                  Start Building
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

