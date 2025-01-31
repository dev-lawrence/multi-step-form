import Footer from './Footer';
import Header from './Header';

const PersonalInfo = () => {
  return (
    <div className="form-step step-one">
      {/* Header */}
      <Header
        title="Personal info"
        subTitle="Please provide your name, email address, and phone number."
      />

      <div className="input-group">
        <p className="err-msg">This field is required</p>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" placeholder="e.g Stephen King" />
      </div>

      <div className="input-group">
        <p className="err-msg">This field is required</p>
        <label htmlFor="email">Email Address</label>
        <br />
        <input type="email" id="email" placeholder="stephenking@lorem.com" />
      </div>

      <div className="input-group">
        <p className="err-msg">This field is required</p>
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input type="text" id="phone" placeholder="e.g +1 234 567 890" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PersonalInfo;
