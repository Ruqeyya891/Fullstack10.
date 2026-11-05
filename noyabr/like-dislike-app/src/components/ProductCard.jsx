import { useState } from "react";
import {
    FaThumbsUp,
    FaThumbsDown,
    FaHeart
} from "react-icons/fa";

function ProductCard() {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            setIsLiked(true);
            setIsDisliked(false);
        }
    };

    const handleDislike = () => {
        if (!isDisliked) {
            setLikes(0);
            setIsLiked(false);
            setIsDisliked(true);
        } else {
            setIsDisliked(false);
        }
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="product-card">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQHy1W6fZZecGVaVN3JwlKhWv9sv-lYu_-wxhETgL5A&s=10"
                alt="Product"
            />

            <h2>MayBelline</h2>
            <p>: Kirpiklərə kökdən uca inanılmaz uzunluq və həcm verir. Bambuk ekstraktı ilə zəngindir və elastik fırçası sayəsində ən qısa kirpikləri belə tək-tək ayırır.</p>

            <div className="actions">
                <button
                    onClick={handleLike}
                    className={isLiked ? "active-like" : ""}
                >
                    <FaThumbsUp />
                    {likes}
                </button>
                <button
                    onClick={handleDislike}
                    className={isDisliked ? "active-dislike" : ""}>
                    <FaThumbsDown />
                </button>
                <button
                    onClick={handleFavorite}
                    className={isFavorite ? "active-heart" : ""}
                >
                    <FaHeart />
                </button>
            </div>
        </div>
    );
}
export default ProductCard;

