import Link from "next/link";
import Grouping from "./Grouping";
import Category from "./Category";

export function linkName(name: string) {
  return `${name.replace(/ /g, "_")}.html`;
}

export function deLinkName(name: string) {
  return name.replace(/[_]/g, " ").slice(0, name.length - '.html'.length);
}
export function ItemLink(props: {'data-category': Category, 'data-grouping': Grouping, 'data-name': string, 'data-fullName': string, 'data-total': number}) {
  const {'data-category': indexCategory, 'data-grouping': grouping, 'data-name': name, 'data-fullName': fullName, 'data-total': total} = props;
  return (
    <Link href={{pathname: `/${indexCategory}/render/${grouping}/${linkName(name)}`}}><a>{`${fullName}: ${total}`}</a></Link>
  )
}
