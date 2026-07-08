import BodyImg from "../assets/Looper-BG.png";
import Rectangle from "../assets/Rectangle-4.png";

const Body = () => {
  return (
    <section className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-violet-200/70 bg-gradient-to-br from-[#1f0f3d] via-[#4c1d95] to-[#7c3aed] shadow-2xl lg:max-w-7xl">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          src={BodyImg}
          alt="Abstract background"
        />
        <div className="relative grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-4 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.3em] text-violet-100">
              Welcome to ScholarConnect
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Empowering humanity through scientific exploration.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-violet-100/90 sm:text-xl">
              Discover publications, articles, and workshops in one polished academic space built for collaboration.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur-lg">
            <img
              className="h-56 w-full rounded-[1.25rem] object-cover shadow-xl"
              src={Rectangle}
              alt="Research highlight"
            />
            <div className="mt-5 space-y-3 text-sm text-violet-50 sm:text-base">
              <div className="rounded-2xl bg-slate-950/20 p-3">
                <p className="font-semibold">Live academic community</p>
                <p className="mt-1 text-violet-100/80">Track trends, connect with researchers, and share your work.</p>
              </div>
              <div className="rounded-2xl bg-slate-950/20 p-3">
                <p className="font-semibold">Built for discovery</p>
                <p className="mt-1 text-violet-100/80">Explore new ideas through curated publication and workshop highlights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;

// Shimmer
// import React, { useState, useEffect } from "react";
// import BodyImg from "../assets/Looper-BG.png";
// import Rectangle from "../assets/Rectangle-4.png";

// const Body = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate an asynchronous image loading process
//     const image = new Image();
//     image.src = BodyImg;
//     image.onload = () => {
//       setIsLoading(false);
//     };
//   }, []);

//   return (
//     <div className="">
//       <div className="image-container relative">
//         {isLoading ? (
//           <div className="absolute h-full w-full bg-gradient-to-r from-transparent to-transparent via-white animate-shimmer"></div>
//         ) : null}
//         <img className={`absolute ${isLoading ? "hidden" : ""}`} src={BodyImg} alt="Body image" />
//       </div>
//       {/* Rest of your component */}
//     </div>
//   );
// };

// export default Body;

// @keyframes shimmer {
//   0% {
//     background-position: -1000px 0;
//   }
//   100% {
//     background-position: 1000px 0;
//   }
// }
