import React, { useEffect, useState } from 'react';
import Header from './Header'
import Feed from './Feed'


interface LayoutProps {
    children: React.ReactNode
}

const styles = {
    container: 'min-h-screen mx-auto bg-gray-700',
    header: 'fixed top-0 left-0 right-0 z-50 duration-500',
    headerHidden: '-translate-y-full duration-500',
    feed: '',
}

export default function Layout({ children }: LayoutProps) {

    // Hide Header on Scroll
    // const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.pageYOffset;
    //         setIsHeaderHidden(scrollTop > 0);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className={styles.container}>
            {/* < className={`${styles.header} ${isHeaderHidden ? styles.headerHidden : ''}`}> */}
            <div className={styles.header}>
                < Header />
            </div>
            <div className={styles.feed}>
                <Feed />
            </div>


            {children}
        </div>
    )
}

