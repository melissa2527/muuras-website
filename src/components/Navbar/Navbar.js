import React, {useState, useEffect} from 'react';
import navStyles from './Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {setClicked(!clicked)};
    const closeMenuMobile = () => setClicked(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    // window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={navStyles.nav}>
                <div className={navStyles.container}>
                    <Link href='/' className={navStyles.navLogo} onClick={closeMenuMobile}>
                        <img src='img/muuras.png' alt='Muuras' height={50}/>
                    </Link>
                    <div className={navStyles.navMenu} onClick={handleClick}>
                        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={clicked ? 'navMenu active' : 'navMenu'}>
                        <li className={navStyles.navItem}>
                            <Link href='/' className={navStyles.link} onClick={closeMenuMobile}>
                                Home
                            </Link>
                        </li>
                        <li className={navStyles.navItem}>
                            <Link href='/what-we-do' className={navStyles.link} onClick={closeMenuMobile}>
                                What We Do
                            </Link>
                        </li>
                        <li className={navStyles.navItem}>
                            <Link href='/team' className={navStyles.link} onClick={closeMenuMobile}>
                                Our Team
                            </Link>
                        </li>
                    </ul>
                    {button ? <button>
                        <Link href='/contact' className={navStyles.contactBtn}>
                            Contact
                        </Link>
                    </button> : null}
                </div>
            </nav>
        </>
    )
}

export default Navbar