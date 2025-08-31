// import React, { useState } from "react";

// export default function PrayerTimes() {
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchPrayerTimes = async () => {
//     if (!city || !country) {
//       alert("Please enter both city and country");
//       return;
//     }
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
//       );
//       const json = await res.json();
//       setData(json.data);
//     } catch (err) {
//       console.error("Error fetching prayer times:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[url('./assets/download.jpg')] from-green-50 to-green-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-green-700 drop-shadow-md">
//         Islamic Prayer Times
//       </h1>

//       {/* Input Fields */}
//       <div className="flex gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Enter City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="border rounded-xl px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//         <input
//           type="text"
//           placeholder="Enter Country"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           className="border rounded-xl px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//         <button
//           onClick={fetchPrayerTimes}
//           className="bg-green-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-green-700 transition"
//         >
//           Get Times
//         </button>
//       </div>

//       {/* Loader */}
//       {loading && (
//         <p className="text-gray-600 font-medium">Fetching prayer times...</p>
//       )}

//       {/* Prayer Times Card */}
//       {data && (
//         <div className="bg-white shadow-2xl rounded-2xl p-6 w-96 border-t-4 border-green-600">
//           {/* Date Info */}
//           <div className="mb-4 text-center">
//             <h2 className="text-xl font-semibold text-green-700">
//               {city}, {country}
//             </h2>
//             <p className="text-gray-600">
//               {data.date.readable} |{" "}
//               <span className="font-medium text-green-700">
//                 {data.date.hijri.date} ({data.date.hijri.month.en})
//               </span>
//             </p>
//           </div>

//           {/* Timings */}
//           <ul className="divide-y divide-gray-200">
//             {["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Sunset", "Isha"].map(
//               (name) => (
//                 <li
//                   key={name}
//                   className="flex justify-between py-2 text-lg text-gray-700"
//                 >
//                   <span className="font-medium text-green-600">{name}</span>
//                   <span>{data.timings[name]}</span>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";

// export default function PrayerTimes() {
//   const [city, setCity] = useState("");
//   const [country, setCountry] = useState("");
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchPrayerTimes = async () => {
//     if (!city || !country) {
//       alert("Please enter both city and country");
//       return;
//     }
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
//       );
//       const json = await res.json();
//       setData(json.data);
//     } catch (err) {
//       console.error("Error fetching prayer times:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const timingsList = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Sunset", "Isha"];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[url('https://i.pinimg.com/1200x/44/21/0c/44210c902e9e2ddf263265ae5653adf3.jpg')] bg-center bg-cover p-6">
//       <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-emerald-600">
//         Islamic Prayer Times
//       </h1>

//       {/* Input Fields */}
//       <div className="flex flex-wrap gap-4 mb-6 justify-center">
//         <input
//           type="text"
//           placeholder="Enter City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="border-1 border-white rounded-xl px-4 py-2 shadow-md placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//         <input
//           type="text"
//           placeholder="Enter Country"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           className="border-white border-1 rounded-xl px-4 py-2 shadow-md placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//         />
//         <button
//           onClick={fetchPrayerTimes}
//           className="bg-[url('https://i.pinimg.com/736x/20/90/02/20900275bc0816638f4aa9cee6e4342d.jpg')] bg-cover bg-center text-white px-5 py-2 rounded-xl shadow-md hover:bg-purple-700 transition"
//         >
//           Get Times
//         </button>
//       </div>

//       {/* Loader */}
//       {loading && (
//         <p className="text-gray-300 font-medium">Fetching prayer times...</p>
//       )}

//       {/* Prayer Times Card */}
//       {data && (
//         <div className="bg-transparent shadow-2xl rounded-2xl p-6 w-full max-w-4xl ">
//           {/* Date Info */}
//           <div className="mb-6 text-center">
//             <h2 className="text-xl font-semibold text-white">
//               {city}, {country}
//             </h2>
//             <p className="text-gray-300">
//               {data.date.readable} |{" "}
//               <span className="font-medium text-white">
//                 {data.date.hijri.date} ({data.date.hijri.month.en})
//               </span>
//             </p>
//           </div>

//           {/* Prayer Timings as Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {timingsList.map((name, idx) => (
//               <div
//                 key={idx}
//                 className="relative  text-white  rounded-2xl p-6 flex flex-col items-center justify-center
//                 bg-gray-200/40 bg-cover bg-center hover:scale-105 transition transform"
//               >
//                 {/* Decorative Overlay */}
//                 <div className="absolute inset-0 rounded-2xl"></div>
//                 <div className="relative z-10 text-center">
//                   <h3 className="text-lg font-bold">{name}</h3>
//                   <p className="text-2xl font-semibold">{data.timings[name]}</p>

//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";

export default function PrayerTimes() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPrayerTimes = async () => {
    if (!city || !country) {
      alert("Please enter both City and Country");
      return;
    }
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
      );
      const json = await res.json();
      setData(json.data);
    } catch (err) {
      console.error("Error fetching prayer times:", err);
    } finally {
      setLoading(false);
    }
  };

  const timingsList = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Sunset", "Isha"];

  const prayerNamesArabic = {
    Fajr:"فجر",
    Sunrise: "طلوع آفتاب",
    Dhuhr: "ظهر",
    Asr: "عصر",
    Maghrib: "مغرب",
    Sunset: "غروب",
    Isha: "عشاء"
  };

  return (
    <div
  className="relative min-h-screen flex flex-col items-center justify-center 
  bg-[url('https://i.pinimg.com/1200x/e2/25/91/e2259162af8af621699dca00f284f3fd.jpg')] 
  sm:bg-[url('https://i.pinimg.com/1200x/44/21/0c/44210c902e9e2ddf263265ae5653adf3.jpg')] 
  bg-center bg-cover bg-fixed sm:bg-center p-6"
>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
          Salah Times
        </h1>

        {/* Inputs + Button */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 justify-center">
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchPrayerTimes()}
            className="border border-white rounded-xl px-4 py-2 shadow-md 
            placeholder-gray-300 text-white bg-transparent 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchPrayerTimes()}
            className="border border-white rounded-xl px-4 py-2 shadow-md 
            placeholder-gray-300 text-white bg-transparent 
            focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={fetchPrayerTimes}
            className="bg-purple-700/80 text-white px-5 py-2 rounded-xl shadow-md 
            hover:bg-purple-800 transition"
          >
            Get Times
          </button>
        </div>

        {/* Loader */}
        {loading && (
          <p className="text-gray-200 font-medium">Fetching prayer times...</p>
        )}

        {/* Prayer Times */}
        {data && (
          <div className="bg-transparent rounded-2xl p-6 w-full max-w-4xl">
            {/* Date Info */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-semibold text-white">{city}, {country}</h2>
              <p className="text-gray-300">
                {data.date.readable} |{" "}
                <span className="font-medium text-white text-xl">
                  {data.date.hijri.date} ({data.date.hijri.month.en})
                </span>
              </p>
            </div>

            {/* Prayer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {timingsList.map((name, idx) => (
                <div
                  key={idx}
                  className="relative text-white rounded-2xl p-6 flex flex-col items-center justify-center
                  bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition transform"
                >
                  <div className="relative z-10 text-center">
                    
                    <h3 className="text-2xl font-bold">{prayerNamesArabic[name]}</h3>
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <p className="text-3xl font-semibold">{data.timings[name]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
