const ContactTip = () => {
  return (
    <div
      className="tooltip tooltip-error tooltip-right font-semibold"
      data-tip="wesleywilsonti@gmail.com"
    >
      <a
        href="mailto: wesleywilsonti@gmail.com"
        className="text-red-400 hover:text-red-300 underline text-xl"
      >
        Contact me
      </a>
    </div>
  );
};

export default ContactTip;
