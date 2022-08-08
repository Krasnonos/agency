import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero.jsx';
import { TeamList } from '../../components/TeamList/TeamList';
import { Footer } from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamList />
      </main>
      <Footer />
      <ToastContainer autoClose={2000} pauseOnHover />
    </>
  );
};
