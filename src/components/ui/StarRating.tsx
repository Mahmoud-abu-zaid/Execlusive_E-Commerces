import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
interface StarRatingProps {
  rating: number;
}
export default function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400">
          <FaStar />
        </span>
      ))}

      {hasHalfStar && (
        <span className="text-yellow-400">
          <FaStarHalfAlt />
        </span>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">
          <FaStar />
        </span>
      ))}
    </div>
  );
}
