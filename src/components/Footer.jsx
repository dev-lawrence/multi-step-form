import { useFormContext } from '../FormContext';
import { progressData } from '../utils/constants';

const Footer = ({ page, setPage }) => {
  const {
    validatePersonalInfo,
    validateSelectPlan,
    validateAddOn,
    setFormSubmitted,
  } = useFormContext();
  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const lastPage = page === progressData.length - 1;

  const validateFunctions = [
    validatePersonalInfo,
    validateSelectPlan,
    validateAddOn,
  ];

  const handleButtonClick = () => {
    if (lastPage) {
      setFormSubmitted(true);
    } else {
      const validateFunction = validateFunctions[page];
      if (validateFunction && validateFunction()) {
        nextPage();
      }
    }
  };

  return (
    <div className="buttons">
      {page > 0 && (
        <button
          className="btn prev-btn"
          onClick={() => setPage((currentPage) => currentPage - 1)}
        >
          Go Back
        </button>
      )}

      <div></div>

      <button className="btn next-btn" onClick={handleButtonClick}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;
