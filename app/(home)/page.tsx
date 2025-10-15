import Button from "@/app/components/Button";
import Image from "next/image";
import {
  Laptop,
  Store,
  SquarePercent,
  TextSearch,
} from "lucide-react";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container-6">
          <h1 className="display">Sites rápidos, modernos e eficientes <span>para quem quer vender mais</span></h1>

          <Button
            label="Vamos Falar"
            url="#"
          />
        </div>

        <div className="intro">
          <div className="container-8">
            <div className="content-inner">
              <h2 className="heading-5 -light">Um estúdio web focado em criar moradas digitais que convertem visitas em clientes.</h2>

              <ul className="services">
                <li>
                  <p className="chip">
                    <Laptop size={16} />
                    Websites
                  </p>
                </li>

                <li>
                  <p className="chip">
                    <Store size={16} />
                    E-Commerce
                  </p>
                </li>
                  
                <li>
                  <p className="chip">
                    <SquarePercent size={16} />
                    Landing Pages
                  </p>
                </li>
                  
                <li>
                  <p className="chip">
                    <TextSearch size={16} />
                    SEO
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <div className="projects-gallery">
          <div className="project-slide">
            <Image src="/project-1.png" alt="" width={912} height={550} />
          </div>
          
          <div className="project-slide">
            <Image src="/project-1.png" alt="" width={912} height={550} />
          </div>
          
          <div className="project-slide">
            <Image src="/project-1.png" alt="" width={912} height={550} />
          </div>
          
        </div>
      </section>

      <section className="process">
        <div className="container-8">
          <div className="content-inner">
            <h2 className="section-title heading-5 -light">Trabalhamos de forma ágil e simples. <span className="default">Não somos de complicar.</span></h2>

            <div className="process-steps">
              <div className="step step-intro">
                <p className="card-chat">E qual é o processo?</p>
              </div>
              
              <div className="steps-main">
                <div className="steps">
                  <div className="step step-1">
                    <p className="card-chat accent"><span>Começamos por identificar os seus objetivos.</span> Aumentar vendas? Melhorar conversões? Comunicar de forma mais eficiente?</p>
                  </div>
                  
                  <div className="step step-2">
                    <p className="card-chat accent"><span>Definimos uma direção visual</span> ajustada a si e ao seu negócio e <span>construímos a solução</span>, implementando as tecnologias mais eficientes do mercado.</p>
                  </div>
                  
                  <div className="step step-3">
                    <p className="card-chat accent"><span>No final, damos vida ao seu projeto</span>, fazendo o alojamento e acompanhando todo o processo de manutenção!</p>
                  </div>
                </div>

                <Image src="./logo.svg" alt="" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="background">
        <Image src="/bg-l.svg" alt="" width={248} height={2000} />
        <div className="center"></div>
        <Image src="/bg-r.svg" alt="" width={248} height={2000} />
      </div>
    </main>
  );
}

export default Home;