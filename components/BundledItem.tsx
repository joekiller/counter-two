import Grouping from "./Grouping";
import Category from "./Category";

export interface GroupingStats {
  isDouble: boolean, total: number
}

export type BundleGrouping = {[key: string]: GroupingStats}

type BundledItem = {
  groupings: Grouping[];
  name: string;
  category: Category
  combinations: BundleGrouping
}

export default BundledItem
