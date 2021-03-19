import React from 'react';
import styles from './SwampSection.module.css';

const SwampSection = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}></h2>
            <div className={styles.section}>
                <div className={styles.text}>
                    <p>Muuras develops green vertical wetland filters that can provide a range of environmental benefits.</p>

                    <div className={styles.btnContainer}>
                        <button className={styles.btn}>Learn More</button>
                    </div>
                    
                    <div className={styles.image}>
                        <img src='./img/muuras-building.jpg' alt='Muuras building'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwampSection