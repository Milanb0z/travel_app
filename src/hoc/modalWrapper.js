const modalWrapper = ({ onCloseHandler, children }) => {
  return (
    <div className="errorMessage">
      {children}
      <div className="errorMessage_overlay" onClick={onCloseHandler}></div>
    </div>
  );
};

export default modalWrapper;
