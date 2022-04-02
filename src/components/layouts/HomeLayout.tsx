import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const HomeLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={ pageDescription }/>
        
        <meta name="og:title" content={ title }/>
        <meta name="og:description" content={ pageDescription }/>

        {
          imageFullUrl && (
            <meta name="og:image" content={ imageFullUrl }/>
          )
        }
      </Head>
      <nav>
        <Navbar/>
      </nav>

      <main style={{
        padding:'1rem 9%'
      }}>
        {children}
      </main>

      <footer>
        {}
      </footer>
    </>
  )
}