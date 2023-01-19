import React from 'react'
import Head from 'next/head'

import useUIStore from '../stores/useUIStore'
import Debug from '../components/Debug'
import SearchResult from '../components/SearchResult'
import SearchHeader from '../components/SearchHeader'
import MockFilters from '../components/MockFilters'
import SearchPagination from '../components/SearchPagination'

export default function Home() {
  const filtersWidth = 300
  const { filtersSticky, filtersCount, searchCount, searchBound, paginationTypeA } = useUIStore(state => state)

  return (
    <>
      <Head>
        <title>nextjs-template</title>
        <meta name="description" content="nextjs-template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Debug />


      <section className='flex flex-col w-full justify-evenly min-h-screen'>

        <header className='px-8'>
          <h1>Header</h1>
        </header>

        <section className='bg-primary text-white px-8'>
          <h2>SubHeader</h2>
        </section>

        <main className='grow flex'>
          <aside
            className={`p-4 shrink-0 ${filtersSticky == true ? 'sticky self-start top-0' : ''}`}
            style={{ width: filtersWidth }}
          >
            <MockFilters count={filtersCount} />
          </aside>
          <div className='flex flex-col grow relative overflow-auto pr-4'>
            {searchBound === false ? <SearchHeader /> : ''}
            <div className={`${searchBound === true ? 'absolute w-full' : ''}`}>
              {searchBound === true ? <SearchHeader /> : ''}
              {paginationTypeA === false && <SearchPagination />}
              <div className='p-4 flex flex-col gap-10'>
                {searchCount == 0 && <div>No results found.</div>}
                { Array(searchCount).fill(0).map((value, index) => <SearchResult key={index} title={`Search Result ${index + 1}`} />)}
              </div>
              {(paginationTypeA === false && searchCount > 0) && <SearchPagination />}
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
