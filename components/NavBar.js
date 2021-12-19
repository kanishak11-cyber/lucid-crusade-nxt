import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'
import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import logo from '/images/logo.png';
import Dashboard from '../components/Dashboard';
export default function Navbar() {
    const { logout } = useMoralis();
    return (
        <Nav className="bg-black ">
            <div className="flex flex-row ">
                {/* mx-auto hidden */}
                <div className='relative m-0 h-24 w-24'>
                    <Link href='/'>
                        <Image
                            layout='fill'
                            className='object-contain'
                            src={logo}
                        />
                    </Link>
                </div>
                <div className="mx-auto my-auto space-x-1">
                    <div>
                        <Link href='/dashboard'>
                            <Button className="bg-green-300  text-center p-2 rounded-lg  "><Dashboard/></Button>
                        </Link>
                        <Link href='/donate'>
                            <Button className="bg-green-300  text-center p-2 rounded-lg  ">Donate</Button>
                        </Link>
                        <Link href='/event'>
                            <Button className="bg-green-300  text-center p-2 rounded-lg  ">Event</Button>
                        </Link>
                        <Link href='/balance'>
                            <Button className="bg-green-300  text-center p-2 rounded-lg  ">Balance</Button>
                        </Link>
                        <Button className='bg-yellow-500 rounded-lg p-2 font-bold animate-pulse ' onClick={logout}>
                            logout
                        </Button>
                    </div>
                </div>
            </div>
        </Nav>
    )
}