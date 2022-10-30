import styles from './styling/home.module.css';

import { useTagline } from '../hooks';

const FALLBACK_ACRONYMS = [
    'Ivy League Educated Financial Advisors',
    'Intricate Legendary Economists of Financial Agencies',
    'Intellectual Liquidation Earned by Finding Annuity',
    'ILEFA Loves Economic Forecasting Arbitrage'
];

const random = () => FALLBACK_ACRONYMS[Math.floor(Math.random() * FALLBACK_ACRONYMS.length)];

export const Tagline: React.FC = () => {
    const { tagline, loading, error } = useTagline();

    if (loading) return (
        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
            <i className="fa fa-spinner fa-spin fa-fw"></i>
        </h2>
    );
    
    if (error) return (
        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
            { random() }
        </h2>
    )

    return (
        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase shine cursor`}>
            { tagline }
        </h2>
    )
}