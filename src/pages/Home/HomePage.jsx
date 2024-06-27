import AreaofFocus from './components/AreaofFocus';
import CoFound from './components/CoFound';
import EIR from './components/EIR';
import Faq from './components/Faq';
import { Hero } from './components/Hero';
import NetworkBuilder from './components/NetworkBuilder';
import OurConceptInnovatiion from "./components/OurConceptInnovation";
import Quote from './components/Quote';
import Service from './components/Service';
import { Testimonials } from './components/Testmonials';
export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Quote />
      <NetworkBuilder />
      <AreaofFocus />
      <OurConceptInnovatiion />
      <Service />
      <CoFound />
      <EIR />
      <Testimonials />
      <Faq />
    </main>
  );
};
