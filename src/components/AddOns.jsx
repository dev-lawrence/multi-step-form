import { useState } from 'react';
import { useFormContext } from '../FormContext';
import { addOns } from '../utils/constants';
import Footer from './Footer';
import Header from './Header';

const AddOns = ({ page, setPage, option }) => {
  const { pageData, setPageData, errorMessageAddOn } = useFormContext();

  const [checkedItems, setCheckedItems] = useState(() => {
    return pageData && pageData.addOns.checkedItems
      ? pageData.addOns.checkedItems
      : [];
  });

  const handleCheckboxChange = (addOn) => {
    setCheckedItems((prevCheckItems) => {
      const isAlreadyChecked = prevCheckItems.some(
        (item) => item.title === addOn.title
      );

      let newCheckedItems;

      if (isAlreadyChecked) {
        newCheckedItems = prevCheckItems.filter(
          (item) => item.title !== addOn.title
        );
      } else {
        newCheckedItems = [...prevCheckItems, addOn];
      }

      setPageData((prevData) => ({
        ...prevData,
        addOns: { checkedItems: newCheckedItems },
      }));

      return newCheckedItems;
    });
  };

  return (
    <div className="form-step step-three">
      <Header page={page} />

      <div className="add-ons">
        <p className="err-msg">{errorMessageAddOn}</p>

        <div className="add-on">
          {addOns.map((addOn, index) => (
            <label
              key={index}
              className={`add-on--info ${
                checkedItems.some((item) => item.title === addOn.title)
                  ? 'active'
                  : ''
              }`}
            >
              <div className="add-on--info__flex">
                <input
                  type="checkbox"
                  name="addons"
                  checked={
                    (checkedItems &&
                      checkedItems.some(
                        (item) => item.title === addOn.title
                      )) ||
                    false
                  }
                  onChange={() => handleCheckboxChange(addOn)}
                />
                <div className="add-on--text">
                  <h4>{addOn.title}</h4>
                  <p>{addOn.text}</p>
                </div>
              </div>

              <div className="price">
                <span>
                  +$
                  {option === 'monthly'
                    ? addOn.monthlyPrice
                    : option === 'yearly'
                    ? addOn.yearlyPrice
                    : ''}
                  /
                  {option === 'monthly'
                    ? 'mo'
                    : option === 'yearly'
                    ? 'yr'
                    : ''}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default AddOns;
