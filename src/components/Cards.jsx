import CardItem from "./CardItem";
const Cards = ({faqs,handleCLick,selectedId}) => {
  return (
      <div
        
          className='flex justify-center mt-[100px] items-center flex-col'>
      {faqs.map((faq) => (
          <CardItem
              key={faq.id}
              selectedId={selectedId}
         handleClick={handleCLick}
              faq={faq}></CardItem>
      ))}
    </div>
  );
};

export default Cards;