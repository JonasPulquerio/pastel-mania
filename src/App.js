/* eslint-disable import/first */
import Banner from "./components/Banner";
import Cardapio from "./components/Cardapio";
import Container from "./components/Container";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Header from "./components/Header";
import pasteis from "./json/db.json"
import Category from "./components/Category";

function App() {
  return (
    <>
      <Header />
      <Banner image="22" />
      <Text />
      <Container>
        {/* <section className="cardapio">
            <h1>PASTÉIS SIMPLES</h1>
            {
              pasteis.map((pastel) => <Cardapio dados={pastel} key={pastel} />)
            }
        </section> */}

        <Category category="PASTEIS SIMPLES">
          {
            pasteis.map((pastel) => <Cardapio dados={pastel} key={pastel} />)
          }
        </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;
