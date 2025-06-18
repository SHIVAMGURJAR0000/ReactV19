import { memo, useRef } from "react";
// import React from "react";
const Counts = () => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but i have now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      </p>
    </div>
  );
};

// export default React.memo(Counts);
export default memo(Counts);
