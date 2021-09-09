export default function Card(props) {
    return (
      <li className="element">
        <button type="button" className="element__delete-button" aria-label="Удалить карточку" onClick={props.onCardDelete}></button>
        <img src={props.link} alt={props.name} className="element__image" onClick={() => props.onCardClick(props)}/>
        <div className="element__description">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__likes">
            <button type="button" className="element__like-button" aria-label="Поставить лайк"></button>
            <span className="element__likes-number">{props.likes.length ? props.likes.length : ''}</span>
          </div>
        </div>
      </li>
    )
  }