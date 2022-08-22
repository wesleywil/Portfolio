const SkillBar = ({ text, progress, text2 }) => {
  return (
    <div>
      <div className="flex">
        <h1 className="text-left text-white text-xl">{text}</h1>
        <span
          className="tooltip  tooltip-right right-4 p-2"
          data-tip={text2}
        ></span>
      </div>

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
