
import "./styles.css";
import { TbRocket } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";
import { FaRocket } from "react-icons/fa";

export default function home() {
  return (
    <div className="home">
      <div className='container'>
    <div className='icon'>
        <TbRocket color='blue' size={45}/>
    </div>
    <div className='menu'>
        <a href='#sobre'>sobre nos</a>
        <a href="#servicos">Serviços</a>
        <button>
           <a href="#contato">Contato</a>
        </button>
    </div>
   </div>
      <div className="info">
        <div className="areaMesg">
          <h2>Transformamos sua visão em tecnologia</h2>
          <p>Unimos criatividade e código para entregar soluções digitais que geram resultados reais para o seu negócio.</p>
        </div>

        <div className="areaImg">
          <TbRocket color='blue' size={280} />
        </div>
      </div>

      <div className="areaSobre" id="sobre">

        <div>
          <h1>Sobre nós</h1>
          <h2>
            transformamos ideias em soluções digitais reais. Desenvolvemos sites
            modernos e aplicativos personalizados com foco em design, desempenho
            e resultados. Atendemos desde empreendedores até empresas que
            desejam marcar presença no digital com qualidade e inovação.
            Trabalhamos com tecnologias atualizadas, atendimento próximo e
            projetos feitos sob medida para cada cliente.
          </h2>
        </div>
        <div>
          <FaRocket color='blue' size={280} />
        </div>
      </div>

      <div className="areaServiços" id="servicos">
        <h2>Nossos serviços</h2>
        <div className="areaCaixas">
          <div>
            <FaGlobe size={24} color="blue" />
            <h1>Desenvolvemos seus sites</h1>
            <p>
              Desenvolvemos sites modernos e personalizados para empresas e
              pessoas que querem se destacar no digital. Do visual à
              funcionalidade, criamos soluções sob medida com foco em
              performance, usabilidade e resultados.
            </p>
          </div>
          <div>
            <BiMobile size={24} color="blue" />
            <h1>Desenvolvemos seus APPs</h1>
            <p>
              Criamos aplicativos personalizados para Android e iOS, focados em
              desempenho, design moderno e ótima experiência do usuário.
              Transformamos ideias em soluções mobile completas para empresas e
              empreendedores.
            </p>
          </div>
        </div>
      </div>

      <div className="areaContato" id="contato">
        <h2>Quer saber mais sobre nossos serviços?</h2>
        <a
          href="https://wa.me/5533998493207?text=Olá!%20Quero%20falar%20sobre%20seus%20serviços"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Fale conosco no WhatsApp</button>
        </a>
      </div>
    </div>
  );
}
