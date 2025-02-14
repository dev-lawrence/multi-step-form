import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';
import ProgressBar from './ProgressBar';
import ThankYou from './ThankYou';
import SelectPlan from './SelectPlan';
import { useFormContext } from '../FormContext';

const Form = () => {
  const [page, setPage] = useState(0);
  const [option, setOption] = useState('monthly');
  const { formSubmitted } = useFormContext();

  const pageDisplay = () => {
    if (formSubmitted) {
      return <ThankYou />;
    } else if (page === 0) {
      return <PersonalInfo page={page} setPage={setPage} />;
    } else if (page === 1) {
      return (
        <SelectPlan
          page={page}
          setPage={setPage}
          option={option}
          setOption={setOption}
        />
      );
    } else if (page === 2) {
      return <AddOns page={page} setPage={setPage} option={option} />;
    } else if (page === 3) {
      return <FinishingUp page={page} setPage={setPage} option={option} />;
    } else {
      return <ThankYou />;
    }
  };

  return (
    <div className="form-container">
      <div className="container">
        <div className="d-grid">
          <ProgressBar page={page} setPage={setPage} />

          {/* Page details */}
          <div className="steps-container">{pageDisplay()}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
