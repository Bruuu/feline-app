const Header: React.FunctionComponent<{ text: string }> = ({ text }) => {
  return (
    <h1 className="flex text-5xl md:text-7xl font-semibold tracking-wide text-gray-900 ">
      {text}
    </h1>
  );
};

export default Header;
