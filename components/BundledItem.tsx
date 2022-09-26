import Grouping from "./Grouping";
import Category from "./Category";

type BundledItem = {
  groupings: Grouping[];
  name: string;
  category: Category
  combinations: {[key: string]: { isDouble: boolean, total: number }}
}

export default BundledItem
