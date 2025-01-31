import { finishingUp } from '../utils/constants';
import Footer from './Footer';
import Header from './Header';

const FinishingUp = () => {
  return (
    <div className="form-step step-four">
      <Header
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming."
      />

      <div className="confirm-steps">
        <div className="flex confirm-plan">
          <div className="plan">
            <h4>Arcade Yearly</h4>
            <button className="change">Change</button>
          </div>

          <span className="plan-price">$90/yr</span>
        </div>

        {finishingUp.map((item, index) => (
          <div key={index} className="confirm-addon">
            <div className="flex">
              <h4>{item.title}</h4>

              <span>+${item.yearlyPrice}/yr</span>
            </div>
          </div>
        ))}
      </div>

      <div className="total flex">
        <div className="total-price">
          <h4>Total (per year)</h4>
        </div>

        <span>+$12/yr</span>
      </div>

      <Footer />
    </div>
  );
};

export default FinishingUp;
