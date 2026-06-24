import React from "react";
import { TbLoader3 } from "react-icons/tb";

const Loader = () => {
  return (
    <div className="mt-block-gap flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-primary">
        <span className="material-symbols-outlined animate-spin">
          <TbLoader3 />
        </span>
        <span className="font-code-md text-code-md">
          FETCHING_NEXT_CHUNKS...
        </span>
      </div>
    </div>
  );
};

export default Loader;
