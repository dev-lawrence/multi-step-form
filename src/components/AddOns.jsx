import { addOns } from '../utils/constants';
import Footer from './Footer';
import Header from './Header';

const AddOns = () => {
  return (
    <div className="form-step step-three">
      <Header
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />

      <div className="add-ons">
        <p className="err-msg">Pick and Add on</p>

        <div className="add-on">
          {addOns.map((addOn, index) => (
            <label key={index} className="add-on--info">
              <div className="add-on--info__flex">
                <input type="checkbox" name="addons" />
                <div className="add-on--text">
                  <h4>{addOn.title}</h4>
                  <p>{addOn.text}</p>
                </div>
              </div>

              <div className="price">
                <span>+${addOn.monthlyPrice}/yr</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddOns;
