import { useState } from "react";

import Head from "next/head";
import axios from "axios";
import Swal from "sweetalert2";

import PersonalMessage from "./personaMessage";

const API_URL = "http://localhost:3000/api/picoPlaca";

export default function Index() {
  const [plateNumber, SetPlateNumber] = useState(""),
    [date, SetDate] = useState(""),
    [time, SetTime] = useState(""),
    [loading, SetLoading] = useState(false),
    [response, SetResponse] = useState("");

  const canCirculate = async () => {
    SetLoading(true);

    if (plateNumber == "" || date == "" || time == "") {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Fill out the entire form before continuing",
        showConfirmButton: true,
      }).then(() => {
        SetLoading(false);
      });
    } else {
      let postData = {
        data: {
          plateNumber,
          date,
          time,
        },
      };

      axios
        .post(API_URL, postData)
        .then((response) => {
          response.data.circulate ? SetResponse("Yes") : SetResponse("No");
          SetLoading(false);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="w-full h-screen text-white">
      <Head>
        <title>Johao Perlaza - Stack Builders Exercise </title>
        <meta name="description" content="Stack Builders Exercise." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <div
        className="absolute top-0 w-full h-full bg-cover"
        style={{
          backgroundImage: "url('/background-image.jpg')",
        }}
      >
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>

      <div className="relative h-full">
        <h1 className="text-4xl font-bold text-center py-6">
          "Pico y Placa" predictor.
        </h1>

        <div className="flex lg:flex-row flex-col justify-center w-full">
          <section className="lg:w-1/2 w-full h-auto lg:px-12 px-2 py-8">
            <div className="flex flex-col items-center">
              <div className="flex flex-col lg:w-1/3 w-3/4 py-1 px-1">
                <label>
                  <i className="fas fa-id-badge mr-1"></i>
                  License plate number
                </label>
                <input
                  className="border border-black rounded px-2 text-gray-500"
                  type="text"
                  placeholder="Ex: 000000"
                  onChange={(event) => SetPlateNumber(event.target.value)}
                />
              </div>

              <div className="flex flex-col lg:w-1/3 w-3/4 py-1 px-1">
                <label>
                  <i className="fas fa-calendar-day mr-1"></i>
                  Date
                </label>
                <input
                  className="border border-black rounded px-2 text-gray-500"
                  type="date"
                  onChange={(event) => SetDate(event.target.value)}
                />
              </div>

              <div className="flex flex-col lg:w-1/3 w-3/4 py-1 px-1">
                <label>
                  <i className="fas fa-user-clock mr-1"></i>
                  Time
                </label>
                <input
                  className="border border-black rounded px-2 text-gray-500"
                  type="text"
                  placeholder="Ex: 17:00"
                  onChange={(event) => SetTime(event.target.value)}
                />
              </div>

              <div className="w-1/3 py-1 px-1 text-center">
                <button
                  className="border-2 bg-blue-500 hover:bg-blue-400 rounded px-3 py-1"
                  onClick={() => canCirculate()}
                >
                  Check
                  <i className="fas fa-chevron-right ml-1"></i>
                </button>
              </div>
            </div>
          </section>

          <section className="lg:w-1/2 w-full h-auto lg:px-12 px-2 py-8">
            <h1 className="text-2xl font-bold text-center">
              Can be on the road?
            </h1>
            {loading ? (
              <div className="w-full py-4 flex justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="w-full py-4 flex justify-center">
                {response ? (
                  response == "Yes" ? (
                    <h1 className="text-6xl font-bold text-green-500">
                      <i className="fas fa-check-circle mr-1"></i>
                      {response}
                    </h1>
                  ) : (
                    <h1 className="text-6xl font-bold text-red-500">
                      <i className="fas fa-times mr-1"></i>
                      {response}
                    </h1>
                  )
                ) : (
                  <h1 className="text-6xl font-bold text-blue-500">---</h1>
                )}
              </div>
            )}
          </section>
        </div>

        <PersonalMessage />
      </div>
    </div>
  );
}
