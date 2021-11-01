import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import Head from "next/head";
export default props => {
  return (
    <div>
      <img src="https://raw.githubusercontent.com/GattemBharath/A9-Project/master/static/favicon.ico" width="90" height="70"></img>
      <h1 style={{textAlign: "center"}}>Karna: Covid-19 Fund Raiser</h1>
      <Container>
        <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
         <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <title>Karna</title>
        </Head>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};