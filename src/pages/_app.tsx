
import { AppProps } from 'next/app';
import { Header } from '../components/Header/Header';
import { SessionProvider } from 'next-auth/react'

import '../styles/global.scss'
import { PrismicProvider } from '@prismicio/react';
import { linkResolver, repositoryName } from '../services/prismic';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';
import { Client } from '@prismicio/client';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrismicProvider 
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props}) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
  )}>
        <PrismicPreview repositoryName={repositoryName}>
          <SessionProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
          </SessionProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  );
    
  
}

export default MyApp
