import "./loadingSpinner.scss";

const loadingSpinner = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default loadingSpinner;
