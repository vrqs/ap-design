import Button from "@/app/components/Button";
import ProjectsSlider from "@/app/components/ProjectsSlider";
import Image from "next/image";

import {
  Laptop,
  Store,
  SquarePercent,
  TextSearch,
} from "lucide-react";

import MobileBottomBar from "../components/MobileBottomBar";

const Home = () => {
  // const ctaRef = useRef<HTMLElement | null>(null);
  return (
    <main>
      <MobileBottomBar />

      <section className="hero">
        <div className="container-6">
          <h1 className="title heading-1">Sites rápidos, modernos e eficientes <span>para quem quer vender mais</span></h1>

          <Button
            size="large"
            label="Agendar sessão gratuita"
            url="https://calendly.com/geral-apdsn/30min/"
          />
        </div>

        <div className="intro">
          <div className="container-8">
            <div className="content-inner">
              <h2 className="heading-6">Um estúdio focado em criar moradas digitais<span className="-light"> que convertem visitas em clientes.</span></h2>

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
        <ProjectsSlider projects={["A", "B", "C"]} />
      </section>

      <section className="process">
        <div className="container-8">
          <div className="content-inner">
            <h2 className="section-title heading-6">Trabalhamos de forma ágil e simples. <span className="-light">Não somos de complicar.</span></h2>

            <div className="process-steps">
              <div className="step step-intro">
                <p className="card-chat">E qual é o processo?</p>
              </div>
              
              <div className="steps-main">
                <div className="steps">
                  <div className="step step-1">
                    <p className="card-chat">Começamos por identificar os seus objetivos. <span>Aumentar vendas? Melhorar conversões? Comunicar de forma mais eficiente?</span></p>
                  </div>
                  
                  <div className="step step-2">
                    <p className="card-chat"><span>Definimos uma direção visual</span> ajustada a si e ao seu negócio e <span>construímos a solução</span>, implementando as tecnologias mais eficientes do mercado.</p>
                  </div>
                  
                  <div className="step step-3">
                    <p className="card-chat"><span>No final, damos vida ao seu projeto</span>, fazendo o alojamento e acompanhando todo o processo de manutenção!</p>
                  </div>
                </div>

                <Image src="./logo.svg" alt="" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container-8">
          <div className="card-cta">
            <span className="chip text-small">Vamos trabalhar juntos</span>

            <p className="body body-large"><span className="-bold">Agende uma sessão gratuita de 30 minutos</span>, vamos falar sobre o soluções para o seu projeto.</p>

            <Button
              size="normal"
              label="Agendar sessão gratuita"
              url="https://calendly.com/geral-apdsn/30min/"
            />
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