import React from 'react'
import Head from 'next/head'

import useUIStore from '../stores/useUIStore'
import Debug from '../components/Debug'
import SearchResult from '../components/SearchResult'
import ResultsHeader from '../components/ResultsHeader'
import MockFilters from '../components/MockFilters'

export default function Home() {
  const asideWidth = 250
  const filtersWidth = 300
  const { filtersSticky, publicationsCount, publicationsBound } = useUIStore(state => state)

  return (
    <>
      <Head>
        <title>nextjs-template</title>
        <meta name="description" content="nextjs-template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Debug />

      <aside style={{width: `${asideWidth}px`}} className='bg-secondary text-white'>
        <ul className='flex flex-col pt-10 gap-10 h-screen fixed'>
          <li>Page One</li>
          <li>Page Two</li>
          <li>Page Three</li>
          <li>Page Four</li>
          <li>Page Five</li>
          <li>Page Six</li>
        </ul>
      </aside>
      <section className='flex flex-col w-full justify-evenly min-h-screen'>
        <header className='px-8'>
          <h1>Header</h1>
        </header>
        <section className='bg-primary text-white px-8'>
          <h2>SubHeader</h2>
        </section>
        <main className='grow flex'>
          <aside
            className={`p-4 ${filtersSticky == true ? 'sticky self-start top-0' : ''}`}
            style={{ width: filtersWidth }}
          >
            <MockFilters count={10} />
          </aside>
          <div className='flex flex-col grow relative overflow-auto pr-4'>
            <ResultsHeader />
            <div className={`${publicationsBound === true ? 'absolute w-full' : ''}`}>
              <div className='p-4 flex flex-col gap-10'>
                { Array(publicationsCount).fill(0).map((value, index) => <SearchResult key={index} />)}
              </div>
            </div>
          </div>
        </main>
        <footer className='text-sm'>
          <div className='text-center p-3 border-solid border-0 border-t border-black-100'>Find out more info <a href="#">here at this link.</a></div>
          <div className='bg-black text-slate-100 p-3'>© 2023 Copyright Notice.</div>
        </footer>
      </section>
    </>
  )
}
