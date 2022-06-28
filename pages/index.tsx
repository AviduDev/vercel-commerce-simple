import AboutUs from "components/AboutUs";
import Collection from "components/Collection";
import Features from "components/Features";
import Hero from "components/Hero";
import Layout from "components/Layout";
import Promo from "components/Promo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Collection />
      <Promo />
      <AboutUs />
      <Features />
    </Layout>
  );
};

export default Home;
