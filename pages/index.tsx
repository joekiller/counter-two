import type { NextPage } from 'next'
import Head from 'next/head'
import React from "react";
import {HomeFooter} from "../components/HomeFooter";
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
      <CounterHome/>
      <footer>
        <HomeFooter/>
      </footer>
    </div>
  )
}

export default Home
