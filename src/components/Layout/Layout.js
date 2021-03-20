import React from 'react'
import Head from 'next/head';
import styles from './Layout.module.css';
import Footer from '../footer/Footer';
import Meta from '../Meta';

const Layout = ({children}) => {
    return (
        <div className={styles.container} style={{'overflowX': 'hidden'}}>
            <Head>
                {/* <Meta /> */}
                {/* <title>{title}</title> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}></header>

            <main className={styles.main}>
                {children}
            </main>

            <Footer className={styles.footer} title='Muuras 2021' />
        </div>
    )
}

export default Layout;