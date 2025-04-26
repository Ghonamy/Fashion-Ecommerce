import new_collections from "./Assets/NewCollections";
import Item from "./Item";
function NewCollections() {
  return (
    <div className="container mx-auto py-5 px-5 md:px-10 lg:px-20">
      <div className="my-8 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-medium text-[#171717] ">
          NEW COLLECTIONS
        </h2>
        <hr className="w-[170px] md:w-[200px] mt-2 h-[3px] rounded bg-[#252525] mb-10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {new_collections.map((item) => {
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

export default NewCollections;
