import data_product from "./Assets/Data";
import Item from "./Item";
function Popular() {
  return (
    <div className="container mx-auto py-5 px-5 md:px-10 lg:px-20">
      <div className="my-3 md:my-8 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-medium text-[#171717] ">
          POPULAR IN WOMEN
        </h2>
        <hr className="w-[170px] md:w-[200px] mt-2 h-[3px] rounded bg-[#252525] mb-10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5 justify-center">
        {data_product.map((item) => {
          const { id, name, image, new_price, old_price } = item;
          return (
            <Item
              key={id}
              id={id}
              name={name}
              image={image}
              new_price={new_price}
              old_price={old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
