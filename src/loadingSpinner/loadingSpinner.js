import "./loadingSpinner.scss";

const loadingSpinner = () => {
  return (
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default loadingSpinner;
