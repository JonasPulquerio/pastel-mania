/* eslint-disable import/first */
import Banner from "./components/Banner";
import Cardapio from "./components/Cardapio";
import Container from "./components/Container";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Header from "./components/Header";
import pasteis from "./json/db.json"
import Category from "./components/Category";

const categories = [
  "PASTÉIS SIMPLES",
  "PASTÉIS ESPECIAIS",
  "COMBOS",
  "BEBIDAS"
]

function filterCategory(dados) {
  return pasteis.filter(pastel => pastel.category === categories[dados] )
}

function App() {
  return (
    <>
      <Header />
      <Banner image="22" />
      <Text />
      <Container>

        <Category category={categories[0]}>
          {filterCategory(0).map((pastel) => <Cardapio dados={pastel} key={pastel} />)}
        </Category>
        <Category category={categories[1]}>
          {filterCategory(1).map((pastel) => <Cardapio dados={pastel} key={pastel} />)}
        </Category>
        <Category category={categories[2]}>
          {filterCategory(2).map((pastel) => <Cardapio dados={pastel} key={pastel} />)}
        </Category>
        <Category category={categories[3]}>
          {filterCategory(3).map((pastel) => <Cardapio dados={pastel} key={pastel} />)}
        </Category>



      </Container>
      <Footer />
    </>
  );
}

export default App;
