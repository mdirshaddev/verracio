import Link from 'next/link';

import { Icons } from 'shared-config/icons';
import { siteLinks } from 'shared-config/site-links';
import { buttonVariants } from 'shared-ui/button';

import { ThemeToggle } from 'src/components/theme/theme-toggle';

import { SiteDesktopNavigation } from './site-desktop-navigation';
import { SiteMobileNavigation } from './site-mobile-navigation';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0 lg:px-8'>
        <div className='flex gap-4'>
          <SiteMobileNavigation />
          <Link href='/' className='ml-0 flex items-center space-x-2'>
            <Icons.logo className='h-6 w-6' />
            <span className='hidden font-bold lg:inline-block'>mdirshad</span>
          </Link>
          <div className='hidden lg:flex'>
            <SiteDesktopNavigation />
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-1'>
            <Link
              href={siteLinks.links.github}
              target='_blank'
              rel='noreferrer'>
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}>
                <Icons.gitHub className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <Link
              href={siteLinks.links.twitter}
              target='_blank'
              rel='noreferrer'>
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost'
                })}>
                <Icons.social.twitter className='h-5 w-5 fill-current' />
                <span className='sr-only'>Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
