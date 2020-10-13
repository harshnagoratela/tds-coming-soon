import React from 'react';
import Layout from '../components/layout';
import Unsplash from 'react-unsplash-wrapper'

const NotFoundPage = () => (
  <Layout darkText>
          <Unsplash id="bg" keywords="wallpapers, nature, sky" style={{ width:"100%", lineHeight: 2 }}>
        <h1
          style={{
            color: "white",
            textShadow: "1px 1px 2px black",
            fontSize: "4rem"
          }}
        >
          Page Not Found !!!!
        </h1>
        <p
          style={{
            color: "white",
            textShadow: "1px 1px 2px black",
            fontSize: "2rem"
          }}
        >
          Sorry we are unable to locate the page. Go to <a href="/">Homepage</a>
        </p>
      </Unsplash>
  </Layout>
);

export default NotFoundPage;
