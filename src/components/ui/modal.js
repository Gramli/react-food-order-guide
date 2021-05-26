import styles from "./modal.module.css";
import ReactDOM from 'react-dom';

const portalElement = document.getElementById("overlays");

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>
};

const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
};

const Modal = (props) => {
  return (
      <>
      {ReactDOM.createPortal(<BackDrop onClick={props.onClick}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
      </>
  );
};

export default Modal;
