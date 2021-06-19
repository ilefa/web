import styles from '../components/styling/home.module.css';
import workStyles from '../components/styling/work.module.css';

import { useTagline } from '../hooks';

import {
    Footer,
    IconCardGlyph,
    Nav,
    Technologies,
    WorkCard
} from '../components';

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
    link?: string;
    tech: any[];
}

const PROJECTS: PartialProject[] = [
    {
        key: 'ivy',
        headerText: 'Ivy',
        description: 'A versatile Discord.js-based TypeScript framework for building Discord bots.',
        link: 'https://github.com/ilefa/ivy',
        tech: [
            Technologies.TS,
            Technologies.REDIS,
            Technologies.FIREBASE
        ]
    },
    {
        key: 'husky',
        headerText: 'Husky',
        description: 'A useful collection of utilities pertaining to various UConn services.',
        link: 'https://github.com/ilefa/husky',
        tech: [
            Technologies.TS
        ]
    },
    {
        key: 'cobalt',
        headerText: 'Cobalt',
        description: 'A suite of better course tools built by UConn students, for UConn students.',
        link: 'https://cobalt.ilefa.club',
        tech: [
            Technologies.TS,
            Technologies.NEXT
        ]
    },
    {
        key: 'donthelpme',
        headerText: 'donthelpme',
        description: 'A simple Firefox extension that removes the pesky help button that overlaps test cases in Mimir.',
        link: 'https://github.com/ilefa/donthelpme',
        tech: [
            Technologies.JS
        ]
    }
]

const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const HomePage = () => {
    const { data, isLoading, isError, regenerate } = useTagline();
    return (
        <main>
            <Nav/>
            <div className={`position-relative background-gradient`}>
                <div className="section section-hero section-shaped background-circuits">
                    <div className="shape shape-style-3 shape-default"></div>
                    <div className={styles.pageHeader}>
                        <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h1 className={`${styles.nameTitle} text-white display-1`}>ILEFA Labs</h1>
                                {
                                    isLoading && (
                                        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
                                            <i className="fa fa-spinner fa-spin fa-fw"></i>
                                        </h2>
                                    )
                                }
                                {
                                    isError && (
                                        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
                                            { random(FALLBACK_ACRONYMS) }
                                        </h2>
                                    )
                                }
                                {
                                    !!data && (
                                        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase shine cursor`} onClick={regenerate}>
                                            { data!.tagline }
                                        </h2>
                                    )
                                }
                                <div className="btn-wrapper mt-4">
                                <a href="https://github.com/ilefa" className="btn btn-dark btn-icon mt-3 mb-sm-0 text-lowercase">
                                    <span className="btn-inner--icon"><i className="fab fa-github"></i></span>
                                    <span className="btn-inner--text">Visit us on GitHub</span>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <section className={`section section-lg ${styles.sectionSeperator} background-circuits`}>
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
                                                key={project.key}
                                                useIcon={false}
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
                <Footer white={true} />
            </div>
        </main>
    );
}

export default HomePage;
