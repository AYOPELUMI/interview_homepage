import AreaofFocus from './components/AreaofFocus';
import Blog from './components/Blog';
import CoFound from './components/CoFound';
import EIR from './components/EIR';
import Equity from './components/Equity';
import Investor from './components/Investor';
import NetworkBuilder from './components/NetworkBuilder';
import OurConceptInnovatiion from "./components/OurConceptInnovation";
import Quote from './components/Quote';
import Service from './components/Service';
import StudioPortfolio from './components/StudioPortfolio';
export const HomePage = () => {
  return (
    <main className='px-28 bg-custom-white-fade'>
      <Quote />
      <NetworkBuilder />
      <AreaofFocus />
      <OurConceptInnovatiion />
      <Service />
      <StudioPortfolio />
      <CoFound />
      <EIR />
      <Investor />
      <Equity />
      <Blog />
    </main>
  );
};
