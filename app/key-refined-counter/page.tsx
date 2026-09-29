import {Metadata, NextPage} from 'next'
import CounterMain from "../../components/CounterMain";
import TradeExample from "../../components/TradeExample";
import {HomeFooter} from "../../components/HomeFooter";
import Counter from "./counter";

export const metadata: Metadata = {
  title: 'TF2 Trade History Key and Refined Counter',
  description: 'TF2 Trade History Key and Metal Counter',
  keywords: 'counter, trade history key counter, joekiller',
}

const Home: NextPage = () => {
  return (
    <div>
      <CounterMain>
        <h1>
          TF2 Key and Refined Counter
        </h1>

        <Counter/>

        <TradeExample/>
        <p>Paste the text of a trade from <a href="https://steamcommunity.com/id/joekiller/inventoryhistory/">steam inventory history</a> above to count the total Mann Co. Supply Crate Key and Refined Metal items from Team Fortress 2 were included in the trade.</p>
      </CounterMain>
      <footer>
        <HomeFooter/>
      </footer>
    </div>
  )
}

export default Home
