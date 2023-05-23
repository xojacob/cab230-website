import styles from "./style";
export default function RelatedMovieDetails({
  movieName,
  imdbRating,
  movieId,
  category,
}) {
  return (
    <div className="py-5 px-5">
      <div
        className={`transition ${styles.backgroundGradient2} w-[300px] h-[220px] flex flex-col justify-between`}
      >
        <h2 className="font-bold text-2xl font-poppins pt-8 text-left pl-2 drop-shadow-md ">
          {movieName}
        </h2>

        <h2 className="font-poppins pl-3 pb-3 text-left drop-shadow-md">
          Contribution: {category}
        </h2>
        <div className="justify-between flex">
          <h2 className="font-poppins ml-2 pl-2 pr-2 mb-3 text-left drop-shadow-md rounded-full bg-indigo-900 bg-opacity-50">
            IMDB Rating: {imdbRating}
          </h2>
          <h2> </h2>
        </div>
      </div>
      <div className="flex justify-between font-poppins py-auto px-3 my-auto w-[300px]">
        <p className="font-thin text-xs py-auto my-auto ">ID: {movieId}</p>
      </div>
    </div>
  );
}
