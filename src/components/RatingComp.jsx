import { Star, Star1, StarSlash } from "iconsax-react";

const RatingComp = ({ stars }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {arr.map((itm, i) =>
        i < stars ? (
          <Star1 size={12} variant="Bold" color="green" />
        ) : (
          <Star1 size={12} variant="Outline" color="green" />
        )
      )}
    </div>
  );
};

export default RatingComp;
