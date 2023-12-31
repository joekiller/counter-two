import type { NextPage } from 'next'
import React from "react";
import {HomeFooter} from "../components/HomeFooter";
import CounterHome from "../components/CounterHome";

const Home: NextPage = () => {
  return (
    <div>
      <CounterHome/>
      <footer>
        <HomeFooter/>
      </footer>
    </div>
  )
}

export default Home
