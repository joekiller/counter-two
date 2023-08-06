import {NextPage} from "next";
import React from "react";
import Processed, {ProcessedParams} from "../../../components/Processed";
import {genGetStaticProps} from "../../../utils";

export {getStaticPaths} from "../../../components/Processed";

export const getStaticProps = genGetStaticProps('Q-C-S-E-T')

const ProcessedQCS: NextPage<ProcessedParams> = (props) => {
  return (
    <Processed {...props}/>
  )
}

export default ProcessedQCS
