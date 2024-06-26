import Faq from './components/Faq';
import { Hero } from './components/Hero';
import Quote from './components/Quote';
import { Testimonials } from './components/Testmonials';
export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Quote />
      <Testimonials />
      <Faq />
    </main>
  );
};
