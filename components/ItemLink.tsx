import Link from "next/link";
import Grouping from "./Grouping";
import Category from "./Category";

export function linkName(name: string) {
  return `${name.toLowerCase().replace(/ /g, "_")}.html`;
}

export function deLinkName(name: string) {
  return name.toLowerCase().replace(/[_]/g, " ").slice(0, name.length - '.html'.length);
}

export function getItemPathname(indexCategory: "all" | "allpostlife", grouping: "all" | "double" | "single", name: string) {
  return `/${indexCategory}/render/${grouping}/${linkName(name)}`;
}

export function ItemLink(props: {'data-category': Category, 'data-grouping': Grouping, 'data-name': string, 'data-fullname': string, 'data-total': number}) {
  const {'data-category': indexCategory, 'data-grouping': grouping, 'data-name': name, 'data-fullname': fullName, 'data-total': total} = props;
  return (
    <Link href={{pathname: getItemPathname(indexCategory, grouping, name)}}>{`${fullName.toLowerCase()}: ${total}`}</Link>
  )
}
