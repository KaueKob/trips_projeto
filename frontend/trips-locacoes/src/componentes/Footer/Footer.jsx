import Logo from "/Users/kauebornhofen/Desktop/projeto_locacao/frontend/trips-locacoes/src/assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-4 bg-[#f8f4f4]">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 space-y-6 md:space-y-0">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="w-[80px] h-[80px] rounded-full"
          />
        </div>
        <ul className="text-center md:text-left">
          <li className="cursor-pointer hover:underline">Quem somos</li>
          <li className="cursor-pointer hover:underline">Acomodações</li>
          <li className="cursor-pointer hover:underline">Contato</li>
        </ul>
        <ul className="text-center md:text-left">
          <li className="cursor-pointer hover:underline">Facebook</li>
          <li className="cursor-pointer hover:underline">Instagram</li>
          <li className="hover:underline">+55 (48) 99157-1767</li>
        </ul>
      </div>
      <span className="flex justify-center items-center pb-6 mt-5 text-sm text-center">
        © {new Date().getFullYear()} Trips. Todos os direitos reservados.
      </span>
    </div>
  );
};

export default Footer;
