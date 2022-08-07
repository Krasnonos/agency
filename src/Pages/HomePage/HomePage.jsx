import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero.jsx';
import { TeamList } from '../../components/TeamList/TeamList';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamList />
      </main>
      <Footer />
    </>
  );
};
