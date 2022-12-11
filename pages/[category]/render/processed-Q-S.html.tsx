import {NextPage} from "next";
import React from "react";
import Processed, {ProcessedParams} from "../../../components/Processed";
import {genGetStaticProps} from "../../../utils";

export {getStaticPaths} from "../../../components/Processed";

export const getStaticProps = genGetStaticProps('Q-S-T')

const ProcessedQS: NextPage<ProcessedParams> = (props) => {
  return (
    <Processed {...props}/>
  )
}

export default ProcessedQS
