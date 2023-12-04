import React from 'react';
import {Helmet} from "react-helmet";    


export default function Meta(props) {
    const {title} = props;
  return (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
    </>
  )
}
