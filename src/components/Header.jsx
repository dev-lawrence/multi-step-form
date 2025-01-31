const Header = ({ title, subTitle }) => {
  return (
    <div className="form-step__title">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Header;
