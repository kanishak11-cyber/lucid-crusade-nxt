import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import { Main } from 'next/document';

export default function Home() {
  const {logout} = useMoralis();
  const isAuthenticated = true;
  if(!isAuthenticated) {return <Login />}
  return (
    <div className="h-screen">
      <Head>
        <title>metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Main> */}
      <h1>kanishak</h1>
      <button onClick={logout}>logout</button>
      {/* </Main> */}
    </div>
  )
}