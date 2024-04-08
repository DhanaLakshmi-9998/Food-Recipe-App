import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;
  const id = uri?.split("#")[1];
  return (
    <Link
      to={`/recipes/${id}`}
      className=" flex flex-col w-80 truncate px-0 flex-wrap shadow-xl gap-1 border-[1px] rounded-2xl border-gray"
    >
      <div className="bg_gradient shadow h-64">
        {/* image */}
        <div className="h-40 flex justify-center overflow-hidden items-center ">
          <img src={image} alt={label} className="block w-full" />
        </div>

        {/* details */}
        <div className="p-3 ">
          <p className="text-white font-semibold overflow-hidden">{label}</p>

          <div className="mt-2">
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full text-green-500">
              {mealType}
            </span>
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
