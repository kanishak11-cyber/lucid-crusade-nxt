import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/images/logo.png'

import { useMoralis } from 'react-moralis';
// import * as routes from '../../constants/routes';
// import SignOutButton from '../SignOut';

const Navigation = () => {
    const { logout } = useMoralis();
    return (
        <div className='p-3 justify-between bg-black flex '>
            <ul className='flex items-center justify-center space-x-2'>
                <div className='relative h-24 w-24  lg:inline-grid'>
                    <Link href='/'>
                        <Image

                            className='object-fit'
                            src={logo}
                            width={100}
                            height={100}
                            layout='fill'
                            
                            alt=''
                        />
                    </Link>
                </div>
                


                <li className='m-0'>
                    <Link href='/'>
                        <a className='bg-yellow-500 rounded-lg p-3 font-bold '>Dashboard</a>
                    </Link>
                </li>
                <li className='m-0'>
                    <Link href='/'>
                        <a className='bg-yellow-500 rounded-lg p-3 font-bold '>Dashboard</a>
                    </Link>
                </li>
                <li className='m-0'>
                    <Link href='/'>
                        <a className='bg-yellow-500 rounded-lg p-3 font-bold '>Dashboard</a>
                    </Link>
                </li>
                <li className='m-0'>
                    <Link href='/about'>
                        <a className='bg-yellow-500 rounded-lg p-3 font-bold'>wallet</a>
                    </Link>
                </li>
                <li className='justify-between '>
                    <button className='bg-yellow-500 rounded-lg p-3 font-bold animate-pulse' onClick={logout}>
                        logout
                    </button>
                </li>

            </ul>
        </div>
    )
}
export default Navigation