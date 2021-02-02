import { useState } from "react";

export default function Index() {
  const [plateNumber, SetPlateNumber] = useState(""),
    [date, SetDate] = useState(""),
    [time, SetTime] = useState("");

  const canTransit = () => {
    console.log({
      plateNumber,
      date,
      time,
    });
  };

  return (
    <div className="w-full h-screen bg-gray-300">
      <h1 className="text-4xl font-bold text-center py-6">Pico y Placa</h1>

      <div className="flex w-full">
        <section className="w-1/2 h-auto px-12">
          <div className="flex flex-col items-center">
            <div className="flex flex-col w-1/3 py-1 px-1">
              <label>License plate number</label>
              <input
                className="border-2"
                type="text"
                placeholder="Ex: 000000"
                onChange={(event) => SetPlateNumber(event.target.value)}
              />
            </div>

            <div className="flex flex-col w-1/3 py-1 px-1">
              <label>Date</label>
              <input
                className="border-2"
                type="date"
                onChange={(event) => SetDate(event.target.value)}
              />
            </div>

            <div className="flex flex-col w-1/3 py-1 px-1">
              <label>Time</label>
              <input
                className="border-2"
                type="text"
                placeholder="Ex: 17:00"
                onChange={(event) => SetTime(event.target.value)}
              />
            </div>

            <div className="w-1/3 py-1 px-1 text-center">
              <button
                className="border-2 bg-blue-500 hover:bg-blue-400 rounded px-3 py-1"
                onClick={() => canTransit()}
              >
                Check
              </button>
            </div>
          </div>
        </section>

        <section className="w-1/2 h-auto px-12">
          <h1 className="text-2xl font-bold text-center">Result</h1>
        </section>
      </div>
    </div>
  );
}
