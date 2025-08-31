import logo from "../Assets/Logo.png";

const ToastAlternative = () => {
  return (
    <>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          // data-bs-autohide="false"
        >
          <div className="toast-header bg-success">
            <img src={logo} height={30} className="rounded me-2" alt="Logo" />
            <strong className="me-auto fs-6 text-white">TV Box</strong>
            {/* <small>11 mins ago</small> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body text-black">
            ¡Alias copiado exitosamente!
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastAlternative;
