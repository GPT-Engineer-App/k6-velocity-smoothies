import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showFact, setShowFact] = useState(false);

  const catFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats can jump up to six times their length."
  ];

  const randomFact = () => catFacts[Math.floor(Math.random() * catFacts.length)];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">All About Cats</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" 
            alt="Cute cat" 
            className="mx-auto object-cover w-full h-64 sm:h-96"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fascinating Felines</h2>
            <p className="text-gray-600 mb-4">
              Cats are one of the most popular pets in the world. Known for their independence,
              grace, and playful nature, cats have been companions to humans for thousands of years.
              They come in a variety of breeds, each with unique characteristics and personalities.
            </p>
            <p className="text-gray-600 mb-4">
              Whether they're curled up for a nap, chasing a toy, or purring contentedly in your lap,
              cats have a special way of bringing joy and comfort to our lives.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setShowFact(!showFact)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {showFact ? "Hide Cat Fact" : "Show Cat Fact"}
          </Button>
          
          {showFact && (
            <p className="mt-4 text-lg text-gray-700 bg-yellow-100 p-4 rounded-lg">
              {randomFact()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
