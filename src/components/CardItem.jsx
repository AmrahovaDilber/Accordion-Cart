import { FaPlus, FaMinus } from "react-icons/fa";

const CardItem = ({ faq, handleClick, selectedId }) => {
  return (
    <div
      className="mb-3 flex  justify-between border w-[650px] py-4 px-6"
    >
      <div className="mr-4 w-[40px] h-[40px] bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-xl">
        <span>{faq.number}</span>
      </div>
      <div className="flex-1 flex flex-col">
        <h1 className="text-lg font-semibold text-black">{faq.title}</h1>
        {selectedId===faq.id && <p>{faq.text}</p>}
      </div>

      <div onClick={() => handleClick(faq.id)}>
        {selectedId===faq.id ? <FaMinus /> : <FaPlus />}
      </div>
    </div>
  );
};
export default CardItem;
