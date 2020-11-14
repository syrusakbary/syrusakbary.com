import Head from "next/head";
import Page from "./_page";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Syrus Akbary</title>
      </Head>

      <section id="intro">
        <div id="intro__background"></div>
        <img
          id="intro__avatar"
          src="/images/photo.png"
          width="123"
          height="123"
          alt="Syrus Akbary"
        />
        <p id="intro__description">
          I’m <strong>Syrus Akbary</strong>,{" "}
          <a href="https://wasmer.io">entrepreneur</a> and mathematician with
          deep expertise in open-source development
        </p>
        <Link href="/profile">
          <a id="intro__profile-link">See bio</a>
        </Link>
      </section>
      <section id="social">
        <nav id="social__links">
          <h3 id="social__guide">My networks</h3>
          <a
            id="social__twitter"
            href="https://twitter.com/syrusakbary"
            target="_blank"
          >
            @syrusakbary
          </a>
          <a
            id="social__instagram"
            href="http://instagram.com/syrusakbary"
            target="_blank"
          >
            Syrus Akbary Instagram photos
          </a>
          <a
            id="social__facebook"
            href="https://www.facebook.com/syrusakbary"
            target="_blank"
          >
            Facebook of Syrus Akbary
          </a>
          <a
            id="social__github"
            href="https://github.com/syrusakbary"
            target="_blank"
          >
            Syrus Akbary on Github
          </a>
          <a
            id="social__linkedin"
            href="https://www.linkedin.com/in/syrusakbary"
            target="_blank"
          >
            Syrus Akbary on Linked in
          </a>
          {/* <a
            id="social__medium"
            href="https://www.linkedin.com/in/syrusakbary"
            target="_blank"
          >
            Syrus Akbary Medium articles
          </a> */}
        </nav>
      </section>
      <style jsx>{`
        #intro__description a {
          color: white;
          text-decoration: underline;
        }
      `}</style>
    </Page>
  );
}
