import { useState } from 'react';
import { useFormContext } from '../FormContext';
import { plans } from '../utils/constants';
import Footer from './Footer';
import Header from './Header';

const SelectPlan = ({ page, setPage, option, setOption }) => {
  const { pageData, setPageData, errorMessageSelectPlan } = useFormContext();

  const [selectedPlan, setSelectedPlan] = useState(() => {
    return pageData && pageData.selectPlan
      ? pageData.selectPlan.selectedPlan
      : undefined;
  });

  const handleSelectedOption = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
    setPageData((prevData) => ({
      ...prevData,
      selectPlan: { ...prevData.selectPlan, option, selectedPlan },
    }));
  };

  const handleToggleChange = (selectedOption) => {
    setOption(selectedOption);
    setPageData((prevData) => ({
      ...prevData,
      selectPlan: { ...prevData.selectPlan, option: selectedOption },
    }));
  };

  return (
    <div className="form-step step-two">
      <Header page={page} />

      <div className="plans">
        <p className="err-msg">{errorMessageSelectPlan}</p>

        <div className="d-grid">
          {plans.map((plan, index) => (
            <label
              key={index}
              className={`plan ${
                selectedPlan.name === plan.name ? 'active' : ''
              }`}
            >
              <input
                type="radio"
                name="planSelection"
                checked={selectedPlan.name === plan.name}
                onChange={() => handleSelectedOption(plan)}
                style={{ display: 'none' }}
              />

              <div className="flex">
                <img src={plan.img} alt={plan.name} />
                <div className="plan__info">
                  <h4>{plan.name}</h4>
                  <span>
                    {option === 'monthly'
                      ? `$${plan.monthlyPrice}/mo`
                      : option === 'yearly'
                      ? `$${plan.yearlyPrice}/yr`
                      : ''}
                  </span>
                  {option === 'yearly' && <p className="trail">{plan.trial}</p>}
                </div>
              </div>
            </label>
          ))}
        </div>

        {/* price toggle switch */}
        <div className="toggle__switch">
          <fieldset
            className="toggle"
            aria-label="price-toggle"
            role="radiogroup"
          >
            <label
              htmlFor="month"
              className={`${option === 'yearly' ? 'fade' : ''}`}
            >
              Monthly
            </label>

            <div className="toggle__wrapper">
              <input
                type="radio"
                name="theme"
                id="month"
                checked={option === 'monthly'}
                onChange={() => handleToggleChange('monthly')}
              />
              <input
                type="radio"
                name="theme"
                id="year"
                checked={option === 'yearly'}
                onChange={() => handleToggleChange('yearly')}
              />
              <span aria-hidden="true" className="toggle__background"></span>
              <span aria-hidden="true" className="toggle__button"></span>
            </div>

            <label
              htmlFor="year"
              className={`${option === 'monthly' ? 'fade' : ''}`}
            >
              Yearly
            </label>
          </fieldset>
        </div>
      </div>

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default SelectPlan;
