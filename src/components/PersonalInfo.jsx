import { useFormContext } from '../FormContext';
import Footer from './Footer';
import Header from './Header';

const PersonalInfo = ({ page, setPage }) => {
  const { pageData, setPageData, errorMessagePersonalInfo } = useFormContext();

  const handlePersonaInfoChange = (field, event) => {
    setPageData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...pageData.personalInfo,
        [field]: event.target.value,
      },
    }));
  };

  return (
    <div className="form-step step-one">
      {/* Header */}
      <Header page={page} />

      <div className="input-group">
        <p className="err-msg">{errorMessagePersonalInfo}</p>
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={pageData.personalInfo.name}
          onChange={(event) => handlePersonaInfoChange('name', event)}
          type="text"
          id="name"
          placeholder="e.g Stephen King"
        />
      </div>

      <div className="input-group">
        <p className="err-msg">{errorMessagePersonalInfo}</p>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          value={pageData.personalInfo.email}
          onChange={(event) => handlePersonaInfoChange('email', event)}
          type="email"
          id="email"
          placeholder="stephenking@lorem.com"
        />
      </div>

      <div className="input-group">
        <p className="err-msg">{errorMessagePersonalInfo}</p>
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input
          value={pageData.personalInfo.phone}
          onChange={(event) => handlePersonaInfoChange('phone', event)}
          type="text"
          id="phone"
          placeholder="e.g +1 234 567 890"
        />
      </div>

      {/* Footer */}
      <Footer page={page} setPage={setPage} />
    </div>
  );
};

export default PersonalInfo;
