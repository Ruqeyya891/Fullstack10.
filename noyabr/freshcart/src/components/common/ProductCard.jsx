import { FiEye, FiHeart, FiRepeat, FiPlus } from "react-icons/fi";
import StarRating from "./StarRating";

const badgeColors = {
  Sale: "bg-primary",
  Hot: "bg-red-500",
};

const quickActions = [
  { title: "Quick View", icon: FiEye },
  { title: "Wishlist", icon: FiHeart },
  { title: "Compare", icon: FiRepeat },
];

export default function ProductCard({ product, buttonText = "Add" }) {
  const { title, category, rating, reviews, price, oldPrice, badge, image } = product;

  return (
    <article className="group relative rounded-lg border border-gray-200 bg-white p-4 transition hover:shadow-lg">
      {badge && (
        <span
          className={`absolute left-3 top-3 z-10 rounded px-2 py-0.5 text-xs font-medium text-white ${badgeColors[badge] ?? "bg-primary"
            }`}
        >
          {badge}
        </span>
      )}

      <a href="#" className="block">
        <img src={image} alt={title} className="mx-auto h-40 w-full object-contain" />
      </a>

      <div className="absolute inset-x-0 top-32 flex justify-center gap-2 opacity-0 transition group-hover:opacity-100">
        {quickActions.map(({ title: label, icon: Icon }) => (
          <button
            key={label}
            title={label}
            className="rounded bg-white p-2 text-gray-700 shadow hover:text-primary"
          >
            <Icon size={14} />
          </button>
        ))}
      </div>

      <a href="#" className="mt-3 block text-xs text-gray-500 hover:text-primary">
        {category}
      </a>

      <h4 className="mt-1 text-sm font-semibold text-gray-900">
        <a href="#" className="hover:text-primary">
          {title}
        </a>
      </h4>

      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
        <StarRating rating={rating} />
        <span>
          {rating}
          {reviews !== undefined && ` (${reviews})`}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="font-semibold text-gray-900">${price}</span>
          {oldPrice && <span className="ml-2 text-sm text-gray-400 line-through">${oldPrice}</span>}
        </div>

        <button className="flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-dark">
          <FiPlus size={14} />
          {buttonText}
        </button>
      </div>
    </article>
  );
}
