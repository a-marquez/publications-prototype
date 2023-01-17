import Head from 'next/head'
import Paper from '@mui/material/Paper'
import Counter from '../components/Counter'
import Greeter from '../components/Greeter'

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-template</title>
        <meta name="description" content="nextjs-template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col w-full h-full justify-evenly items-center'>
        <section>
          <h2><b>nextjs-template</b></h2>
          <div>stack:</div>
          <ul>
            <li>typescript</li>
            <li>nextjs + react</li>
            <li>material ui (uses emotion by default)</li>
            <li>tailwind css (css utilities)</li>
            <li>zustand + immer (state management)</li>
          </ul>
        </section>
        
        <Paper className='p-4' elevation={5}>
          <section className='pb-10'>
            <b>Counter</b> 
            <Counter />
          </section>

          <section>
            <b>Greeter</b>
            <Greeter />
          </section>
        </Paper>
      </main>
    </>
  )
}
