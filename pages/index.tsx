import MdiIcon from '@mdi/react';
import styles from '../components/styling/home.module.css';

import {
    FeaturedWorkCard,
    Footer,
    Nav,
    Tagline,
    WorkCard,
    WorkCardProps
} from '../components';

import {
    mdiAccountMultiple,
    mdiCalendar,
    mdiChartTimelineVariant,
    mdiHumanGreetingProximity,
    mdiLeaf,
    mdiLogin,
    mdiSchool,
    mdiTableClock,
    mdiVectorUnion
} from '@mdi/js';

type EnumerableProject = WorkCardProps & {
    key: string;
}

const PROJECTS: EnumerableProject[] = [
    {
        key: 'uconn-wtf',
        title: 'uconn.wtf',
        description: 'Professor and course ratings made for UConn — coming soon.',
        containerStyle: styles.rowCardTopSpacing,
        icon: <MdiIcon path={mdiHumanGreetingProximity} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: '#',
        hideExtraLink: true
    },
    {
        key: 'snapshots',
        title: 'Snapshots',
        description: 'The definitive collection of semester-wise data pertaining to UConn.',
        containerStyle: styles.rowCardSpacing,
        icon: <MdiIcon path={mdiTableClock} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://snapshots.ilefa.club',
        hideExtraLink: true
    },
    {
        key: 'husky',
        title: 'Husky',
        description: 'A useful collection of utilities pertaining to various UConn services.',
        containerStyle: 'mr--1 mt-2',
        icon: <MdiIcon path={mdiSchool} size="21px" className={`${styles.workCardIcon} fa-fw mr-2`} />,
        link: 'https://github.com/ilefa/husky',
    },
    {
        key: 'ivy',
        title: 'Ivy',
        description: 'A versatile Discord.js-based TypeScript framework for building Discord bots.',
        containerStyle: 'ml--3 mt-2',
        icon: <MdiIcon path={mdiLeaf} size="21px" className={`${styles.workCardIcon} fa-fw`} />,
        link: 'https://github.com/ilefa/ivy',
    },
    {
        key: 'passport-uconn',
        title: 'UConn SSO Strategy',
        description: 'A Passport.js authentication strategy allowing integrations with UConn SSO.',
        containerStyle: 'ml--3 mr--1 mt-2',
        icon: <MdiIcon path={mdiLogin} size="21px" className={`${styles.workCardIcon} fa-fw mr-2`} />,
        link: 'https://github.com/ilefa/passport-uconn',
    }
]

const HomePage = () => (
    <main>
        <Nav />
        <div className="position-relative">
            <div className="section section-hero section-shaped background-storrs">
                <div className="shape shape-style-3 shape-default"></div>
                <div className={styles.pageHeader}>
                    <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <img src="/logo.svg" width={150} height={150} />
                                    <Tagline />
                                    <div className="btn-wrapper mt-4">
                                        <a href="https://github.com/ilefa" className="btn btn-dark bg-ilefa-dark btn-icon mt-3 mb-sm-0 shine text-lowercase">
                                            <span className="btn-inner--icon"><i className="fab fa-github"></i></span>
                                            <span className="btn-inner--text">Visit us on GitHub</span>
                                        </a>
                                        <a href="https://discord.gg/UmVE5VJWsp" className="btn btn-dark bg-ilefa-dark btn-icon mt-3 mb-sm-0 shine text-lowercase">
                                            <span className="btn-inner--icon"><i className="fab fa-discord"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={`section section-lg ${styles.sectionSeparator} background-storrs`}>
                <div className="container" id="body">
                    <h4 className={`text-white ${styles.workTitle}`}>
                        <i className="fas fa-people-arrows-left-right fa-fw"></i> You might have heard of us
                        <br /><span className={`text-white ${styles.workTagline}`}>
                            We are a development organization dedicated to creating software to help students succeed by creating insightful websites, tools, and developer-friendly libraries.
                        </span>
                    </h4>
                    <div className="row">
                        <div className="col-md-8 align-items-stretch">
                            <FeaturedWorkCard
                                title="Cobalt"
                                link="https://cobalt.lol"
                                icon={<MdiIcon path={mdiVectorUnion} size="22px" className={`${styles.featuredWorkCardIcon} fa-fw`} />}
                                description={
                                    <p>
                                        Cobalt is a centralized hub for all things UConn. It provides ease-of-access to a variety of services including searching courses, professor ratings, dining hall menus, room schedules, recreation center occupancy insights, residence hall imagery, and a whole lot more.
                                    </p>
                                }
                                tracking={
                                    <div className="mt-3">
                                        <p>
                                            Currently tracking <b>8,045 courses</b>, <b>4,019 professors</b>, <b>323 classrooms</b>, and more across all of UConn's campuses.
                                        </p>
                                    </div>
                                }
                                attributeStyles={styles.cobaltBoxSpacing}
                                attributes={[
                                    {
                                        name: 'Unique Visitors',
                                        value: '30K+',
                                        icon: <MdiIcon path={mdiAccountMultiple} size="17px" className="fa-fw vaTextTop" />
                                    },
                                    {
                                        name: 'Monthly Views',
                                        value: '80K+',
                                        icon: <MdiIcon path={mdiCalendar} size="17px" className="fa-fw vaTextTop" />
                                    },
                                    {
                                        name: 'Lifetime Views',
                                        value: '1M+',
                                        icon: <MdiIcon path={mdiChartTimelineVariant} size="17px" className="fa-fw vaTextTop" />
                                    }
                                ]}
                            />
                        </div>

                        <div className="col-md-4 ml--3 align-items-stretch">
                            <WorkCard {...PROJECTS[0]} />
                            <WorkCard {...PROJECTS[1]} />
                        </div>

                        {
                            PROJECTS.slice(2).map(project => (
                                <div className="col-md-4" key={project.key}>
                                    <WorkCard {...project} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer className="bg-dark" white />
        </div>
    </main>
)

export default HomePage;
