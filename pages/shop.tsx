import AboutUs from "components/AboutUs";
import Collection from "components/Collection";
import CollectionSmall from "components/Collection-small";
import Features from "components/Features";
import Layout from "components/Layout";
import Promo from "components/Promo";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout lightMode>
      <Collection />
      <CollectionSmall />
      <Promo />
      <Features />
    </Layout>
  );
};

export default Home;
