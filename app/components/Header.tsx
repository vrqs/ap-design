import Image from "next/image";

const Header = () => {
  return (
    <header className="header-main">
      <div className="container">
        <Image
          className="logo"
          src="/logo.svg"
          alt="APSDSN"
          width={56}
          height={56}
          priority
        />

        <nav className="menu">
          <a href="https://calendly.com/geral-apdsn/30min/" target="_blank" className="button-dashed">Agendar Sessão</a>
          <a href="#" className="button-icon icon-whatsapp"></a>
        </nav>
      </div>
    </header>
  )
}

export default Header;