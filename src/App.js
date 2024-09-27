/* eslint-disable import/first */
import Banner from "./components/Banner";
import Cardapio from "./components/Cardapio";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import pasteis from "./json/db.json"

function App() {
  return (
    <>
      <Header />
      <Banner image="22" />
      <Container>
        <h1>Pastel Mania</h1>
        <h4>O Sabor que Vícia!</h4>
        <p>Na Pastel Mania, a sua satisfação é a nossa maior recompensa. Por isso, utilizamos ingredientes de alta qualidade e preparamos cada pastel com muito cuidado e atenção aos detalhes. Queremos que você se sinta especial a cada visita, saboreando um produto do qual jamais irá econtrar um sabor igual e feito com muito amor.</p>
        <section className="cardapio">
          <div>
            <h1>PASTÉIS SIMPLES</h1>
            {
              pasteis.map((pastel) => <Cardapio dados={pastel} key={pastel} />)
            }
          </div>
          <div>
            <h1>PASTÉIS SIMPLES</h1>
            {
              pasteis.map((pastel) => <Cardapio dados={pastel} key={pastel} />)
            }
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
