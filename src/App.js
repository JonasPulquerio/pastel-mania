/* eslint-disable import/first */
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {register} from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <>
    <Header />
    <Banner />
      <h1>Pastel Mania</h1>
      <h4>O Sabor que Vícia!</h4>
    <Footer />
    </>
  );
}

export default App;
