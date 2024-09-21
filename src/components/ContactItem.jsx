export default function ContactItem({ imgUrl, name, email }) {
  return (
    <div className="contact__item__container">
      <div className="contact__detail__container">
        <img
          src={imgUrl ?? "../../public/images/images.png"}
          width={128}
          height={128}
          alt={name}
        />
        <div className="contact__detail__container-data">
          <p className="main__container-title">{name}</p>
          <p className="main__container-paragraph">{email}</p>
        </div>
      </div>
      <button className="main__container-button main__container-button-danger">
        x
      </button>
    </div>
  );
}
