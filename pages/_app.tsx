// pages/_app.js
import '../styles/tailwind.css'

import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps}/>
  };
};

export default MyApp;