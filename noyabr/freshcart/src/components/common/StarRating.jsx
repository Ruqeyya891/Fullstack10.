import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TOTAL_STARS = 5;

export default function StarRating({ rating }) {
  return (
    <span className="flex items-center gap-0.5 text-yellow-400" aria-label={`${rating} out of 5`}>
      {Array.from({ length: TOTAL_STARS }, (_, i) => {
        const value = i + 1;
        if (rating >= value) return <FaStar key={i} />;
        if (rating >= value - 0.5) return <FaStarHalfAlt key={i} />;
        return <FaRegStar key={i} />;
      })}
    </span>
  );
}
