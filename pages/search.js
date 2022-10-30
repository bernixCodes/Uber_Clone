import { BsArrowLeft, BsDot, BsSquareFill } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";

const Search = () => {
  return (
    <>
      <Head>
        <title>Uber | Search</title>
        <meta name="description" content="Uber Clone" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="bg-gray-200 h-screen">
        {/* Button Container */}
        <div className="bg-white px-3">
          <Link href="/">
            <span className="text-3xl font-bold ">
              <BsArrowLeft />
            </span>
          </Link>
        </div>

        {/* Input Container */}
        <div className="flex items-center gap-5 px-3 bg-white">
          {/* icons */}
          <div className="flex flex-col items-center">
            <span className="text-gray-300">
              <BsDot />
            </span>
            <span>
              <TbMinusVertical className="text-gray-300" />
            </span>
            <span>
              <BsSquareFill className="w-2" />
            </span>
          </div>
          {/* inputs */}
          <div className="flex flex-col gap-2 flex-1 my-2">
            <input
              placeholder="Enter pickup location"
              className="outline-none bg-gray-200 p-2 rounded placeholder:text-gray-400"
            />
            <input
              placeholder="Where to?"
              className="outline-none bg-gray-200 p-2 rounded placeholder:text-gray-400"
            />
          </div>
          {/* add */}
          <div className="flex items-center justify-center ">
            <span className="bg-gray-200  p-2 rounded-full ">
              <GrFormAdd />
            </span>
          </div>
        </div>

        {/* saved places */}
        <div className="bg-white mt-2 p-2 flex gap-4 items-center box-border">
          <span className="text-xl bg-gray-200 p-2 rounded-full">
            <AiOutlineStar />
          </span>
          <p className="font-medium">Saved Places</p>
        </div>

        {/* confirm Location */}
        <div className="m-3  p-3 text-center text-xl bg-black text-white rounded ">
          <p className="opacity-75">Confirm Location</p>
        </div>
      </div>
    </>
  );
};

export default Search;
