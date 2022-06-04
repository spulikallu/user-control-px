import "./Dailog.css";

function Dailog(props) {
  const onClose = () => {
    props.onCloseModelHandler();
  };

  return (
    <div>
      <button id="myBtn">Open Modal</button>
      <div id="myModal" className={`dailog ${props.open ? "open" : "close"}`}>
        <div className="dailog__content">
          <span className="dailog__icon" onClick={onClose}>
            &times;
          </span>
          <p>Some text in the Modal</p>
        </div>
      </div>
    </div>
  );
}

export default Dailog;
