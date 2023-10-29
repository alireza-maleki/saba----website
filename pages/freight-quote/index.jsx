import Head from "next/head";
import EstelamKeraye from "../../components/estelam-keraye/EstelamKeraye";


const index = ({ cities }) => {
  return (
    <>
      <Head>
        <title>Freight-Quote</title>
        <meta name="description" content="Meta description for freight-quote page" />
      </Head>
      <EstelamKeraye allCity={cities} />
    </>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch(
    "https://api.sababar.net:8443/SababarWebsite/CitiesAndTheirProvinces"
  );
  const cities = await res.json();

  return {
    props: {
      cities,
    },
  };
}
