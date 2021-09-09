export default function ImagePopup(props) {
    return (
      <div className={`popup popup_type_pic ${props.isOpen ? 'popup_opened' : ''}`}>
        <figure className="popup__pic-container">
          <button type="button" className="popup__close" aria-label="Закрыть окно" onClick={props.onClose}></button>
          <img src={props.data.link} alt={props.data.name} className="popup__pic"/>
          <figcaption className="popup__title">{props.data.name}</figcaption>
        </figure>
      </div>
    )
  }