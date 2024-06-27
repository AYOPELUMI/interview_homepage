import Faq from './components/Faq';
import { Hero } from './components/Hero';
import NetworkBuilder from './components/NetworkBuilder';
import Quote from './components/Quote';
import { Testimonials } from './components/Testmonials';
export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Quote />
      <NetworkBuilder />
      <Testimonials />
      <Faq />
    </main>
  );
};
