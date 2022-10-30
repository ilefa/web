import styles from '../components/styling/home.module.css';

import { useTagline } from '../hooks';

const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const FALLBACK_ACRONYMS = [
    'Ivy League Educated Financial Advisors',
    'Intricate Legendary Economists of Financial Agencies',
    'Intellectual Liquidation Earned by Finding Annuity',
    'ILEFA Loves Economic Forecasting Arbitrage'
];

export const Tagline: React.FC = () => {
    const { data, loading, error } = useTagline();

    if (loading) return (
        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
            <i className="fa fa-spinner fa-spin fa-fw"></i>
        </h2>
    )

    if (error) return (
        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
            { random(FALLBACK_ACRONYMS) }
        </h2>
    )

    return (
        <h2 className={`${styles.tagline} display-4 font-weight-normal text-white text-lowercase`}>
            { data!.tagline }
        </h2>
    )
}