import React from "react";
import {Metadata} from "next";

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'TF2 Counter Website',
  description: 'TF2 Spelled Items Counts with Postlife Index as well as a steam Inventory History Key and Metal Counter with TF2 Key Price History Links',
  keywords: 'counter, tf2 spell count, tf2 spells, postlife spells, counter, trading, tf2 links, joekiller',
  icons: {
    icon: [
      { url: '/static/key-solid.svg' }
    ]
  }
}

export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
