import { Icon } from "@iconify/react";
import Chef from "./Chef";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
const Chefs = () => {
  const theChefs = useLoaderData();
  const [chefsStart, setChefsStart] = useState(0);
  const [chefsEnd, setChefsEnd] = useState(3);
  const chefStartHandler=()=>{
    if(chefsStart>0){
        setChefsStart(chefsStart-1);
        setChefsEnd(chefsEnd-1)
    }
  }
  const chefEndHandler=()=>{
    if(chefsEnd<theChefs.length){
        setChefsStart(chefsStart+1);
        setChefsEnd(chefsEnd+1)
    }
  }
  return (
    <>
      <h4 className="text-2xl font-bold mt-4 mb-3">
        <span className="border-b-2 pb-1 text-orange-500 border-orange-500">Our </span>
        Chefs
      </h4>
      <div className="flex gap-2 mt-2">
        <div className="flex items-center">
          <Icon
            onClick={chefStartHandler}
            className="text-5xl text-orange-500 hover:text-orange-600 cursor-pointer"
            icon="heroicons-outline:chevron-left"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {theChefs.slice(chefsStart, chefsEnd).map((chefs) => (
            <Chef key={chefs.id} chefs={chefs}></Chef>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Icon
            onClick={chefEndHandler}
            className="text-5xl text-orange-500 hover:text-orange-600 cursor-pointer"
            icon="heroicons-outline:chevron-right"
          />
        </div>
      </div>
    </>
  );
};

export default Chefs;
