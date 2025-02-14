import { HeaderData } from '../utils/constants';

const Header = ({ page }) => {
  return (
    <div className="form-step__title">
      {HeaderData.map((data, index) => (
        <div key={index}>
          {page === index && (
            <>
              <h1>{data.title}</h1>
              <p>{data.subTitle}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
