import "./Dailog.css";

function Dailog(props) {
  const onClose = () => {
    props.onCloseModelHandler();
    console.log(props.message);
  };

  return (
    <div>
      <div id="myModal" className={`dailog ${props.open ? "open" : "close"}`}>
        <div className="dailog__content">
          <span className="dailog__icon" onClick={onClose}>
            &times;
          </span>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Dailog;
