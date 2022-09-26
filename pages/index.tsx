import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, {useCallback, useEffect, useState} from "react";
import {LinkAllIndex} from "../components/LinkAllIndex";
import {LinkPostLifeIndex} from "../components/LinkPostLifeIndex";
import {LinkSrcAndLicenses} from "../components/LinkSrcAndLicenses";
import CounterMain from "../components/CounterMain";

const KEY = /Mann Co\. Supply Crate Key/g;
const REF = /Refined Metal/g;
const REC = /Reclaimed Metal/g;
const SCRAP = /Scrap Metal/g;

const Home: NextPage = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState(0);
  const [ref, setRef] = useState(0);
  const matches = (v: string, m: RegExp) => {
    const result = v.match(m);
    return result ? result.length : 0;
  }
  const calcRef = (scrap = 0, reclaimed = 0): number => {
    const sr = scrap === 0 ? 0 : Math.trunc(scrap / 9) + (scrap % 9 * 0.11);
    const rr = reclaimed === 0 ? 0 : Math.trunc(reclaimed / 3) + (reclaimed % 3 * 0.33);
    return rr + sr;
  }
  useEffect(() => {
    const newKey = matches(input, KEY);
    const newRef = matches(input, REF)+ calcRef(matches(input, SCRAP), matches(input, REC));
    if(newKey !== key) {
      setKey(newKey);
    }
    if(newRef !== ref) {
      setRef(newRef)
    }
  }, [input, key, ref])

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(event.target.value !== input) {
      setInput(event.target.value);
    }
  }, [input])

  return (
    <div>
      <Head>
        <title>TF2 Counter Website</title>
        <meta name="description" content="TF2 Spelled Items Counts with Postlife Index as well as a steam Inventory History Key and Metal Counter with TF2 Key Price History Links" />
        <meta name="keywords" content="counter, tf2 spell count, tf2 spells, postlife spells, counter, trading, tf2 links, joekiller" />
        <link rel="icon" type="image/png" href="/static/key-solid.svg" />
      </Head>

      <CounterMain>
        <h1>
          TF2 Key and Refined Counter
        </h1>

        <p>
          {key} Key{key === 1 ? '' : 's'}, {ref} Refined
        </p>

        <textarea value={input} placeholder="Mann Co. Supply Crate Key" onChange={handleInputChange} />

        <Image src="/static/example.PNG" alt="Steam Inventory History Screenshot with an Unusual and TF2 Key and Metal Text" width="724" height="225"/>
        <p>Paste the text of a trade from <a href="https://steamcommunity.com/id/joekiller/inventoryhistory/">steam inventory history</a> above to count the total Mann Co. Supply Crate Key and Refined Metal items from Team Fortress 2 were included in the trade.</p>
      </CounterMain>

      <footer>
        <h2>Helpful Links</h2>
        <div className="links">
          <a href="https://manic.tf/keyprice/">TF2 Key Price History</a>
          <a href="https://calculator.tf/">TF2 Currency Converter</a>
          <LinkSrcAndLicenses />
          <LinkAllIndex/>
          <LinkPostLifeIndex/>
        </div>
      </footer>
    </div>
  )
}

export default Home
