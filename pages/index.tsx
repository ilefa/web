import styles from '../components/styling/home.module.css';
import workStyles from '../components/styling/work.module.css';

import {
    Footer,
    IconCardGlyph,
    Nav,
    Technologies,
    WorkCard
} from '../components';

const ACRONYMS = [
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
            Technologies.REDIS
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
                            <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>{ random(ACRONYMS) }</h2>
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
                        title="We are ILEFA"
                        icon="fa fa-user-astronaut"
                        glyph={'/stonk.svg'}
                        className={styles.aboutUsCardFix}
                        content={
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus soluta vero cumque quidem rem officia blanditiis. Dignissimos ex assumenda explicabo! Laborum enim necessitatibus, perspiciatis accusamus excepturi illum consectetur esse tempore.
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
