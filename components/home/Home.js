import React, {Fragment} from 'react';

import Slider from "../header/Slider";
import Category from "../category/Category";
import Khadamat from "../khadamat/Khadamat";
import Feature from "../feature/Feature";
import Clients from "../clients/Clients";
import Team from "../team/Team";
import Video from "../video/Video";
import News from "../news/News";
import About from "../about/About";
import Question from "../question/Question";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import GoToTop from '../gototop/GoToTop';
import CardBank from '../card-bank/CardBank';


// === Leaflet Map ===
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../map/Map'), { ssr: false });

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Category />
      <Khadamat />
      <CardBank />
      <Feature />
      <Clients />
      <Team />
      <Video />
      <News />
      <About />
      <Question />
      <Contact />
      <Map />
      <Footer />
      <GoToTop />
    </Fragment>
  )
}

export default Home