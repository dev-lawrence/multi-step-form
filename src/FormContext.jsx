import { createContext, useContext, useEffect, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialData = JSON.parse(localStorage.getItem('formData-m')) || {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },

    selectPlan: {
      option: '',
      selectedPlan: '',
    },

    addOns: {
      checkedItems: [],
    },
  };

  const [pageData, setPageData] = useState(initialData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessagePersonalInfo, setErrorMessagePersonalInfo] = useState('');
  const [errorMessageSelectPlan, setErrorMessageSelectPlan] = useState('');
  const [errorMessageAddOn, setErrorMessageAddOn] = useState('');

  useEffect(() => {
    localStorage.setItem('formData-m', JSON.stringify(pageData));
  }, [pageData]);

  const validatePersonalInfo = () => {
    const { name, email, phone } = pageData.personalInfo;

    if (!name || !email || !phone) {
      setErrorMessagePersonalInfo('This field is required');
      return false;
    }

    setErrorMessagePersonalInfo('');
    return true;
  };

  const validateSelectPlan = () => {
    const { selectedPlan } = pageData.selectPlan;

    if (!selectedPlan || Object.keys(selectedPlan).length === 0) {
      setErrorMessageSelectPlan('Select a plan');
      return false;
    }

    setErrorMessageSelectPlan('');
    return true;
  };

  const validateAddOn = () => {
    const { checkedItems } = pageData.addOns;

    if (checkedItems.length === 0) {
      setErrorMessageAddOn('Pick an Add On');
      return false;
    }

    setErrorMessageAddOn('');
    return true;
  };

  return (
    <FormContext.Provider
      value={{
        pageData,
        setPageData,
        errorMessagePersonalInfo,
        errorMessageSelectPlan,
        errorMessageAddOn,
        validatePersonalInfo,
        validateSelectPlan,
        validateAddOn,
        formSubmitted,
        setFormSubmitted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
