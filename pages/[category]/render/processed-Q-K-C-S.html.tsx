import {genGetStaticProps} from "../../../utils";
import {NextPage} from "next";
import Processed, {ProcessedParams} from "../../../components/Processed";
import React from "react";

export {getStaticPaths} from "../../../components/Processed";

export const getStaticProps = genGetStaticProps('Q-K-C-S-T')

//Q-K-C-S was mislabeled b/c we added -T for skin texture
const ProcessedQKCST: NextPage<ProcessedParams> = (props) => {
  return (
    <Processed {...props}/>
  )
}

export default ProcessedQKCST
