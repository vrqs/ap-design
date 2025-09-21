import Image from "next/image";

const Header = () => {
  return (
    <header className="header-main">
      <div className="container">
        <Image
          className="logo"
          src="/logo.svg"
          alt="APSDSN"
          width={42}
          height={54}
          priority
        />

        <nav className="menu">
          <a href="#" className="button-text">Processo</a>
          <a href="#" className="button-dashed">Vamos falar</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;