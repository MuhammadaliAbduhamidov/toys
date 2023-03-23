import React from "react";
import Skeleton from "react-loading-skeleton";

function CardSkeleton({ dates, selectedCategory }) {
  return (
    <div className="card-skeleton">
      {dates
        .filter((item) => item.type == selectedCategory)
        .map((_, i) => {
          return <Skeleton key={i} borderRadius={"14.8387px"} height={270} />;
        })}
    </div>
  );
}

export default CardSkeleton;
