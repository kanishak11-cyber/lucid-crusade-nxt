import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import { Main } from 'next/document';
import Navbar from '../components/NavBar';

export default function Home() {
  // const {isAuthenticated,logout} = useMoralis();
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
      <Navbar/>
      {/* </Main> */}
    </div>
  )
}