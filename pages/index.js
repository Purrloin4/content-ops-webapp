import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cédric Josse</title>
        <link rel="icon" href="/favicon.ico" />
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
