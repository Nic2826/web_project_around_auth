import close from '../images/close.png';

export default function InfoTooltip({onClose, isOpen}) {
    return (
        <div className={`popup-tool  ${isOpen ? "popup_open" : ""}`} id="tooltip">
            <div className="popup__overlay-tool"></div>
            <div className="popup__content-tool">
            <img 
            src={close} alt="Close icon" 
            className="popup__close-icon popup__close-icon-place" 
            onClick={onClose}/>
            <img 
            alt="icon" 
            className="popup__icon popup__icon-error"
            onClick={onClose}/>
            <p className="popup__text">¡Correcto! 
                <br></br>
                ya estás registrado.</p>
            </div>           
        </div>
    )
}
