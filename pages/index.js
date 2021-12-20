import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
// import Slideshow from '../components/Slideshow';
 
export default function Home() {
  const {isAuthenticated,logout} = useMoralis();
  // const {logout} = useMoralis();
  // const isAuthenticated = true;
  if(!isAuthenticated) {return <Login />}
  return (
    <div className="h-screen bg-black">
      <Head>
        <title>Lucid Crusade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {/* <Slideshow/> */}
      <Footer/>
    </div>
  )
}