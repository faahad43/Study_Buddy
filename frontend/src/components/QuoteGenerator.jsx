import React, { useState, useEffect } from 'react';

const QuoteGenerator = ({ display }) => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center h-full ${display}`}>
      <p className="text-3xl text-center mb-4 text-text leading-normal">{quote}</p>
      <button
        onClick={fetchQuote}
        className=" bg-lightdark opacity-90 text-3xl h-[40px] w-[35px] font-semibold text-white rounded  hover:opacity-100 transition"
      >
        ⟳
      </button>
    </div>
  );
};

export default QuoteGenerator;
