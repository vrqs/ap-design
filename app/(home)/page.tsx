import Button from "@/app/components/Button";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="display-wrapper grid">
            <div className="top">
              <h1 className="display">Sites rápidos, modernos e eficientes</h1>
            </div>
            
            <div className="bottom">              
              <h1 className="display">para quem quer vender mais</h1>
            </div>
          </div>

          <Button
            label="Vamos Falar"
            url="#"
          />
        </div>
      </section>

      <section className="intro">
        <div className="container-8">
          <h2 className="heading-5 -light">Somos um estúdio focado em criar websites que transformam visitas em clientes, especializado em design e desenvolvimento, landing pages e e-commerce.</h2>
        </div>
      </section>
    </main>
  );
}

export default Home;