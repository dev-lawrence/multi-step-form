import { plans } from '../utils/constants';
import Footer from './Footer';
import Header from './Header';

const SelectPlan = () => {
  return (
    <div className="form-step step-two">
      <Header
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing."
      />

      <div className="plans">
        <p className="err-msg">Select a plan</p>

        <div className="d-grid">
          {plans.map((plan, index) => (
            <label
              key={index}
              className={`plan ${plan.name === 'Arcade' ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="planSelection"
                defaultChecked={plan.name === 'Arcade'}
                style={{ display: 'none' }}
              />

              <div className="flex">
                <img src={plan.img} alt={plan.name} />
                <div className="plan__info">
                  <h4>{plan.name}</h4>
                  <span>${plan.yearlyPrice}/yr</span>
                  <p className="trail">{plan.trial}</p>
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
            <label htmlFor="month">Monthly</label>

            <div className="toggle__wrapper">
              <input type="radio" name="theme" id="month" />
              <input type="radio" name="theme" id="year" />
              <span aria-hidden="true" className="toggle__background"></span>
              <span aria-hidden="true" className="toggle__button"></span>
            </div>

            <label htmlFor="year">Yearly</label>
          </fieldset>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SelectPlan;
