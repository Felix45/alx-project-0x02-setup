import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul className='flex space-x-4 mb-4'>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
