import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero.jsx';
import { TeamList } from '../../components/TeamList/TeamList';
import { Footer } from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const HomePage = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamList isNewUser={isNewUser} setIsNewUser={setIsNewUser} />
      </main>
      <Footer setIsNewUser={setIsNewUser} />
      <ToastContainer autoClose={2000} pauseOnHover />
    </>
  );
};
