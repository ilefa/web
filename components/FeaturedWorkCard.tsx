import styles from './styling/work.module.css';
import cardStyles from './styling/card.module.css';

import { Badge } from 'reactstrap';

const repositoryKeywords = (link: string) => {
    if (!link.startsWith('https://github.com/')
            && !link.startsWith('https://gitlab.com/')
            && !link.startsWith('https://bitbucket.org/'))
        return link.split('https://')[1];

    return link.split(/(http|https):\/\/(github|gitlab|bitbucket).(com|org)/)[4].substring(1);
};

const getIconForLink = (link: string) => {
    if (link.startsWith('https://gitlab.com')) return 'fab fa-gitlab';
    if (link.startsWith('https://bitbucket.org')) return 'fab fa-bitbucket';
    if (!link.startsWith('https://github.com')) return 'fa fa-globe-americas';

    return 'fab fa-github';
}

export interface FeaturedWorkCardProps {
    icon: JSX.Element;
    title: string;
    titleColor?: string;
    description: JSX.Element | string;
    attributes: Attribute[];
    attributeStyles?: string;
    tracking?: JSX.Element;
    link?: string;
    hideExtraLink?: boolean;
}

export type Attribute = {
    name: string;
    value: string;
    icon: JSX.Element;
    color?: string;
}

export const FeaturedWorkCard: React.FC<FeaturedWorkCardProps> = ({
    icon, title, titleColor, description, attributes, attributeStyles, tracking, link, hideExtraLink
}) => {
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
                                        className={`${cardStyles.cardSectionTitle} ${titleColor ?? 'text-primary'} shine`}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            {icon ?? ''}{title}
                                    </a>
                                </h5>
                            )
                        }

                        {
                            link === 'no-link-provided' && (
                                <h5>
                                    <span className={`${cardStyles.cardSectionTitle} ${titleColor} cursor-pointer`}>
                                        {icon ?? ''}{title}
                                    </span>
                                </h5>
                            )
                        }

                        <div className="mt-3">
                            {description}
                        </div>

                        {tracking}

                        {
                            !!attributes.length && (
                                <div className={attributeStyles ?? 'mt-4'}>
                                    {
                                        attributes.map((attribute, index) => (
                                            <Badge
                                                key={index}
                                                color={attribute.color ?? 'primary text-capitalize'}
                                                className="mr-1 badge-md">
                                                    <span className="vaMiddle">
                                                        {attribute.icon} {attribute.name}: <b>{attribute.value}</b>
                                                    </span>
                                            </Badge>
                                        ))
                                    }
                                </div>
                            )
                        }


                        {
                            !hideExtraLink && link && link !== 'no-link-provided' && (
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
                            !hideExtraLink && link === 'no-link-provided' && (
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
        </div>
    )
}