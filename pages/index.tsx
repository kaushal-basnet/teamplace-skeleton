import type { NextPage } from "next";
import PeopleSearch from "./peopleSearch";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <>
      <PeopleSearch />
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header"])),
      // Will be passed to the page component as props
    },
  };
}
