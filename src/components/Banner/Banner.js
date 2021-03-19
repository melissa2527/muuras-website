import React, {useEffect} from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import styles from './Banner.module.css';

const Banner = () => {

        

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.text} data-aos='fade-right'>
                    <h1 className={styles.title}>Muuras</h1>
                    <h3 className={styles.subTitle}>A natural solution for urban wastewater</h3>
                </div>
            </div>
            {/* <Link to={Swamp}>
                <button id='hero-btn'>Find Out More...</button>
            </Link> */}
        </div>
    )
}

export default Banner;