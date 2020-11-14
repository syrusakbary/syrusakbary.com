import Head from "next/head";
import Page from "./_page";
import Link from "next/link";

export default function Home() {
  return (
    <Page blackHeader={true}>
      <Head>
        <title>Syrus Akbary - Profile</title>
      </Head>
      <section id="profile">
        <h1 id="profile__title">Bio</h1>
        <div id="profile__description">
          <p>
            Since childhood I've been attracted to the Queen of abstract
            sciences: mathematics.
          </p>
          <p>
            I’ve always been curious, I love to learn and grow, I hold the right
            to be wrong and the responsibility to learn about it. I don't mind
            to be wrong …learning would be impossible other way.
          </p>
          <blockquote>
            When a mystery is too overpowering, one dare not disobey
          </blockquote>
          <p>
            I took my first steps on the Internet world when it was still early
            stage in Spain, about 1999. I saw an enormous potential in this new
            form of communication (things are as they are in the way they could
            be useful for us, with the innegable exception of{" "}
            <a href="http://en.wikipedia.org/wiki/The_Little_Prince">
              those things invisible to the eye
            </a>
            ).
          </p>
          <p>
            I love what I do. I’m always eager to learn, intrepid, enthusiastic
            and surely the one you will{" "}
            <a href="mailto:&#x6d;&#x65;&#x40;&#x73;&#x79;&#x72;&#x75;&#x73;&#x61;&#x6b;&#x62;&#x61;&#x72;&#x79;&#x2e;&#x63;&#x6f;&#x6d;">
              keep in touch
            </a>{" "}
            after seeing any of{" "}
            <Link href="/projects">
              <a href="/projects">my amazing projects</a>
            </Link>
            .
          </p>
        </div>
      </section>
    </Page>
  );
}