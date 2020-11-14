import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Page({ children, blackHeader }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,400italic|Gloria+Hallelujah"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:site_name" content="syrusakbary.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="twitter:site" content="@syrusakbary" />
        <meta name="twitter:title" content="Syrus Akbary" />
        <meta name="twitter:image" content="/images/logo.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YTJ0Q0LJBX"></script>
        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YTJ0Q0LJBX');
        `}} />
      </Head>
      <header key="header" id="header" className={blackHeader ? "header--black" : ""}>
        <a id="nav"></a>
        <a id="menu-close" href="#"></a>
        <a id="menu" href="#nav">
          <span className="menu-top"></span>
          <span className="menu-middle"></span>
          <span className="menu-bottom"></span>
        </a>
        <nav id="site-nav">
          <Link href="/projects">
            <a
              className={`site-nav__link ${
                router.pathname === "/projects" ? "current" : ""
              }`}
            >
              <span data-hover="Projects">Projects</span>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={`site-nav__link ${
                router.pathname === "/profile" ? "current" : ""
              }`}
            >
              <span data-hover="Profile">Profile</span>
            </a>
          </Link>
          <Link href="#">
            <a
              className={`site-nav__link ${
                router.pathname === "/lab" ? "current" : ""
              }`}
            >
              <span data-hover="Lab">Lab</span>
            </a>
          </Link>
        </nav>
        <Link href="/"><a id="header__logo">
          Syrus Akbary
        </a>
        </Link>
        <a
          id="header__connect"
          href="mailto:&#x6d;&#x65;&#x40;&#x73;&#x79;&#x72;&#x75;&#x73;&#x61;&#x6b;&#x62;&#x61;&#x72;&#x79;&#x2e;&#x63;&#x6f;&#x6d;"
        >
          Connect
        </a>
      </header>
      <div id="pages">
        <div className="page">{children}</div>
      </div>
      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        html {
          height: 100%;
        }
        a {
          text-decoration: none;
        }
        body {
          background: #f1f2f6;
          font-family: "Helvetica Neue", sans-serif;
          font-size: 14px;
          line-height: 17px;
          height: 100%;
          position: relative;
        }
        @font-face {
          font-family: "syrusakbary";
          src: url("/fonts/syrusakbary.eot");
          src: url("/fonts/syrusakbary.eot?#iefix") format("embedded-opentype"),
            url("/fonts/syrusakbary.woff") format("woff"),
            url("/fonts/syrusakbary.ttf") format("truetype"),
            url("/fonts/syrusakbary.svg#syrusakbary") format("svg");
          font-weight: normal;
          font-style: normal;
        }
        #header__logo:before,
        #header__connect:after,
        #intro__profile-link:after,
        #social__github:before,
        #social__github:after,
        #social__twitter:before,
        #social__twitter:after,
        #social__linkedin:before,
        #social__linkedin:after,
        #social__medium:before,
        #social__medium:after,
        #social__facebook:before,
        #social__facebook:after,
        #social__instagram:before,
        #social__instagram:after {
          font-family: "syrusakbary";
          speak: none;
          font-style: normal;
          font-weight: normal;
          font-variant: normal;
          text-transform: none;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
        }
        #header__logo,
        #social__github,
        #social__twitter,
        #social__linkedin,
        #social__medium,
        #social__facebook,
        #social__instagram {
          position: relative;
          text-indent: -10000px;
          overflow: hidden;
        }
        #header__logo:before,
        #social__github:before,
        #social__github:after,
        #social__twitter:before,
        #social__twitter:after,
        #social__linkedin:before,
        #social__linkedin:after,
        #social__medium:before,
        #social__medium:after,
        #social__facebook:before,
        #social__facebook:after,
        #social__instagram:before,
        #social__instagram:after {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          text-indent: 0;
          display: inline-block;
        }
        #header,
        #intro,
        #profile,
        #projects {
          padding-left: 23px;
          padding-right: 23px;
        }
        #profile {
          padding-top: 84px;
          padding-bottom: 42px;
        }
        @media only screen and (max-width: 640px) {
          #profile {
            padding-top: 40px;
            padding-bottom: 20px;
          }
        }
        .pages-animation {
          overflow: hidden;
          pointer-events: none;
        }
        #header {
          position: absolute;
          height: 76px;
          padding-top: 23px;
          padding-bottom: 23px;
          overflow: hidden;
          box-sizing: border-box;
          top: 0;
          left: 0;
          right: 0;
          color: #fff;
          z-index: 1000;
        }
        #header.header--black {
          color: #111;
        }
        #header__logo {
          float: left;
          width: 48px;
          height: 28px;
          display: block;
          z-index: 1003;
          transition: all 0.3s ease-in-out;
        }
        #header__logo:before {
          content: "\e600";
          font-size: 28px;
          color: #fff;
          transition: all 0.2s ease-in-out;
        }
        .header--black #header__logo:before {
          color: #000;
        }
        #header__connect {
          padding: 8px 18px;
          float: right;
          border-radius: 37px;
          background: #dc6459;
          color: #fff;
          font-family: "Helvetica Neue", sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 1002;
          position: relative;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        #header__connect:after {
          content: "\e601";
          color: #fff;
          font-size: 17px;
          display: inline-block;
          margin-left: 6px;
          vertical-align: top;
          text-indent: 0;
        }
        #header__connect:hover {
          background: #cf4b3f;
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.1);
        }
        #site-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          overflow: hidden;
        }
        .site-nav__link {
          display: inline-block;
          text-transform: uppercase;
          font-family: "Helvetica Neue", sans-serif;
          box-sizing: border-box;
          letter-spacing: 1px;
          font-size: 12px;
          font-weight: 300;
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: border-color 0.3s ease-in-out;
          overflow: hidden;
          position: relative;
          margin-top: 25px;
          height: 50px;
          line-height: 32px;
          vertical-align: bottom;
        }
        .site-nav__link span {
          height: 50px;
          color: #fff;
          display: inline-block;
          padding: 0 30px;
          transition: color 0.2s ease-in-out, transform 0.3s ease-in-out;
          margin-bottom: 20px;
        }
        .site-nav__link span:after {
          position: absolute;
          top: 50px;
          box-sizing: border-box;
          left: 0;
          width: 100%;
          height: 100%;
          font-weight: 500;
          content: attr(data-hover);
        }
        .site-nav__link:hover,
        .site-nav__link.current {
          border-bottom: 3px solid #fff;
        }
        .site-nav__link:hover span,
        .site-nav__link.current span {
          transform: translateY(-100%);
        }
        .header--black .site-nav__link {
          border-color: rgba(0, 0, 0, 0.6);
        }
        .header--black .site-nav__link:hover,
        .header--black .site-nav__link.current {
          border-color: #000;
        }
        .header--black .site-nav__link span {
          color: #111;
        }
        #pages {
          display: block;
          height: 100%;
          min-height: 100%;
          width: 100%;
          background: #767773;
        }
        .pages-animation #pages {
          overflow: hidden;
        }
        .page {
          background: #fff;
          min-height: 100%;
          transform-origin: 50% 0;
          overflow: hidden;
          position: relative;
        }
        .pages-animation .page {
          box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
        }
        .pages-animation .page.page--out {
          z-index: 90;
        }
        .pages-animation .page.page--in {
          position: absolute;
          z-index: 100;
          top: 0;
          width: 100%;
          left: 0;
          right: 0;
        }
        .pages-animation.pages-animation--back .page.page--out {
          z-index: 100;
        }
        .pages-animation.pages-animation--back .page.page--in {
          z-index: 90;
        }
        @media only screen and (max-width: 640px) {
          #menu {
            z-index: 99;
          }
          #menu,
          #menu-close {
            width: 30px;
            height: 30px;
            display: inline-block;
            position: absolute;
            left: 23px;
            top: 23px;
          }
          .site-nav__link {
            transform: translateX(-150px);
            transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
              transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            transition-delay: 0;
            opacity: 0;
            pointer-events: none;
          }
          .site-nav__link {
            border-color: transparent;
            margin-bottom: -1px;
            font-size: 14px;
          }
          .site-nav__link span {
            padding-left: 10px;
            padding-right: 10px;
          }
          #site-nav {
            margin: 0 20px;
            padding-left: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.6);
            transition: border-color 0.3s ease-in-out;
          }
          .header--black #site-nav {
            border-color: #000;
          }
          #header__connect {
            text-indent: -100px;
            overflow: hidden;
          }
          #header__connect:after {
            position: absolute;
            z-index: 100;
            right: 10px;
          }
          #nav {
            position: absolute;
            top: 0;
            left: 0;
          }
          #nav:target ~ #header__logo,
          #nav.nav--active ~ #header__logo,
          #nav:target ~ #header__connect,
          #nav.nav--active ~ #header__connect {
            transform: translateX(150px);
            transition-delay: 0;
            opacity: 0;
          }
          #nav:target ~ #menu-close,
          #nav.nav--active ~ #menu-close {
            z-index: 100;
          }
          #nav:target ~ #site-nav .site-nav__link,
          #nav.nav--active ~ #site-nav .site-nav__link {
            transition-delay: 0.15s;
            transform: translateX(0px);
            opacity: 1;
            pointer-events: auto;
          }
          .pages-animation .site-nav__link,
          .pages-animation #header__logo {
            transition-delay: 0 !important;
          }
          #header__logo,
          #header__connect {
            transition-delay: 0.15s;
          }
          #header__logo {
            left: 50%;
            position: absolute;
            top: 23px;
            margin-left: -25px;
          }
          .menu-top,
          .menu-middle,
          .menu-bottom {
            width: 100%;
            height: 2px;
            background: #fff;
            transition: background 0.3s ease-in-out;
            position: absolute;
            left: 0;
            right: 0;
            border-radius: 1px;
          }
          .header--black .menu-top,
          .header--black .menu-middle,
          .header--black .menu-bottom {
            background: #000;
          }
          .menu-top {
            top: 6px;
          }
          .menu-middle {
            top: 14px;
          }
          .menu-bottom {
            top: 22px;
          }
        }
        #header,
        #intro,
        #profile,
        #projects {
          padding-left: 23px;
          padding-right: 23px;
        }
        #profile {
          padding-top: 84px;
          padding-bottom: 42px;
        }
        @media only screen and (max-width: 640px) {
          #profile {
            padding-top: 40px;
            padding-bottom: 20px;
          }
        }
        .pages-animation {
          overflow: hidden;
          pointer-events: none;
        }
        #header {
          position: absolute;
          height: 76px;
          padding-top: 23px;
          padding-bottom: 23px;
          overflow: hidden;
          box-sizing: border-box;
          top: 0;
          left: 0;
          right: 0;
          color: #fff;
          z-index: 1000;
          animation: fadeInDown 0.5s;
          animation-fill-mode: both;
          animation-delay: 0.1s;
        }
        .page-turbolinks #header {
          animation-delay: 0.45s;
        }
        #header.header--black {
          color: #111;
        }
        #header__logo {
          float: left;
          width: 48px;
          height: 28px;
          display: block;
          z-index: 1003;
          transition: all 0.3s ease-in-out;
        }
        #header__logo:before {
          content: "\e600";
          font-size: 28px;
          color: #fff;
          transition: all 0.2s ease-in-out;
        }
        .header--black #header__logo:before {
          color: #000;
        }
        #header__connect {
          padding: 8px 18px;
          float: right;
          border-radius: 37px;
          background: #dc6459;
          color: #fff;
          font-family: "Helvetica Neue", sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 1002;
          position: relative;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        #header__connect:after {
          content: "\e601";
          color: #fff;
          font-size: 17px;
          display: inline-block;
          margin-left: 6px;
          vertical-align: top;
          text-indent: 0;
        }
        #header__connect:hover {
          background: #cf4b3f;
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.1);
        }
        #site-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          overflow: hidden;
        }
        .site-nav__link {
          display: inline-block;
          text-transform: uppercase;
          font-family: "Helvetica Neue", sans-serif;
          box-sizing: border-box;
          letter-spacing: 1px;
          font-size: 12px;
          font-weight: 300;
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: border-color 0.3s ease-in-out;
          overflow: hidden;
          position: relative;
          margin-top: 25px;
          height: 50px;
          line-height: 32px;
          vertical-align: bottom;
        }
        .site-nav__link span {
          height: 50px;
          color: #fff;
          display: inline-block;
          padding: 0 30px;
          transition: color 0.2s ease-in-out, transform 0.3s ease-in-out;
          margin-bottom: 20px;
        }
        .site-nav__link span:after {
          position: absolute;
          top: 50px;
          box-sizing: border-box;
          left: 0;
          width: 100%;
          height: 100%;
          font-weight: 500;
          content: attr(data-hover);
        }
        .site-nav__link:hover,
        .site-nav__link.current {
          border-bottom: 3px solid #fff;
        }
        .site-nav__link:hover span,
        .site-nav__link.current span {
          transform: translateY(-100%);
        }
        .header--black .site-nav__link {
          border-color: rgba(0, 0, 0, 0.6);
        }
        .header--black .site-nav__link:hover,
        .header--black .site-nav__link.current {
          border-color: #000;
        }
        .header--black .site-nav__link span {
          color: #111;
        }
        #pages {
          display: block;
          height: 100%;
          min-height: 100%;
          width: 100%;
          background: #767773;
        }
        .pages-animation #pages {
          overflow: hidden;
        }
        .page {
          background: #fff;
          min-height: 100%;
          transform-origin: 50% 0;
          overflow: hidden;
          position: relative;
        }
        .pages-animation .page {
          box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
        }
        .pages-animation .page.page--out {
          z-index: 90;
          animation: page-unvisit 0.6s ease-in-out;
          animation-fill-mode: both;
        }
        .pages-animation .page.page--in {
          position: absolute;
          z-index: 100;
          top: 0;
          width: 100%;
          left: 0;
          right: 0;
          animation: page-visit 0.6s ease-in-out;
          animation-fill-mode: both;
        }
        .pages-animation.pages-animation--back .page.page--out {
          z-index: 100;
          animation: page-visit 0.6s ease-in-out;
          animation-fill-mode: both;
          animation-direction: reverse;
        }
        .pages-animation.pages-animation--back .page.page--in {
          z-index: 90;
          animation: page-unvisit 0.6s ease-in-out;
          animation-fill-mode: both;
          animation-direction: reverse;
        }
        @media only screen and (max-width: 640px) {
          #menu {
            z-index: 99;
          }
          #menu,
          #menu-close {
            width: 30px;
            height: 30px;
            display: inline-block;
            position: absolute;
            left: 23px;
            top: 23px;
          }
          .site-nav__link {
            transform: translateX(-150px);
            transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
              transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            transition-delay: 0;
            opacity: 0;
            pointer-events: none;
          }
          .site-nav__link {
            border-color: transparent;
            margin-bottom: -1px;
            font-size: 14px;
          }
          .site-nav__link span {
            padding-left: 10px;
            padding-right: 10px;
          }
          #site-nav {
            margin: 0 20px;
            padding-left: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.6);
            transition: border-color 0.3s ease-in-out;
          }
          .header--black #site-nav {
            border-color: #000;
          }
          #header__connect {
            text-indent: -100px;
            overflow: hidden;
          }
          #header__connect:after {
            position: absolute;
            z-index: 100;
            right: 10px;
          }
          #nav {
            position: absolute;
            top: 0;
            left: 0;
          }
          #nav:target ~ #header__logo,
          #nav.nav--active ~ #header__logo,
          #nav:target ~ #header__connect,
          #nav.nav--active ~ #header__connect {
            transform: translateX(150px);
            transition-delay: 0;
            opacity: 0;
          }
          #nav:target ~ #menu-close,
          #nav.nav--active ~ #menu-close {
            z-index: 100;
          }
          #nav:target ~ #site-nav .site-nav__link,
          #nav.nav--active ~ #site-nav .site-nav__link {
            transition-delay: 0.15s;
            transform: translateX(0px);
            opacity: 1;
            pointer-events: auto;
          }
          .pages-animation .site-nav__link,
          .pages-animation #header__logo {
            transition-delay: 0 !important;
          }
          #header__logo,
          #header__connect {
            transition-delay: 0.15s;
          }
          #header__logo {
            left: 50%;
            position: absolute;
            top: 23px;
            margin-left: -25px;
          }
          .menu-top,
          .menu-middle,
          .menu-bottom {
            width: 100%;
            height: 2px;
            background: #fff;
            transition: background 0.3s ease-in-out;
            position: absolute;
            left: 0;
            right: 0;
            border-radius: 1px;
          }
          .header--black .menu-top,
          .header--black .menu-middle,
          .header--black .menu-bottom {
            background: #000;
          }
          .menu-top {
            top: 6px;
            animation: menuInTop 0.5s backwards;
            animation-direction: reverse;
          }
          #nav:target ~ #menu .menu-top,
          #nav.nav--active ~ #menu .menu-top {
            animation: menuOutTop 0.5s forwards;
          }
          .menu-middle {
            top: 14px;
            animation: menuInMiddle 0.5s backwards;
            animation-direction: reverse;
          }
          #nav:target ~ #menu .menu-middle,
          #nav.nav--active ~ #menu .menu-middle {
            animation: menuOutMiddle 0.5s forwards;
          }
          .menu-bottom {
            top: 22px;
            animation: menuInBottom 0.5s backwards;
            animation-direction: reverse;
          }
          #nav:target ~ #menu .menu-bottom,
          #nav.nav--active ~ #menu .menu-bottom {
            animation: menuOutBottom 0.5s forwards;
          }
        }
        #header,
        #intro,
        #profile,
        #projects {
          padding-left: 23px;
          padding-right: 23px;
        }
        #profile {
          padding-top: 84px;
          padding-bottom: 42px;
        }
        @media only screen and (max-width: 640px) {
          #profile {
            padding-top: 40px;
            padding-bottom: 20px;
          }
        }
        #header {
          position: absolute;
          height: 76px;
          padding-top: 23px;
          padding-bottom: 23px;
          overflow: hidden;
          box-sizing: border-box;
          top: 0;
          left: 0;
          right: 0;
          color: #fff;
          z-index: 1000;
          animation: fadeInDown 0.5s;
          animation-fill-mode: both;
          animation-delay: 0.1s;
        }
        .page-turbolinks #header {
          animation-delay: 0.45s;
        }
        #header.header--black {
          color: #111;
        }
        #header__logo {
          float: left;
          width: 48px;
          height: 28px;
          display: block;
          z-index: 1003;
          transition: all 0.3s ease-in-out;
        }
        #header__logo:before {
          content: "\e600";
          font-size: 28px;
          color: #fff;
          transition: all 0.2s ease-in-out;
        }
        .header--black #header__logo:before {
          color: #000;
        }
        #header__connect {
          padding: 8px 18px;
          float: right;
          border-radius: 37px;
          background: #dc6459;
          color: #fff;
          font-family: "Helvetica Neue", sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 1002;
          position: relative;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        #header__connect:after {
          content: "\e601";
          color: #fff;
          font-size: 17px;
          display: inline-block;
          margin-left: 6px;
          vertical-align: top;
          text-indent: 0;
        }
        #header__connect:hover {
          background: #cf4b3f;
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.1);
        }
        #site-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          text-align: center;
          overflow: hidden;
        }
        .site-nav__link {
          display: inline-block;
          text-transform: uppercase;
          font-family: "Helvetica Neue", sans-serif;
          box-sizing: border-box;
          letter-spacing: 1px;
          font-size: 12px;
          font-weight: 300;
          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: border-color 0.3s ease-in-out;
          overflow: hidden;
          position: relative;
          margin-top: 25px;
          height: 50px;
          line-height: 32px;
          vertical-align: bottom;
        }
        .site-nav__link span {
          height: 50px;
          color: #fff;
          display: inline-block;
          padding: 0 30px;
          transition: color 0.2s ease-in-out, transform 0.3s ease-in-out;
          margin-bottom: 20px;
        }
        .site-nav__link span:after {
          position: absolute;
          top: 50px;
          box-sizing: border-box;
          left: 0;
          width: 100%;
          height: 100%;
          font-weight: 500;
          content: attr(data-hover);
        }
        .site-nav__link:hover,
        .site-nav__link.current {
          border-bottom: 3px solid #fff;
        }
        .site-nav__link:hover span,
        .site-nav__link.current span {
          transform: translateY(-100%);
        }
        .header--black .site-nav__link {
          border-color: rgba(0, 0, 0, 0.6);
        }
        .header--black .site-nav__link:hover,
        .header--black .site-nav__link.current {
          border-color: #000;
        }
        .header--black .site-nav__link span {
          color: #111;
        }
        #pages {
          display: block;
          height: 100%;
          min-height: 100%;
          width: 100%;
          background: #767773;
        }
        .pages-animation #pages {
          overflow: hidden;
        }
        .page {
          background: #fff;
          min-height: 100%;
          transform-origin: 50% 0;
          overflow: hidden;
          position: relative;
        }
        .pages-animation .page {
          box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
        }
        .pages-animation .page.page--out {
          z-index: 90;
          animation: page-unvisit 0.6s ease-in-out;
          animation-fill-mode: both;
        }
        .pages-animation .page.page--in {
          position: absolute;
          z-index: 100;
          top: 0;
          width: 100%;
          left: 0;
          right: 0;
          animation: page-visit 0.6s ease-in-out;
          animation-fill-mode: both;
        }
        .pages-animation.pages-animation--back .page.page--out {
          z-index: 100;
          animation: page-visit 0.6s ease-in-out;
          animation-fill-mode: both;
          animation-direction: reverse;
        }
        .pages-animation.pages-animation--back .page.page--in {
          z-index: 90;
          animation: page-unvisit 0.6s ease-in-out;
          animation-fill-mode: both;
          animation-direction: reverse;
        }
        @media only screen and (max-width: 640px) {
          #menu {
            z-index: 99;
          }
          #menu,
          #menu-close {
            width: 30px;
            height: 30px;
            display: inline-block;
            position: absolute;
            left: 23px;
            top: 23px;
          }
          .site-nav__link {
            transform: translateX(-150px);
            transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
              transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            transition-delay: 0;
            opacity: 0;
            pointer-events: none;
          }
          .site-nav__link {
            border-color: transparent;
            margin-bottom: -1px;
            font-size: 14px;
          }
          .site-nav__link span {
            padding-left: 10px;
            padding-right: 10px;
          }
          #site-nav {
            margin: 0 20px;
            padding-left: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.6);
            transition: border-color 0.3s ease-in-out;
          }
          .header--black #site-nav {
            border-color: #000;
          }
          #header__connect {
            text-indent: -100px;
            overflow: hidden;
          }
          #header__connect:after {
            position: absolute;
            z-index: 100;
            right: 10px;
          }
          #nav {
            position: absolute;
            top: 0;
            left: 0;
          }
          #nav:target ~ #header__logo,
          #nav.nav--active ~ #header__logo,
          #nav:target ~ #header__connect,
          #nav.nav--active ~ #header__connect {
            transform: translateX(150px);
            transition-delay: 0;
            opacity: 0;
          }
          #nav:target ~ #menu-close,
          #nav.nav--active ~ #menu-close {
            z-index: 100;
          }
          #nav:target ~ #site-nav .site-nav__link,
          #nav.nav--active ~ #site-nav .site-nav__link {
            transition-delay: 0.15s;
            transform: translateX(0px);
            opacity: 1;
            pointer-events: auto;
          }
          .pages-animation .site-nav__link,
          .pages-animation #header__logo {
            transition-delay: 0 !important;
          }
          #header__logo,
          #header__connect {
            transition-delay: 0.15s;
          }
          #header__logo {
            left: 50%;
            position: absolute;
            top: 23px;
            margin-left: -25px;
          }
          .menu-top,
          .menu-middle,
          .menu-bottom {
            width: 100%;
            height: 2px;
            background: #fff;
            transition: background 0.3s ease-in-out;
            position: absolute;
            left: 0;
            right: 0;
            border-radius: 1px;
          }
          .header--black .menu-top,
          .header--black .menu-middle,
          .header--black .menu-bottom {
            background: #000;
          }
          .menu-top {
            top: 6px;
            animation: menuInTop 0.5s backwards;
            animation-direction: reverse;
          }
          #nav:target ~ #menu .menu-top,
          #nav.nav--active ~ #menu .menu-top {
            animation: menuOutTop 0.5s forwards;
          }
          .menu-middle {
            top: 14px;
            animation: menuInMiddle 0.5s backwards;
            animation-direction: reverse;
          }
          #nav:target ~ #menu .menu-middle,
          #nav.nav--active ~ #menu .menu-middle {
            animation: menuOutMiddle 0.5s forwards;
          }
          .menu-bottom {
            top: 22px;
            animation: menuInBottom 0.5s backwards;
            animation-direction: reverse;
          }
          #nav:target ~ #menu .menu-bottom,
          #nav.nav--active ~ #menu .menu-bottom {
            animation: menuOutBottom 0.5s forwards;
          }
        }
        #intro {
          padding-top: 76px;
          padding-bottom: 63px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        #intro__background {
          position: absolute;
          top: 0px;
          bottom: 0px;
          right: 0px;
          left: 0px;
          background: #4c3874 url("/images/main_background.png") no-repeat
            center center;
          background-size: cover;
          z-index: 0;
        }
        #intro__avatar {
          margin: 0 auto;
          display: block;
          margin-top: 84px;
          width: 115px;
          height: 115px;
          border-radius: 100%;
          border: 4px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          animation: bounceIn 1.1s;
          animation-fill-mode: both;
          animation-delay: 0.5s;
        }
        .page-turbolinks #intro__avatar {
          animation-delay: 0.85s;
        }
        @media only screen and (max-width: 640px) {
          #intro__avatar {
            position: absolute;
            top: 50%;
            left: 23px;
            width: 85px;
            height: 85px;
            border: 3px solid #fff;
            margin-top: -47px;
            animation: bounceIn 1.1s;
            animation-fill-mode: both;
            animation-delay: 0.5s;
          }
          .page-turbolinks #intro__avatar {
            animation-delay: 0.85s;
          }
        }
        #intro__description {
          margin: 0 auto;
          margin-top: 40px;
          font-family: "Helvetica Neue", sans-serif;
          font-weight: 300;
          font-size: 17px;
          color: #fff;
          line-height: 28px;
          max-width: 540px;
          letter-spacing: 0.2px;
          display: block;
          animation: fadeInDown 0.8s;
          animation-fill-mode: both;
          animation-delay: 0.9s;
        }
        .page-turbolinks #intro__description {
          animation-delay: 1.25s;
        }
        #intro__description strong {
          font-weight: 500;
        }
        @media only screen and (max-width: 640px) {
          #intro__description {
            margin-top: 48px;
            margin-left: 110px;
            margin-right: -10px;
            text-align: left;
            font-size: 15px;
            line-height: 26px;
            animation-name: fadeInLeft;
          }
        }
        #intro__profile-link {
          display: inline-block;
          padding: 11px 23px;
          border: 1px solid #000;
          border-radius: 40px;
          color: #000;
          font-size: 14px;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: padding 0.2s ease-in-out;
          position: relative;
          border-color: #fff;
          color: #fff;
          margin-top: 38px;
          display: inline-block;
          animation: fadeInDown 0.8s;
          animation-fill-mode: both;
          animation-delay: 1.3s;
        }
        #intro__profile-link:after {
          content: "\e606";
          transition: opacity 0.2s ease-in-out, transform 0.1s ease-in-out;
          position: absolute;
          right: 16px;
          top: 50%;
          margin-top: -7px;
          opacity: 0;
        }
        #intro__profile-link:hover {
          padding-right: 38px;
        }
        #intro__profile-link:hover:after {
          opacity: 1;
        }
        #intro__profile-link:active:after {
          transform: translateX(4px);
          opacity: 0.2;
        }
        .page-turbolinks #intro__profile-link {
          animation-delay: 1.65s;
        }
        @media only screen and (max-width: 640px) {
          #intro__profile-link {
            display: block;
            float: left;
            margin-left: 110px;
            margin-top: 24px;
            animation-name: fadeInLeft;
          }
        }
        #social {
          background: #fff;
          padding: 84px 0;
          text-align: center;
        }
        @media only screen and (max-width: 640px) {
          #social {
            padding: 50px 0 80px;
          }
        }
        #social__links {
          position: relative;
          display: inline-block;
        }
        #social__guide {
          position: absolute;
          right: 100%;
          top: 100%;
          font-family: "Gloria Hallelujah", cursive;
          font-size: 17px;
          white-space: nowrap;
          text-transform: lowercase;
          color: #b9b7b7;
          margin-right: 5px;
          margin-top: 25px;
        }
        #social__guide:before {
          content: "";
          left: 50%;
          bottom: 100%;
          width: 70px;
          height: 42px;
          margin-bottom: 10px;
          background: url("/images/arrow-tr.svg") no-repeat center center;
          display: block;
          position: absolute;
        }
        @media only screen and (max-width: 640px) {
          #social__guide {
            left: 50%;
            margin-left: -50px;
            width: 100px;
            margin-top: 15px;
            right: auto;
          }
          #social__guide:before {
            right: 100%;
            left: auto;
            bottom: 0;
            margin-bottom: -10px;
            margin-right: -10px;
            transform: rotate(230deg) scale(0.5);
          }
        }
        #social__github,
        #social__twitter,
        #social__linkedin,
        #social__medium,
        #social__facebook,
        #social__instagram {
          width: 48px;
          height: 48px;
          display: inline-block;
          vertical-align: top;
          margin: 0 30px;
          color: #d6d9dc;
        }
        @media only screen and (max-width: 640px) {
          #social__github,
          #social__twitter,
          #social__linkedin,
          #social__medium,
          #social__facebook,
          #social__instagram {
            width: 38px;
            height: 38px;
            font-size: 38px;
            margin: 0 11px;
          }
        }
        #social__github:hover:before,
        #social__twitter:hover:before,
        #social__linkedin:hover:before,
        #social__medium:hover:before,
        #social__facebook:hover:before,
        #social__instagram:hover:before {
          transform: translateY(-100%);
        }
        #social__github:hover:after,
        #social__twitter:hover:after,
        #social__linkedin:hover:after,
        #social__medium:hover:after,
        #social__facebook:hover:after,
        #social__instagram:hover:after {
          transform: translateY(0);
        }
        #social__github:before,
        #social__twitter:before,
        #social__linkedin:before,
        #social__medium:before,
        #social__facebook:before,
        #social__instagram:before,
        #social__github:after,
        #social__twitter:after,
        #social__linkedin:after,
        #social__medium:after,
        #social__facebook:after,
        #social__instagram:after {
          transition: all 0.2s ease-in-out;
        }
        #social__github:after,
        #social__twitter:after,
        #social__linkedin:after,
        #social__medium:after,
        #social__facebook:after,
        #social__instagram:after {
          transform: translateY(100%);
        }
        #social__github,
        #social__twitter,
        #social__linkedin,
        #social__medium,
        #social__facebook,
        #social__instagram {
          font-size: 48px;
          text-align: center;
          height: 48px;
          line-height: 48px;
        }
        @media only screen and (max-width: 640px) {
          #social__github,
          #social__twitter,
          #social__linkedin,
          #social__medium,
          #social__facebook,
          #social__instagram {
            font-size: 38px;
            height: 38px;
          }
        }
        #social__github:before {
          content: "\e605";
        }
        #social__github:after {
          content: "\e605";
          top: 0;
          bottom: auto;
          color: #333;
        }
        #social__twitter:before {
          content: "\e603";
        }
        #social__twitter:after {
          content: "\e603";
          top: 0;
          bottom: auto;
          color: #55acee;
        }
        #social__linkedin:before {
          content: "\e604";
        }
        #social__linkedin:after {
          content: "\e604";
          top: 0;
          bottom: auto;
          color: #0976b4;
        }
        #social__facebook:before {
          content: "\e602";
        }
        #social__facebook:after {
          content: "\e602";
          top: 0;
          bottom: auto;
          color: #3b5998;
        }
        #social__instagram:before {
          content: "\e607";
        }
        #social__instagram:after {
          content: "\e607";
          top: 0;
          bottom: auto;
          color: #3f729b;
        }
        #profile {
          max-width: 700px;
          margin: 76px auto 0;
        }
        #profile__title {
          font-family: "Lucida Grande";
          font-weight: bold;
          font-size: 36px;
          color: #333;
          line-height: 43px;
          margin-bottom: 34px;
        }
        #profile__description {
          font-family: "Lora";
          font-size: 20px;
          color: rgba(0, 0, 0, 0.75);
          line-height: 33px;
        }
        #profile__description p,
        #profile__description blockquote {
          margin: 1.5em 0;
        }
        #profile__description blockquote {
          font-size: 24px;
          color: #aaa;
          font-style: italic;
          line-height: 1.5em;
          padding: 23px 2em;
          border-left: 3px solid #d6d6d6;
        }
        @media only screen and (max-width: 640px) {
          #profile__description blockquote {
            padding: 15px 1em;
          }
        }
        #profile__description a {
          color: rgba(0, 0, 0, 0.75);
          text-decoration: underline;
        }
        #projects {
          padding-top: 76px;
          padding-bottom: 63px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .projects__background {
          position: absolute;
          top: 0px;
          bottom: 0px;
          right: 0px;
          left: 0px;
          background: #3e3e38 url("/images/projects/background.png") no-repeat
            center center;
          background-size: cover;
          z-index: 0;
        }
        #projects__title {
          font-family: "Consolas", monospace;
          font-size: 54px;
          color: #fff;
          line-height: 1em;
          position: relative;
          z-index: 1000;
          margin-top: 84px;
          animation: fadeInDown 0.5s;
          animation-fill-mode: both;
          animation-delay: 0.5s;
        }
        .page-turbolinks #projects__title {
          animation-delay: 0.85s;
        }
        @media only screen and (max-width: 640px) {
          #projects__title {
            font-size: 42px;
          }
        }
        #project__list {
          position: relative;
          z-index: 1000;
          text-align: center;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          margin: 0 -23px;
          padding: 0 23px;
          box-sizing: border-box;
          white-space: nowrap;
        }
        #project__line {
          position: relative;
          z-index: 1000;
          display: block;
          margin: 0 -23px;
          margin-top: 160px;
          margin-bottom: -160px;
          border: none;
          border-bottom: 5px solid rgba(255, 255, 255, 0.3);
          animation: fade 0.4s;
          animation-fill-mode: both;
          animation-delay: 0.9s;
        }
        .page-turbolinks #project__line {
          animation-delay: 1.25s;
        }
        .project__item {
          display: inline-block;
          width: 7%;
          min-width: 55px;
          max-width: 80px;
          margin-right: -3%;
          margin-left: 3%;
          margin-top: 130px;
          box-sizing: border-box;
        }
        #project--medinalia,
        #project--exercita,
        #project--cineate,
        #project--incentivalia,
        #project--vclimo,
        #project--report,
        #project--uspeak,
        #project--mediante,
        #project--aboard,
        #project--litjohn,
        #project--graphene,
        #project--wasmer {
          display: inline-block;
          vertical-align: bottom;
          text-align: left;
          font-family: "Helvetica Neue";
          font-weight: 300;
          font-size: 22px;
          padding: 15px 0;
          color: #c3c3c1;
          line-height: 24px;
          white-space: nowrap;
          transform-origin: 0 50%;
          transform: rotate(315deg);
          position: relative;
          transition: all 0.2s ease-in-out;
          padding-left: 30px;
          cursor: pointer;
          cursor: hand;
        }
        #project__list:hover #project--medinalia,
        #project__list:hover #project--exercita,
        #project__list:hover #project--cineate,
        #project__list:hover #project--incentivalia,
        #project__list:hover #project--vclimo,
        #project__list:hover #project--report,
        #project__list:hover #project--uspeak,
        #project__list:hover #project--mediante,
        #project__list:hover #project--aboard,
        #project__list:hover #project--litjohn,
        #project__list:hover #project--graphene,
        #project__list:hover #project--wasmer {
          color: #999996;
        }
        #project--medinalia:before,
        #project--exercita:before,
        #project--cineate:before,
        #project--incentivalia:before,
        #project--vclimo:before,
        #project--report:before,
        #project--uspeak:before,
        #project--mediante:before,
        #project--aboard:before,
        #project--litjohn:before,
        #project--graphene:before,
        #project--wasmer:before {
          content: "";
          border-radius: 20px;
          display: block;
          position: absolute;
          bottom: 50%;
          width: 18px;
          height: 18px;
          left: -9px;
          margin-bottom: -9px;
          box-sizing: border-box;
          border: 3px solid #fff;
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease-in-out;
        }
        #project--medinalia:hover,
        #project--exercita:hover,
        #project--cineate:hover,
        #project--incentivalia:hover,
        #project--vclimo:hover,
        #project--report:hover,
        #project--uspeak:hover,
        #project--mediante:hover,
        #project--aboard:hover,
        #project--litjohn:hover,
        #project--graphene:hover,
        #project--wasmer:hover {
          color: #fff !important;
          font-weight: 400;
          transform: scale(1.2) rotate(315deg);
        }
        #project--medinalia {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.14s;
        }
        .page-turbolinks #project--medinalia {
          animation-delay: 1.49s;
        }
        #project--medinalia:before {
          background: #6987c8;
        }
        #project--exercita {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.26s;
        }
        .page-turbolinks #project--exercita {
          animation-delay: 1.61s;
        }
        #project--exercita:before {
          background: #2a699c;
        }
        #project--cineate {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.38s;
        }
        .page-turbolinks #project--cineate {
          animation-delay: 1.73s;
        }
        #project--cineate:before {
          background: #c33917;
        }
        #project--incentivalia {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.5s;
        }
        .page-turbolinks #project--incentivalia {
          animation-delay: 1.85s;
        }
        #project--incentivalia:before {
          background: #f64a1f;
        }
        #project--vclimo {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.62s;
        }
        .page-turbolinks #project--vclimo {
          animation-delay: 1.97s;
        }
        #project--vclimo:before {
          background: #000;
        }
        #project--report {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.74s;
        }
        .page-turbolinks #project--report {
          animation-delay: 2.09s;
        }
        #project--report:before {
          background: #0cc;
        }
        #project--uspeak {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.86s;
        }
        .page-turbolinks #project--uspeak {
          animation-delay: 2.21s;
        }
        #project--uspeak:before {
          background: #7b6a6a;
        }
        #project--mediante {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 1.98s;
        }
        .page-turbolinks #project--mediante {
          animation-delay: 2.33s;
        }
        #project--mediante:before {
          background: #d9472f;
        }
        #project--aboard {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 2.1s;
        }
        .page-turbolinks #project--aboard {
          animation-delay: 2.45s;
        }
        #project--aboard:before {
          background: #3a629d;
        }
        #project--litjohn {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 2.22s;
        }
        .page-turbolinks #project--litjohn {
          animation-delay: 2.57s;
        }
        #project--litjohn:before {
          background: #20ce99;
        }
        #project--graphene {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 2.34s;
        }
        .page-turbolinks #project--graphene {
          animation-delay: 2.69s;
        }
        #project--graphene:before {
          background: #db594c;
        }
        #project--wasmer {
          animation: showProject 0.3s ease-in-out;
          animation-fill-mode: backwards;
          animation-delay: 2.46s;
        }
        .page-turbolinks #project--wasmer {
          animation-delay: 2.81s;
        }
        #project--wasmer:before {
          background: #4946dd;
        }
        #projects__choose {
          position: relative;
          z-index: 100;
          margin: 0 auto;
          display: inline-block;
          font-family: "Gloria Hallelujah", cursive;
          font-size: 17px;
          white-space: nowrap;
          text-transform: lowercase;
          color: #b9b7b7;
          margin-right: 5px;
          width: 300px;
          margin-top: 40px;
          animation: fadeInDown 0.6s;
          animation-fill-mode: both;
          animation-delay: 2.1s;
        }
        .page-turbolinks #projects__choose {
          animation-delay: 2.45s;
        }
        #projects__choose:before {
          content: "";
          left: 50%;
          bottom: 100%;
          width: 70px;
          height: 42px;
          margin-bottom: 10px;
          background: url("/images/arrow-tr.svg") no-repeat center center;
          display: block;
          position: absolute;
          left: auto;
          bottom: 0;
          margin-bottom: 0px;
          margin-right: 10px;
          transform: rotate(230deg);
        }
        @-moz-keyframes bounceIn {
          0%,
          20%,
          40%,
          60%,
          80%,
          100% {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }
          30% {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          50% {
            opacity: 0.88;
            transform: scale3d(0.95, 0.95, 0.95);
          }
          70% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        @-webkit-keyframes bounceIn {
          0%,
          20%,
          40%,
          60%,
          80%,
          100% {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }
          30% {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          50% {
            opacity: 0.88;
            transform: scale3d(0.95, 0.95, 0.95);
          }
          70% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        @-o-keyframes bounceIn {
          0%,
          20%,
          40%,
          60%,
          80%,
          100% {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }
          30% {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          50% {
            opacity: 0.88;
            transform: scale3d(0.95, 0.95, 0.95);
          }
          70% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        @keyframes bounceIn {
          0%,
          20%,
          40%,
          60%,
          80%,
          100% {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }
          30% {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          50% {
            opacity: 0.88;
            transform: scale3d(0.95, 0.95, 0.95);
          }
          70% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }
        @-moz-keyframes rubberBand {
          0% {
            transform: scale3d(1, 1, 1);
          }
          3% {
            transform: scale3d(1.15, 0.85, 1);
          }
          4% {
            transform: scale3d(0.85, 1.15, 1);
          }
          5% {
            transform: scale3d(1.1, 0.9, 1);
          }
          6.5% {
            transform: scale3d(0.95, 1.05, 1);
          }
          7.5% {
            transform: scale3d(1.05, 0.95, 1);
          }
          10% {
            transform: scale3d(1, 1, 1);
          }
        }
        @-webkit-keyframes rubberBand {
          0% {
            transform: scale3d(1, 1, 1);
          }
          3% {
            transform: scale3d(1.15, 0.85, 1);
          }
          4% {
            transform: scale3d(0.85, 1.15, 1);
          }
          5% {
            transform: scale3d(1.1, 0.9, 1);
          }
          6.5% {
            transform: scale3d(0.95, 1.05, 1);
          }
          7.5% {
            transform: scale3d(1.05, 0.95, 1);
          }
          10% {
            transform: scale3d(1, 1, 1);
          }
        }
        @-o-keyframes rubberBand {
          0% {
            transform: scale3d(1, 1, 1);
          }
          3% {
            transform: scale3d(1.15, 0.85, 1);
          }
          4% {
            transform: scale3d(0.85, 1.15, 1);
          }
          5% {
            transform: scale3d(1.1, 0.9, 1);
          }
          6.5% {
            transform: scale3d(0.95, 1.05, 1);
          }
          7.5% {
            transform: scale3d(1.05, 0.95, 1);
          }
          10% {
            transform: scale3d(1, 1, 1);
          }
        }
        @keyframes rubberBand {
          0% {
            transform: scale3d(1, 1, 1);
          }
          3% {
            transform: scale3d(1.15, 0.85, 1);
          }
          4% {
            transform: scale3d(0.85, 1.15, 1);
          }
          5% {
            transform: scale3d(1.1, 0.9, 1);
          }
          6.5% {
            transform: scale3d(0.95, 1.05, 1);
          }
          7.5% {
            transform: scale3d(1.05, 0.95, 1);
          }
          10% {
            transform: scale3d(1, 1, 1);
          }
        }
        @-moz-keyframes page-unvisit {
          0% {
            transform: none;
            opacity: 1;
          }
          100% {
            transform: translateY(60px) scale(0.85);
            opacity: 0.3;
          }
        }
        @-webkit-keyframes page-unvisit {
          0% {
            transform: none;
            opacity: 1;
          }
          100% {
            transform: translateY(60px) scale(0.85);
            opacity: 0.3;
          }
        }
        @-o-keyframes page-unvisit {
          0% {
            transform: none;
            opacity: 1;
          }
          100% {
            transform: translateY(60px) scale(0.85);
            opacity: 0.3;
          }
        }
        @keyframes page-unvisit {
          0% {
            transform: none;
            opacity: 1;
          }
          100% {
            transform: translateY(60px) scale(0.85);
            opacity: 0.3;
          }
        }
        @-moz-keyframes page-visit {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: none;
          }
        }
        @-webkit-keyframes page-visit {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: none;
          }
        }
        @-o-keyframes page-visit {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: none;
          }
        }
        @keyframes page-visit {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: none;
          }
        }
        @-moz-keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @-webkit-keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @-o-keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @-moz-keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @-webkit-keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @-o-keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @-moz-keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-webkit-keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-o-keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @-moz-keyframes showProject {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.3) rotate(315deg);
          }
          100% {
            opacity: 1;
            transform: rotate(315deg);
          }
        }
        @-webkit-keyframes showProject {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.3) rotate(315deg);
          }
          100% {
            opacity: 1;
            transform: rotate(315deg);
          }
        }
        @-o-keyframes showProject {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.3) rotate(315deg);
          }
          100% {
            opacity: 1;
            transform: rotate(315deg);
          }
        }
        @keyframes showProject {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.3) rotate(315deg);
          }
          100% {
            opacity: 1;
            transform: rotate(315deg);
          }
        }
        @-moz-keyframes menuInBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @-webkit-keyframes menuInBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @-o-keyframes menuInBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @keyframes menuInBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @-moz-keyframes menuOutBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @-webkit-keyframes menuOutBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @-o-keyframes menuOutBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @keyframes menuOutBottom {
          0% {
            top: 22px;
          }
          40% {
            transform: translateY(-8px) rotate(0deg);
          }
          100% {
            transform: translateY(-8px) rotate(135deg);
          }
        }
        @-moz-keyframes menuInTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @-webkit-keyframes menuInTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @-o-keyframes menuInTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @keyframes menuInTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @-moz-keyframes menuOutTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @-webkit-keyframes menuOutTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @-o-keyframes menuOutTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @keyframes menuOutTop {
          0% {
            top: 6px;
          }
          40% {
            transform: translateY(8px) rotate(0deg);
          }
          100% {
            transform: translateY(8px) rotate(135deg);
          }
        }
        @-moz-keyframes menuInMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @-webkit-keyframes menuInMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @-o-keyframes menuInMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @keyframes menuInMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @-moz-keyframes menuOutMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @-webkit-keyframes menuOutMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @-o-keyframes menuOutMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
        @keyframes menuOutMiddle {
          40% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}
