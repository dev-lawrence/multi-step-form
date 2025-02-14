import { useFormContext } from '../FormContext';
import Footer from './Footer';
import Header from './Header';

const FinishingUp = ({ page, setPage, option }) => {
  const { pageData } = useFormContext();

  const goToStepTwo = () => {
    if (page === 3) {
      setPage((currentPage) => currentPage - 2);
    }
  };

  const planPrice =
    pageData.selectPlan.option === 'monthly'
      ? pageData.selectPlan.selectedPlan.monthlyPrice
      : pageData.selectPlan.option === 'yearly'
      ? pageData.selectPlan.selectedPlan.yearlyPrice
      : '';

  const addOnPrice = pageData.addOns.checkedItems.map((item) =>
    option === 'monthly'
      ? item.monthlyPrice
      : option === 'yearly'
      ? item.yearlyPrice
      : ''
  );

  const totalAddOnPrice = addOnPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  const totalPrice = planPrice + totalAddOnPrice;

  return (
    <div className="form-step step-four">
      <Header page={page} />

      <div className="confirm-steps">
        <div className="flex confirm-plan">
          <div className="plan">
            <h4>Arcade Yearly</h4>
            <button onClick={goToStepTwo} className="change">
              Change
            </button>
          </div>

          <span className="plan-price">
            {pageData.selectPlan.option === 'monthly'
              ? `$${pageData.selectPlan.selectedPlan.monthlyPrice}/mo`
              : pageData.selectPlan.option === 'yearly'
              ? `$${pageData.selectPlan.selectedPlan.yearlyPrice}/yr`
              : ''}
          </span>
        </div>

        {pageData.addOns.checkedItems.map((item, index) => (
          <div key={index} className="confirm-addon">
            <div className="flex">
              <h4>{item.title}</h4>

              <span>
                {option === 'monthly'
                  ? `$${item.monthlyPrice}/mo`
                  : option === 'yearly'
                  ? `$${item.yearlyPrice}/yr`
                  : ''}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="total flex">
        <div className="total-price">
          <h4>
            {option === 'monthly'
              ? `Total (per month)`
              : option === 'yearly'
              ? `Total (per year)`
              : ''}
          </h4>
        </div>

        <span>
          {option === 'monthly'
            ? `+$${totalPrice}/mo`
            : option === 'yearly'
            ? `+$${totalPrice}/yr`
            : ''}
        </span>
      </div>

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default FinishingUp;
