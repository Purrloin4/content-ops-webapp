import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cédric Josse</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <style>{`
          body {
            font-family: "Times New Roman", Times, serif;
          }
        `}</style>
      </Head>

      <main>
        <h1>Cédric Josse</h1>
        <p>
          <a href="mailto:contact@cjosse.be">contact@cjosse.be</a>
        </p>
      </main>
    </div>
  );
}
