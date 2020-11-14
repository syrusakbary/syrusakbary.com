import Head from "next/head";
import Page from "./_page";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Syrus Akbary - Profile</title>
      </Head>
      <section id="projects">
        <div class="projects__background" />
        <h1 id="projects__title">{`<Projects>`}</h1>
        <hr id="project__line" />
        <ul id="project__list">
          {/* <li class="project__item"><a id="project--medinalia" href="http://medinalia.com" target="_blank">Medinalia</a></li>
    <li class="project__item"><a id="project--cineate" href="http://cineate.com" target="_blank">Cinéate</a></li>
    <li class="project__item"><a id="project--incentivalia" href="http://incentivalia.syrusakbary.com" target="_blank">Incentivalia</a></li>
    <li class="project__item"><a id="project--vclimo" href="http://vclimo.com" target="_blank">VCLimo</a></li> */}
          <li class="project__item">
            <a
              id="project--report"
              href="http://reportcomunicacion.com"
              target="_blank"
            >
              Report com
            </a>
          </li>
          <li class="project__item">
            <a
              id="project--uspeak"
              href="https://www.crunchbase.com/organization/uspeak"
              target="_blank"
            >
              uSpeak
            </a>
          </li>
          <li class="project__item">
            <a
              id="project--mediante"
              href="https://mediante.com"
              target="_blank"
            >
              Mediante
            </a>
          </li>
          {/* <li class="project__item"><a id="project--aboard" href="http://getaboard.co" target="_blank">Aboard App</a></li>
    <li class="project__item"><a id="project--litjohn" href="http://www.litjohn.com" target="_blank">Lit(tle)John</a></li> */}
          <li class="project__item">
            <a
              id="project--graphene"
              href="https://graphene-python.org"
              target="_blank"
            >
              Graphene Python
            </a>
          </li>
          <li class="project__item">
            <a id="project--wasmer" href="https://wasmer.io" target="_blank">
              Wasmer
            </a>
          </li>
        </ul>
        <span id="projects__choose">Choose a project</span>
      </section>
    </Page>
  );
}
