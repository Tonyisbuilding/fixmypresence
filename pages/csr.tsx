import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/layout';
import NavBar from '@/components/sections/nav-bar';

export default function CSRComingSoon() {
  return (
    <Layout>
      <Head>
        <title>CSR Commitment – Coming Soon | FixMyPresence</title>
        <meta
          name="description"
          content="Our CSR commitment page is coming soon. FixMyPresence's legal team is preparing the details."
        />
        <link rel="canonical" href="https://fixmypresence.com/csr" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fixmypresence.com/csr" />
        <meta property="og:title" content="CSR Commitment – Coming Soon | FixMyPresence" />
        <meta
          property="og:description"
          content="Our CSR commitment page is coming soon. FixMyPresence's legal team is preparing the details."
        />
        <meta
          property="og:image"
          content="https://fixmypresence.com/images/Fixmypresence-OG.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CSR Commitment – Coming Soon | FixMyPresence" />
        <meta
          name="twitter:description"
          content="Our CSR commitment page is coming soon. FixMyPresence's legal team is preparing the details."
        />
        <meta
          name="twitter:image"
          content="https://fixmypresence.com/images/Fixmypresence-OG.jpg"
        />
      </Head>

      <section>
        <NavBar links={[{ label: 'Back to Home', href: '/' }]} />
      </section>

      <section className="csr-coming-soon">
        <div className="csr-card">
          <h1 className="csr-title">Coming soon</h1>
          <p className="csr-message">Our legal team is at work on the CSR commitment details.</p>
          <p className="csr-subtext">
            In the meantime, you can return to{' '}
            <Link href="/" className="csr-link">
              the homepage
            </Link>{' '}
            or contact us at{' '}
            <a href="mailto:tony@fixmypresence.com" className="csr-link">
              tony@fixmypresence.com
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
