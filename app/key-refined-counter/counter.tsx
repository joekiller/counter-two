'use client';

import React, {useCallback, useEffect, useState} from "react";

const KEY = /Mann Co\. Supply Crate Key/g;
const REF = /Refined Metal/g;
const REC = /Reclaimed Metal/g;
const SCRAP = /Scrap Metal/g;

export default function Counter() {
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
    <>
      <p>
        {key} Key{key === 1 ? '' : 's'}, {ref} Refined
      </p>

      <textarea value={input} placeholder="Mann Co. Supply Crate Key" onChange={handleInputChange}/>
    </>
  )
}
