import Link from "next/link";
import Grouping from "./Grouping";
import Category from "./Category";

export function linkName(name: string) {
  return `${name.replace(/ /g, "_")}.html`;
}

export function deLinkName(name: string) {
  return name.replace(/[_]/g, " ").slice(0, name.length - '.html'.length);
}
export function ItemLink(props: {indexCategory: Category, grouping: Grouping, name: string}) {
  const {indexCategory, grouping, name} = props;
  return (
    <Link href={{pathname: `/${indexCategory}/render/${grouping}/${linkName(name)}`}}><a>{grouping} {indexCategory === 'allpostlife' ? 'postlife spelled' : 'spelled'} {name}</a></Link>
  )
}
