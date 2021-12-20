import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

import Navbar from '../components/Navbar';
 
export default function Home() {
  const {isAuthenticated,logout} = useMoralis();
  // const {logout} = useMoralis();
  // const isAuthenticated = true;
  if(!isAuthenticated) {return <Login />}
  return (
    <div className="h-screen">
      <Head>
        <title>metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Main> */}
      {/* <Navbar/> */}
   <h1>welcome</h1>
   <button link="/Balance" >transaction</button><br/>
   <button onClick={logout}>Logout</button>
      {/* </Main> */}
    </div>
  )
}