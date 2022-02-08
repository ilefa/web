import MdiIcon from '@mdi/react';
import styles from '../components/styling/home.module.css';
import workStyles from '../components/styling/work.module.css';

import { useLocalStorage } from '../hooks';
import { useEffect, useState } from 'react';

import {
    Footer,
    IconCardGlyph,
    Nav,
    Technologies,
    WorkCard
} from '../components';

import {
    mdiHammerWrench,
    mdiLeaf,
    mdiPuzzle,
    mdiSchool,
    mdiStarThreePointsOutline,
    mdiTableClock,
    mdiVectorUnion
} from '@mdi/js';

export type ThemeMode = 'colorful' | 'dark';

const FALLBACK_ACRONYMS = [
    'Ivy League Educated Financial Advisors',
    'Intricate Legendary Economists of Financial Agencies',
    'Intellectual Liquidation Earned by Finding Annuity',
    'ILEFA Loves Economic Forecasting Arbitrage'
];

type PartialProject = {
    key: string;
    headerText: string;
    archived?: boolean;
    description: string;
    icon?: JSX.Element;
    link?: string;
    tech: any[];
}

const PROJECTS: PartialProject[] = [
    {
        key: 'cobalt',
        headerText: 'Cobalt',
        description: 'A suite of better course tools built by UConn students, for UConn students.',
        icon: <MdiIcon path={mdiVectorUnion} size="19px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://cobalt.ilefa.club',
        tech: [
            Technologies.TS,
            Technologies.NEXT
        ]
    },
    {
        key: 'snapshots',
        headerText: 'Snapshots',
        description: 'The definitive collection of semester-wise data pertaining to UConn.',
        icon: <MdiIcon path={mdiTableClock} size="19px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://snapshots.ilefa.club',
        tech: [
            Technologies.TS,
            Technologies.NEXT
        ]
    },
    {
        key: 'foundary',
        headerText: 'Foundary',
        description: 'A hyper-customizable task runner equipped for containerized workloads - coming soon.',
        icon: <MdiIcon path={mdiStarThreePointsOutline} size="19px" className={`${styles.workCardIcon} fa-fw`} />,
        // link: 'https://foundary.ilefa.club',
        tech: [
            Technologies.TS,
            Technologies.REDIS
        ]
    },
    {
        key: 'husky',
        headerText: 'Husky',
        description: 'A useful collection of utilities pertaining to various UConn services.',
        icon: <MdiIcon path={mdiSchool} size="19px" className={`${styles.workCardIcon} fa-fw mr-2`} />,
        link: 'https://github.com/ilefa/husky',
        tech: [
            Technologies.TS
        ]
    },
    {
        key: 'ivy',
        headerText: 'Ivy',
        description: 'A versatile Discord.js-based TypeScript framework for building Discord bots.',
        icon: <MdiIcon path={mdiLeaf} size="19px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/ilefa/ivy',
        tech: [
            Technologies.TS,
            Technologies.REDIS
        ]
    },
    {
        key: 'common',
        headerText: 'Common',
        description: 'A comprehensive set of various utilities that make writing TypeScript projects easier.',
        icon: <MdiIcon path={mdiHammerWrench} size="19px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/ilefa/common',
        tech: [
            Technologies.TS
        ]
    },
    {
        key: 'donthelpme',
        headerText: 'donthelpme',
        description: 'A simple Firefox extension that removes the pesky help button that overlaps test cases in Mimir.',
        icon: <MdiIcon path={mdiPuzzle} size="19px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/ilefa/donthelpme',
        tech: [
            Technologies.JS
        ]
    }
]

const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const HomePage = () => {
    const [storedTheme, setStoredTheme] = useLocalStorage<ThemeMode>('theme', 'colorful');
    const [currentTheme, setCurrentTheme] = useState<ThemeMode>(null as any);

    const themeToggler = () => storedTheme === 'colorful'
        ? setStoredTheme('dark')
        : setStoredTheme('colorful');

    useEffect(() => setCurrentTheme(storedTheme), [storedTheme]);

    return (
        <main>
            <Nav theme={currentTheme} themeToggler={themeToggler} />
            <div className={`position-relative background-gradient-${currentTheme}`}>
                <div className="section section-hero section-shaped background-circuits">
                    <div className="shape shape-style-3 shape-default"></div>
                        <div className={styles.pageHeader}>
                            <div className="container shape-container d-flex align-items-center py-lg">
                                <div className="col px-0">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 text-center">
                                            <h1 className={`${styles.nameTitle} text-white display-1`}>ILEFA Labs</h1>
                                            <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
                                                { random(FALLBACK_ACRONYMS) }
                                            </h2>
                                            <div className="btn-wrapper mt-4">
                                            <a href="https://github.com/ilefa" className="btn btn-dark bg-ilefa-dark btn-icon mt-3 mb-sm-0 shine text-lowercase">
                                                <span className="btn-inner--icon"><i className="fab fa-github"></i></span>
                                                <span className="btn-inner--text">Visit us on GitHub</span>
                                            </a>
                                            {/* <a href="https://ape.ilefa.club" className="btn btn-primary mt-3 mb-sm-0 shine">
                                                <i className="fab fa-discord"></i>
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={`section section-lg ${styles.sectionSeparator} background-circuits`}>
                    <div className="container" id="body">
                        <IconCardGlyph 
                                title="A little about us"
                                icon="fa fa-user-astronaut"
                                glyph={'/stonk.svg'}
                                className={styles.aboutUsCardFix}
                                content={
                                    <p>
                                        We are ILEFA - what started as a couple of college freshman interested in the stonk market has become a strong development group focused on creating software that connects people.
                                    </p>
                                }
                            />
                            <div className="mt-7">
                                <h4 className={`text-white ${styles.workTitle}`}>
                                    <i className="fa fa-briefcase fa-fw"></i> Our Work
                                    <br/><span className={`text-white ${styles.workTagline}`}>These are a handful of projects we've worked on</span>
                                </h4>
                            </div>
                            <div className="row-grid align-items-center row">
                                <div className={`card-deck ${workStyles.cardDeckFlex} ${workStyles.cardDeckTop}`}>
                                    {
                                        PROJECTS.map(project => (
                                            <WorkCard
                                                icon={project.icon}
                                                key={project.key}
                                                headerText={project.headerText}
                                                headerColor={'text-primary-light'}
                                                archived={project.archived}
                                                description={project.description}
                                                link={project.link}
                                                tech={project.tech}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                    </div>
                </section>
                <Footer className="background-circuits" white />
            </div>
        </main>
    );
}

export default HomePage;
