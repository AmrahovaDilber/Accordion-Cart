import { useState } from "react";

import Cards from "./components/Cards";
const faqs = [
  {
    id: 1,
    number: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    number: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    number: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }
  return (
    <div>
      <Cards
        faqs={faqs}
        handleCLick={handleClick}
        selectedId={selectedId}
      ></Cards>
    </div>
  );
}

export default App;
