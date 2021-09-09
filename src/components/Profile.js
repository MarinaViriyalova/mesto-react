export default function Profile(props) {
    return (
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img src={props.profileAvatar} alt="Аватар пользователя" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <div className="profile__title">
          <h1 className="profile__title-text">{props.profileName}</h1>
          <button type="button" className="profile__edit-button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle-text">{props.profileDescription}</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить место" onClick={props.onAddPlace}></button>
      </section>
    )
  }
