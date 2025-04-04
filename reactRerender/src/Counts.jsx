import { memo, useRef } from "react";

function Counts() {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <div className="mt-3 font-display text-center">
      <p>Counts components Renders</p>
      <span className="text-red-600">{renderCount.current++} times</span>
    </div>
  );
}

//export default Counts;
export default memo(Counts);
