import { useState } from "react";

type Peep = {
  id: number;
  name: string;
  src: string;
  isMoving?: boolean;
};

const peeps: Peep[] = [
  { id: 1, name: "Hu Tao", src: "/gifs/hu-tao-woo.gif" },
  { id: 2, name: "Chansey", src: "/gifs/chansey-pokemon.gif" },
  { id: 3, name: "Miku", src: "/gifs/miku_leek.gif" },
];

function PeepsSelection() {
  const [activePeeps, setActivePeeps] = useState<number[]>([]);

  const togglePeep = (id: number) => {
    setActivePeeps((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const Controller = () => (
    <div className="flex flex-wrap gap-2 justify-center">
      {peeps.map((peep) => (
        <button
          key={peep.id}
          className={`btn btn-sm ${
            activePeeps.includes(peep.id) ? "btn-success" : "btn-outline"
          }`}
          onClick={() => togglePeep(peep.id)}
        >
          {peep.name}
        </button>
      ))}
    </div>
  );

  const Stage = () => (
    <div className="fixed bottom-0 left-0 w-full flex gap-2 p-2 justify-center z-20 pointer-events-none">
      {activePeeps.map((id) => {
        const peep = peeps.find((p) => p.id === id);
        if (!peep) return null;
        return (
          <img
            key={id}
            src={peep.src}
            alt={peep.name}
            className="h-16 w-16 pointer-events-auto transition-transform duration-300 ease-out transform hover:scale-110"
          />
        );
      })}
    </div>
  );

  return { Controller, Stage };
}

export default PeepsSelection;