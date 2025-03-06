import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Vibe with non-stop music! Customize your playlists, explore 750+ sound platforms, and let AsTrazu set the mood."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@AsTrazuBot" />
          <meta name="twitter:creator" content="@AsTrazuBot" />
          <meta property="og:url" content="https://astrazu.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="AsTrazu - Your Chill Music Bot" />
          <link rel="icon" href="/img/logo2.png" type="image/x-icon" />
          <meta
            property="og:description"
            content="Vibe with non-stop music! Customize your playlists, explore 750+ sound platforms, and let AsTrazu set the mood."
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="AsTrazu" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="AsTrazu" />
          <meta name="theme-color" content="#FFD700" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
        </Head>
        <body className="bg-black text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
