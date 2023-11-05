import type { NextPage } from 'next'
import Head from 'next/head'
import React from "react";
import {HomeFooter} from "../components/HomeFooter";
import {LinkAllIndex} from "../components/LinkAllIndex";
import {LinkPostLifeIndex} from "../components/LinkPostLifeIndex";
import {LinkSplackDiscord} from "../components/LinkSplackDiscord";
import CounterHome from "../components/CounterHome";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TF2 Counter Website</title>
        <meta name="description" content="TF2 Spelled Items Counts with Postlife Index as well as a steam Inventory History Key and Metal Counter with TF2 Key Price History Links" />
        <meta name="keywords" content="counter, tf2 spell count, tf2 spells, postlife spells, counter, trading, tf2 links, joekiller" />
        <link rel="icon" type="image/png" href="/static/key-solid.svg" />
      </Head>

      <CounterHome>
        <h1>
          TF2 Spelled Item Counts
        </h1>

        <div>
          <h2><LinkAllIndex/></h2>
        </div>
        <div>
          <h2><LinkPostLifeIndex/></h2>
        </div>
        <div className="discord">
          <h3>Join <LinkSplackDiscord/></h3>
          <p>Splack Discord is the, &quot;<b>House Of Spells: A TF2 Spell Trading Community</b>&quot;</p>
          <p>Get the most up to date backpack.tf classifieds spelled item listings. The discord features: a bot that tells you the latest item price changes, description changes, owner changes and more! You can price check spelled items using the price check bot.</p>
        </div>
      </CounterHome>
      <footer>
        <HomeFooter/>
      </footer>
    </div>
  )
}

export default Home
