import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import chattorro from '../assets/chattorro.svg';
import ActiveLink from '../components/ActiveLink';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const [getStarted, setGetStarted] = useState(false);

  const authentication = (e) => {
    e.preventDefault();
    setGetStarted(true);
  };

  useEffect(() => {
    if (router.query.from) {
      setGetStarted(true);
    }
  }, [router.query]);

  return (
    <div className='py-0 px-8'>
      <Head>
        <title>Chattorro App</title>
        <meta name='description' content='Video Chat App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen py-16 px-0 flex flex-col justify-center items-center basis-0 grow shrink'>
        <Image src={chattorro} alt={chattorro} width={200} height={200} />
        <h1 className='font-caveat text-5xl bold'>Chattorro App.</h1>
        <br />
        {getStarted ? (
          <>
            <div className='flex gap-x-5'>
              <div className='rounded-md shadow'>
                <ActiveLink href='login'>Login</ActiveLink>
              </div>

              <div className='rounded-md shadow'>
                <ActiveLink href='register'>Register</ActiveLink>
              </div>
            </div>
          </>
        ) : (
          <div className='rounded-md shadow' onClick={authentication}>
            <a
              href=''
              className='flex w-full items-center font-bold tracking-wide bg-stone-900 text-yellow-500 hover:bg-stone-800 justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg'
            >
              Get Started
            </a>
          </div>
        )}
      </main>

      <footer></footer>
    </div>
  );
}
