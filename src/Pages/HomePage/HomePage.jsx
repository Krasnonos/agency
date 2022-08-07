import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero.jsx';
import { TeamList } from '../../components/TeamList/TeamList';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamList />
      </main>
    </>
  );
};
