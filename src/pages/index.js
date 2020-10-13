import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import UnsplashCarousel from '../components/UnsplashCarousel'

const IndexPage = () => (
  <Layout>
    <>
      <div id="bg" />
      <div id="overlay" />
      <UnsplashCarousel/>
      <div id="main">
        <Header />          
        <Footer />
      </div>
    </>
  </Layout>
);

export default IndexPage;
