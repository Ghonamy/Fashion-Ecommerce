import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="hover:transition-all hover:scale-105 duration-300 flex flex-col justify-center items-center">
      <Link to={`/product/${props.id || "no-id"}`} state={{ product: props }}>
        <img
          onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
          src={props.image}
          alt={props.name}
          className="w-[300px] md:w-[400px] rounded cursor-pointer"
        />
      </Link>
      <h3 className="my-[8px] text-center md:text-start text-[15px]">{props.name}</h3>
      <div className="flex gap-5 items-center">
        <p className="text-[#374151] text-[16px] font-medium">
          ${props.new_price}
        </p>
        <p className="text-[#8c8c8c] text-[16px] font-medium line-through">
          ${props.old_price}$
        </p>
      </div>
    </div>
  );
}

export default Item;
