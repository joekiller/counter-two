import type {Metadata, NextPage} from 'next'
import React from "react";
import CounterMain from "../../components/CounterMain";
import {HomeFooter} from "../../components/HomeFooter";

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

const Page: NextPage = () => {
  return (
    <div>
      <CounterMain>
        <h1>Privacy Policy</h1>
        <p className='lead'>
          Your privacy is important to us. We&apos;ve developed a Privacy Policy that covers how we collect, use,
          disclose and store your information.
        </p>
        <div className="ccpa">
          <h4>CCPA</h4>
          <span data-ccpa-link="1"></span>
        </div>
        <h2>Collection of Personal Data</h2>
        <p>
          First and foremost, you will never be asked to provide any of your personal information to access our
          services.
        </p>
        <h2>Collection and Use of Non-Personal Information</h2>
        <p>
          We do not collect any data at this time.
        </p>
        <h2>Cookies and Other Technologies</h2>
        <p>
          There are none at this time.
        </p>
        <h2>Service Guarantees</h2>
        <p>
          We may update our Privacy Policy from time to time. We will post any privacy policy changes on this page
          and, if the changes are significant, we will provide a more prominent notice.
        </p>
      </CounterMain>
      <footer>
        <HomeFooter/>
      </footer>
    </div>
  )
}

export default Page
