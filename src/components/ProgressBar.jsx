import { progressData } from '../utils/constants';

const ProgressBar = () => {
  return (
    <div className="progressbar">
      <div className="progressbar__steps">
        {progressData.map((progress) => (
          <div key={progress.step} className="progressbar__steps-info">
            <ol className="active">{progress.step}</ol>
            <div className="progressbar__steps-text">
              <h5>{progress.title}</h5>
              <span>{progress.info}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
