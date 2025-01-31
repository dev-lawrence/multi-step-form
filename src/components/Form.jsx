// import PersonalInfo from './PersonalInfo';
// import AddOns from './AddOns';
// import FinishingUp from './FinishingUp';
import ProgressBar from './ProgressBar';
import ThankYou from './ThankYou';
// import SelectPlan from './SelectPlan';

const Form = () => {
  return (
    <div className="form-container">
      <div className="container">
        <div className="d-grid">
          <ProgressBar />

          {/* Page details */}
          <div className="steps-container">
            {/* <PersonalInfo /> */}
            {/* <SelectPlan /> */}
            {/* <AddOns /> */}
            {/* <FinishingUp /> */}
            <ThankYou />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
