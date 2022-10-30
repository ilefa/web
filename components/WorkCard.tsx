import styles from './styling/work.module.css';
import cardStyles from './styling/card.module.css';

import { Badge } from 'reactstrap';

export const Technologies = [
    {
        JAVA: {
            name: 'Java',
            icon: 'mdi mdi-language-java',
            color: 'warning'
        },
        JS: {
            name: 'JavaScript',
            icon: 'mdi mdi-language-javascript',
            color: 'yellow'
        },
        TS: {
            name: 'TypeScript',
            icon: 'mdi mdi-language-typescript',
            color: 'blue'
        },
        NEXT: {
            name: 'NextJS',
            icon: 'mdi mdi-react',
            color: 'darker'
        },
        REACT: {
            name: 'React',
            icon: 'mdi mdi-react',
            color: 'info'
        },
        REACT_NATIVE: {
            name: 'React Native',
            icon: 'mdi mdi-react',
            color: 'info'
        },
        SQL: {
            name: 'SQL',
            icon: 'mdi mdi-database',
            color: 'warp'
        },
        REDIS: {
            name: 'Redis',
            icon: 'mdi mdi-layers',
            color: 'red'
        },
        FIREBASE: {
            name: 'Firebase',
            icon: 'mdi mdi-firebase',
            color: 'warning'
        }
    }
][0];

// For git repositories, return a [user/repoName] formatted string.
const repositoryKeywords = (link: string) => {
    if (!link.startsWith('https://github.com/')
            && !link.startsWith('https://gitlab.com/')
            && !link.startsWith('https://bitbucket.org/'))
        return link;

    return link.split(/(http|https):\/\/(github|gitlab|bitbucket).(com|org)/)[4].substring(1);
};

const getIconForLink = (link: string) => {
    if (link.startsWith('https://gitlab.com')) return 'fab fa-gitlab';
    if (link.startsWith('https://bitbucket.org')) return 'fab fa-bitbucket';
    if (!link.startsWith('https://github.com')) return 'fa fa-globe-americas';

    return 'fab fa-github';
}

export interface WorkCardProps {
    icon?: JSX.Element;
    iconColor?: string;
    headerText?: string;
    headerColor?: string;
    archived?: boolean;
    description?: string;
    link?: string;
    tech?: any[];
}

export const WorkCard: React.FC<WorkCardProps> = props => {
    let icon = props.icon;
    let headerText = props.headerText || 'Generic Project';
    let headerColor = props.headerColor || 'text-primary';
    let archived = props.archived === undefined ? false : props.archived;
    let description = props.description || 'Generic Project Information';
    let link = props.link || 'no-link-provided';
    let tech = props.tech || [{
        name: 'Generic Technology',
        icon: 'fa fa-exclamation-triangle',
        color: 'warning'
    }];

    if (archived) {
        headerColor = 'text-red';
        headerText = headerText + ' (Archived)'
    }

    return (
        <div className={`card shadow shadow-lg--hover mt-5 ${cardStyles.rgCardSm}`}>
            <div className="card-body">
                <div className="d-flex">
                    <div>
                        {
                            link !== 'no-link-provided' && (
                                <h5>
                                    <a
                                        href={link}
                                        className={`${cardStyles.cardSectionTitle} ${headerColor}`}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            {icon ?? ''}{headerText}
                                    </a>
                                </h5>
                            )
                        }

                        {
                            link === 'no-link-provided' && (
                                <h5>
                                    <span className={`${cardStyles.cardSectionTitle} ${headerColor} cursor-pointer`}>
                                        {icon ?? ''}{headerText}
                                    </span>
                                </h5>
                            )
                        }

                        {description}

                        {
                            link !== 'no-link-provided' && (
                                <div className={styles.projectCardLink}>
                                    <a 
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-dark btn-sm text-lowercase shine">
                                            <i className={`${getIconForLink(link)} fa-fw`}></i> {repositoryKeywords(link)}
                                    </a>
                                </div>
                            )
                        }
                        {
                            link === 'no-link-provided' && (
                                <div className={styles.projectCardLink}>
                                    <a 
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-red btn-sm text-lowercase shine">
                                            <i className="fa fa-times-circle fa-fw"></i> no links available
                                    </a>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="card-footer">
                {
                    tech.map(element => 
                        <Badge color={element.color} key={element.name} className={styles.technologyBadge}>
                            <i className={element.icon + ' fa-fw mr-1' + styles.projectCardIcon}></i> {element.name} 
                        </Badge>
                    )
                }
            </div>
        </div>
    )
}