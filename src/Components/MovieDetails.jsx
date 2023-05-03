import styles from "./style";
export default function MovieDetails({ title, year, imdbID }) {
  return (
    <div className="py-5 px-5">
      <div
        className={`transition ${styles.backgroundGradient2} w-[300px] h-[220px] flex flex-col justify-between`}
      >
        <h2 className="font-bold text-2xl font-poppins pt-8 text-left pl-2 drop-shadow-md">
          {title}
        </h2>

        <h2 className="font-poppins pl-3 pb-3 text-left drop-shadow-md">
          {year}
        </h2>
      </div>
      <div className="flex justify-between font-poppins py-auto px-3 my-auto w-[300px]">
        <p className="font-thin text-xs py-auto my-auto ">ID: {imdbID}</p>
      </div>
    </div>
  );
}
