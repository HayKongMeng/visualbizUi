"use client";
import { Spotlight } from "../ui/Soptlight";

export function ErrorComponent({ reset, title = "Something is missing." }) {
  return (
    <div className="h-full min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] gap-6 relative overflow-hidden">
      <Spotlight className="-top-40 left-20 " fill="white" />
      <div className=" p-4 flex flex-col gap-5 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="!text-[7.5rem] md:text-7xl font-bold text-center bg-clip-text text-white text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {!title ? "Something is breaking right now." : title}
        </h1>
        {reset && (
          <div className="mt-4 hover:scale-110 transition-all font-normal text-3xl text-neutral-300 max-w-lg text-center mx-auto">
            <button
              onClick={() => reset()}
              className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-normal  hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              {<span className="relative z-20 text-white">Retry</span>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
