import { useFormContext } from '../FormContext';
import { progressData } from '../utils/constants';

const ProgressBar = ({ page, setPage }) => {
  const { validatePersonalInfo, validateSelectPlan, validateAddOn } =
    useFormContext();

  const validateFunctions = [
    validatePersonalInfo,
    validateSelectPlan,
    validateAddOn,
  ];

  const handleStepClick = (index) => {
    if (index < 0 || index >= progressData.length) return;

    if (index < page) {
      setPage(index);
      return;
    }

    for (let i = 0; i <= index; i++) {
      const validateFunction = validateFunctions[i];
      if (validateFunction && !validateFunction()) {
        return;
      }
    }

    setPage(index);
  };

  return (
    <div className="progressbar">
      <div className="progressbar__steps">
        {progressData.map((progress, index) => (
          <div
            key={progress.step}
            className="progressbar__steps-info"
            onClick={() => handleStepClick(index)}
          >
            <ol className={`${page === index ? 'active' : ''}`}>
              {progress.step}
            </ol>
            <div className="progressbar__steps-text">
              <h5>{progress.title}</h5>
              <span>{progress.info}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
