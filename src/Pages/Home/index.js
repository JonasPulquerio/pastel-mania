import Banner from "../../components/Banner";
import Cardapio from "../../components/Cardapio";
import Container from "../../components/Container";
import Text from "../../components/Text";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Category, { categories, filterCategory } from "../../components/Category";

function Home() {
  return (
    <>
      <Header />
      <Banner image="22" />
      <Text />
      <Container>

        {
          categories.map((category, index) =>
            <Category key={index} category={category}>
              {filterCategory(index).map((pastel, indexCategoria) => <Cardapio key={indexCategoria} dados={pastel}/>)}
            </Category>)
        }

      </Container>
      <Footer />
    </>
  );
}

export default Home;
