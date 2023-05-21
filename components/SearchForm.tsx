import React, {useCallback, useEffect} from "react";
import useMobileDetect from "./UseMobileDetect";
import {ParsedUrlQuery} from "querystring";
import {useRouter} from "next/router";

function getSearchQuery(q: ParsedUrlQuery) {
  return Array.isArray(q.q) ? q.q.join(' ') : q.q;
}

function getSpellSearch(d: Document): HTMLInputElement {
  return document.getElementById("spellSearch") as HTMLInputElement
}

const SearchForm = ({loaded, handleLoaded, handleSearchChange, disableInstant}: {
  loaded: boolean,
  handleLoaded: (loaded: boolean) => void,
  handleSearchChange: (searchText: string) => void,
  disableInstant?: boolean
}) => {
  const router = useRouter();
  const currentDevice = useMobileDetect();
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(disableInstant || currentDevice.isMobile()) {
      return;
    }
    handleSearchChange(e.target.value);
  }

  useEffect(() => {
    if (router.isReady && !loaded) {
      const current = getSpellSearch(document).value;
      const sq = getSearchQuery(router.query) || "";
      if(sq !== current) {
        getSpellSearch(document).value = sq;
      }
      handleSearchChange(sq);
      handleLoaded(true);
    }
  }, [handleLoaded, handleSearchChange, loaded, router.isReady, router.query]);

  const handleSubmit = useCallback(() => {
    const value = getSpellSearch(document).value;
    const sq = getSearchQuery(router.query);
    if (value != null && value !== sq) {
      const base = router.asPath.split('?').shift()!
      if (value) router.push(`${base}?q=${value.trim()}`, undefined, {shallow: true}).catch((e) => console.error(e));
      else router.push(base, undefined, {shallow: true}).catch((e) => console.error(e));
    }
    handleSearchChange(value);
  },[router, handleSearchChange])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        onChange={onInputChange}
        enterKeyHint={"search"}
        type={"search"}
        name={"q"}
        id={"spellSearch"}
        placeholder={"Press enter to search for names..."}
      />
    </form>
  )
}
export default SearchForm
