import React from 'react';
import GreetingCard from './components/GreetingCard';
import Header from './components/Header';

const App = () => {
  const cards = [
    { title: 'Happy Birthday!', message: 'Wishing you a fantastic day filled with joy!', bgColor: 'bg-red-500' },
    { title: 'Congratulations!', message: 'Great job on your achievement!', bgColor: 'bg-green-500' },
    { title: 'Thank You!', message: 'Thanks for your kindness and support!', bgColor: 'bg-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <Header />
      <main className="p-4 flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <GreetingCard
            key={index}
            title={card.title}
            message={card.message}
            bgColor={card.bgColor}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
