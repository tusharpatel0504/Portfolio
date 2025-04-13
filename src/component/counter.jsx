import React from 'react';

const Counter = () => {
  const data = [
    { value: '2+', label: 'Years of Experience' },
    { value: '100+', label: 'Satisfied Clients' },
    { value: '10+', label: 'Completed Projects' },
    { value: '90%', label: 'Client Retention Rate' },
  ];

  return (
    <div className="bg-black w-full py-15 px-6 flex flex-wrap justify-center gap-6 -mt-[50px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-900 text-white px-10 py-6 rounded-xl shadow-md w-64 text-center"
        >
          <h2 className="text-4xl font-bold mb-2">{item.value}</h2>
          <p className="text-sm opacity-80">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
