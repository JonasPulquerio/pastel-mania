import styles from "./SobreNos.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import imagem from "./banner33.png"
import { RiWhatsappFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

function SobreNos() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.sobrenos}>


                    <h1>Sobre Nossa Pastelaria</h1>


                    <div className={styles.texto}>
                        <section>
                            <p className={styles.primaryText}>
                                A lanchonete <strong>Pastel Mania</strong> foi criada em 10 de dezembro de 2020 por Jonas, um jovem apaixonado por lanches. Desde o início, seu objetivo foi oferecer aos clientes não apenas lanches de qualidade, mas também sabores inesquecíveis que deixassem uma marca.
                            </p>

                            <p className={styles.primaryText}>
                                Com isso em mente, Jonas decidiu compartilhar as delícias de seus lanches e doces com a comunidade, permitindo que todos desfrutassem de uma refeição especial sem precisar ir longe de suas casas ou esperar pela entrega.
                            </p>
                        </section>

                        <img src={imagem} alt="Pastel" />
                    </div>


                    <p className={styles.primaryText}>
                        Localizada no bairro Coroa do Meio, na Rua Waldemar Silva Carvalho, número 1010, a lanchonete se destaca pelo atendimento excepcional e pela atenção dedicada a cada cliente, tornando o espaço especial e acolhedor para todos os públicos.
                        A inspiração para o <strong>Pastel Mania</strong> surgiu da busca por lanches com sabores únicos e preços acessíveis na região. Jonas aprendeu suas receitas assistindo a videoaulas na internet e pesquisando conteúdos que valorizassem ainda mais os sabores dos seus produtos.
                        O menu reflete as influências culturais da área, oferecendo desde os tradicionais pastéis, como o famoso Pastel de Carne, recheado com carne moída suculenta, até opções doces como Pudim. Jonas tem um compromisso com a valorização de ingredientes locais e sustentáveis, sempre buscando os produtos mais frescos nas feiras e comércios da região.
                        A filosofia de trabalho da lanchonete é baseada na hospitalidade genuína. Cada membro da equipe é treinado para tratar os clientes como amigos, criando um ambiente familiar e acolhedor. O atendimento é personalizado, e os clientes são incentivados a compartilhar suas experiências, sugestões e histórias, promovendo uma verdadeira troca cultural.
                        <strong> Pastel Mania</strong> não é apenas uma lanchonete; é um espaço onde a comida se transforma em memórias. A missão de Jonas é celebrar a cultura local, proporcionando uma experiência única que une sabor e afeto, sempre de portas abertas para novos amigos. Ao longo dos anos, a lanchonete se consolidou como um ponto de encontro para aqueles que desejam um lanche rápido e diferenciado, repleto de sabor e lembranças.
                    </p>

                    <hr />

                    <h1>Contatos e Endereço</h1>

                    <div className={styles.contato}>
                        <div className={styles.direita}>

                            <div>
                                <p><BsFillTelephoneFill /> Telefone para contato: (79) 9 9674-7381</p>
                            </div>

                            <div>
                                <p><RiWhatsappFill /> Whatsapp: (79) 9 9674-7381</p>
                            </div>

                            <div>
                                <p><GrInstagram /> Instagram: @pastel_mania.se</p>
                            </div>

                        </div>

                        <hr className={styles.hrContato} />

                        <div className={styles.esquerda}>
                            <p>Endereço: Rua Waldemar Silva Carvalho </p>
                            <p>Nº: 1010</p>
                            <p>Bairro: Coroa do Meio</p>
                        </div>

                    </div>

                </section>
            </Container>
            <Footer />
        </>
    );
}

export default SobreNos;