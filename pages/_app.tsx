import Head from 'next/head';

import type { AppProps } from 'next/app';

import '../components/styling/global.css';
import '../assets/vendor/nucleo/css/nucleo.css';
import '../assets/vendor/font-awesome/css/all.min.css';
import '../assets/scss/argon-design-system-react.scss';

import '@mdi/font/css/materialdesignicons.min.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>ILEFA Labs</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="ILEFA Labs" />
                <meta name="theme-color" content="#353b48" />
                <meta name="description" content="We are ILEFA - what started as a couple of college freshman interested in the stonk market has become a strong development group focused on creating software that connects people." />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ilefa.club/" />
                <meta property="og:title" content="ILEFA Labs" />
                <meta property="og:description" content="We are ILEFA - what started as a couple of college freshman interested in the stonk market has become a strong development group focused on creating software that connects people." />
                <meta property="og:image" content="/logo.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://ilefa.club/" />
                <meta property="twitter:title" content="ILEFA Labs" />
                <meta property="twitter:description" content="We are ILEFA - what started as a couple of college freshman interested in the stonk market has become a strong development group focused on creating software that connects people." />
                <meta property="twitter:image" content="/logo.png" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icons/logo192.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;