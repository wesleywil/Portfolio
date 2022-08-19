const SkillBar = ({ text, progress }) => {
  return (
    <div>
      <h1 className="text-left text-white">{text}</h1>
      <div className="text-left">
        <progress
          className="progress progress-error "
          value={progress}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default SkillBar;
