import React from "react";
import list from "../../public/list.json";

const Free = () => {
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto items-center md:px-10 py-4">
        <h2 className="font-bold text-xl pb-2">Demo Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa quod laboriosam possimus a nobis facilis tenetur accusantium vero autem?</p>
      </div>
    </>
  );
};

export default Free;
