import ThankYouImg from '../assets/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <div className="form-step thank-you">
      <div className="thank-you-content">
        <img src={ThankYouImg} alt="thank you" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
