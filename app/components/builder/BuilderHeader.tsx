import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chatId';
import { HeaderActionButtons } from '../header/HeaderActionButtons.client';
import { ChatDescription } from '~/components/header/ChatDescription.client';
import { DeployButton } from '../header/DeployButton';
import { ShareButton } from '../header/ShareButton';
import { useConvexSessionIdOrNullOrLoading } from '~/lib/stores/sessionId';
import { HamburgerMenuIcon, PersonIcon, GearIcon, ExitIcon, HomeIcon } from '@radix-ui/react-icons';
import { DownloadButton } from '../header/DownloadButton';
import { LoggedOutHeaderButtons } from '../header/LoggedOutHeaderButtons';
import { profileStore, setProfile } from '~/lib/stores/profile';
import { Menu as MenuComponent, MenuItem as MenuItemComponent } from '@ui/Menu';
import { SESSION_ID_KEY } from '~/components/chat/ChefAuthWrapper';
import { FeedbackButton } from '../header/FeedbackButton';
import { DiscordButton } from '../header/DiscordButton';
import { PromptDebugButton } from '../header/PromptDebugButton';
import { ReferButton } from '../header/ReferButton';
import { useSelectedTeamSlug } from '~/lib/stores/convexTeams';
import { useUsage } from '~/lib/stores/usage';
import { useReferralStats } from '~/lib/hooks/useReferralCode';
import { Menu } from '~/components/sidebar/Menu.client';
import { useAuth } from '@workos-inc/authkit-react';

export function BuilderHeader({ hideSidebarIcon = false }: { hideSidebarIcon?: boolean }) {
  const chat = useStore(chatStore);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sessionId = useConvexSessionIdOrNullOrLoading();
  const isLoggedIn = sessionId !== null;
  const showSidebarIcon = !hideSidebarIcon && isLoggedIn;

  const profile = useStore(profileStore);
  const { signOut } = useAuth();

  const teamSlug = useSelectedTeamSlug();
  const { isPaidPlan } = useUsage({ teamSlug });
  const referralStats = useReferralStats();

  const handleLogout = () => {
    setProfile(null);
    window.localStorage.removeItem(SESSION_ID_KEY);
    signOut({ returnTo: window.location.origin });
  };

  const handleSettingsClick = () => {
    window.location.pathname = '/settings';
  };

  return (
    <header
      className={
        'flex h-[var(--header-height)] items-center justify-between border-b border-[#5B2C83]/30 bg-[#0F0F10]/95 px-5 backdrop-blur-xl'
      }
    >
      <div className="z-40 flex cursor-pointer items-center gap-4 text-content-primary">
        {showSidebarIcon && (
          <HamburgerMenuIcon
            className="shrink-0 text-[#F5C542] hover:text-[#F5C542]/80"
            data-hamburger-menu
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        )}
        <a href="/" className="flex items-center gap-2" title="Back to home">
          <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B2C83] to-[#7A3CA3]">
            <span className="text-xl font-bold text-[#F5C542]">D</span>
          </div>
          <span className="text-xl font-bold text-[#F5C542]">Dreamera</span>
        </a>
        {!chat.started && (
          <span className="ml-4 hidden text-sm text-gray-400 md:inline">What will you dream today?</span>
        )}
      </div>
      <>
        {chat.started && (
          <span className="flex-1 truncate px-4 text-center text-content-primary">
            <ClientOnly>{() => <ChatDescription />}</ClientOnly>
          </span>
        )}
        <ClientOnly>
          {() => (
            <div className="ml-auto flex items-center gap-2">
              {!isLoggedIn && <LoggedOutHeaderButtons />}

              {chat.started && (
                <>
                  <PromptDebugButton />
                  {isPaidPlan === false && referralStats && referralStats.left > 0 && <ReferButton />}
                  <DownloadButton />
                  <ShareButton />
                  <DeployButton />
                  <div className="mr-1">
                    <HeaderActionButtons />
                  </div>
                </>
              )}
              {profile && (
                <MenuComponent
                  placement="top-start"
                  buttonProps={{
                    variant: 'neutral',
                    title: 'User menu',
                    inline: true,
                    className: 'rounded-full border-[#5B2C83]/40 hover:border-[#F5C542]',
                    icon: profile.avatar ? (
                      <img
                        src={profile.avatar}
                        className="size-8 min-w-8 rounded-full object-cover"
                        loading="eager"
                        decoding="sync"
                      />
                    ) : (
                      <PersonIcon className="size-8 min-w-8 rounded-full border border-[#5B2C83]/40 text-[#F5C542]" />
                    ),
                  }}
                >
                  <FeedbackButton showInMenu={true} />
                  <DiscordButton showInMenu={true} />
                  <hr className="border-[#5B2C83]/30" />
                  <MenuItemComponent action={handleSettingsClick}>
                    <GearIcon className="text-[#F5C542]" />
                    Settings & Usage
                  </MenuItemComponent>
                  <MenuItemComponent action={handleLogout}>
                    <ExitIcon className="text-gray-400" />
                    Log out
                  </MenuItemComponent>
                </MenuComponent>
              )}
            </div>
          )}
        </ClientOnly>
      </>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

