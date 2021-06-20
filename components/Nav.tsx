import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styling/nav.module.css';

import { useState } from 'react';
import { Navbar, UncontrolledCollapse } from 'reactstrap';

const elements = [
    {
        name: 'home',
        icon: 'fa fa-home',
        href: '/',
        key: 'home'
    },
    // {
    //     name: 'projects',
    //     icon: 'fa fa-layer-group',
    //     href: '/projects',
    //     key: 'projects'
    // }
];

export const Nav = () => {
    const [classes, setClasses] = useState('');
    const onExiting = () => setClasses('collapsing-out');
    const onExited = () => setClasses('');

    return (
        <header className="header-global">
            <Navbar className="navbar-main navbar-transparent navbar-light" expand="lg">
                <div className="container">
                    <Link href="/">
                        <a className={`mr-lg-1 navbar-brand ${styles.navBrandText}`}>
                            <Image
                                src="/logo.png"
                                alt="ILEFA Labs"
                                width={400}
                                height={400}
                                className={`img img-fluid ${styles.navBrandImg}`}
                            />
                        </a>
                    </Link>
                    <button className="navbar-toggler" id="navbar_global">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse
                        toggler="#navbar_global"
                        navbar
                        className={classes}
                        onExiting={onExiting}
                        onExited={onExited}
                    >
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <Link href="/">
                                    <a className={`navbar-collapse-title text-success ${styles.navBrandMobileText}`}>
                                        ILEFA Labs
                                    </a>
                                    </Link>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button className={`navbar-toggler ${styles.navBrandMobileCloser}`} id="navbar_global">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                            {
                                elements.map(element => 
                                    <li className="nav-item" key={element.key}>
                                        <Link href={element.href}>
                                            <a className={`nav-link ${styles.navLink}`}>
                                                <i className={`${element.icon} fa-fw`}></i> {/*element.name ?? ''*/}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </UncontrolledCollapse>
                </div>
            </Navbar>
        </header>
    );
}