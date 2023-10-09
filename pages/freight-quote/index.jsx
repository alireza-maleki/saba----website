import EstelamKeraye from "../../components/estelam-keraye/EstelamKeraye";

const index = ({ cities }) => {
  return <EstelamKeraye allCity={cities} />;
};

export default index;

export async function getStaticProps() {
  const res = await fetch("https://api.sababar.net:8443/SababarWebsite/CitiesAndTheirProvinces");
  const cities = await res.json();

  return {
    props: {
      cities,
    },
  };
}
