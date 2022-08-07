import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero.jsx';
import { TeamList } from '../../components/TeamList/TeamList';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  const submitForm = (values, resetForm) => {
    const photo = values.photo;

    let formData = new FormData();
    formData.append('file', photo, 'imageName');
    console.log(formData);
    // resetForm();
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamList />
      </main>
      <Footer onSubmitForm={submitForm} />
    </>
  );
};
