import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Thumbline({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt=""
        layout="responsive"
        height={1000}
        width={1920}
      />
      <div className="pt-2">
        <h2 className=" mt-2 text-3xl  font-bold text-yellow-400 hover:font-extrabold">
          {result.title || result.original_name}
        </h2>
        <p className=" mt-1 truncate max-w-md">{result.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}.`}
          {result.release_date || `${result.first_air_date}.`}
          <ThumbUpIcon className="h-5 mx-2 active:hover:text-blue-800" />
        </p>
      </div>
    </div>
  );
}

export default Thumbline;
// img components
