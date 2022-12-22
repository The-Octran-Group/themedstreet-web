import Head from 'next/head'

function Seo({ title, description, robots }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
            <meta name="robots" content={robots} />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="MedStreet" />
        </Head>
    )
}

Seo.defaultProps = {
    title: 'Unknown Page | MedStreet',
    description: "MedStreet is India's No.1 Health & Medicine Interface, "
    + "that connects patients with doctors, clinics, and hospitals, using the Unified Health Interface. "
    + "MedStreet is a one-stop solution for all your health needs, including booking physical appointments & "
    + "teleconsultations, online pharmacy, blood donation, lab bookings, ambulance services, and more. "
    + "Visit https://uhi.abdm.gov.in/ for more information about the Unified Health Interface.",
    robots: 'noindex, nofollow'
}

export default Seo