/*eslint-disable*/ // need to disable because of eslint error proptype

const Card = ({ name, description, image, price }) => {
  const handleClick = () => {
    window.location.href =
      "https://www.avito.ru/moskva?q=%D0%BA%D0%BE%D1%82%D1%8B";
  };
  return (
    <div className="card card-compact m-3 w-96 bg-base-100 shadow-xl">
      <figure className="h-60">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleClick}>
            Buy Now {price}$
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
