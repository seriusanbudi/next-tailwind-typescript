import React, { Fragment } from "react";
import Head from "next/head";

type iProps = {
  children: React.ReactNode,
  title?: string,
}

const Container = (props: iProps) => {
  const { children, title } = props;

  return (<Fragment>
    <Head>
      <title>{title ? title : "Awesome App!"}</title>
      <meta charSet="utf-8"></meta>
    </Head>
    {children}
  </Fragment>)
}

export default Container;