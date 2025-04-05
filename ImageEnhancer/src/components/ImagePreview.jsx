import Loading from "./Loading";

function ImagePreview(props) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        <div className="h-80 flex items-center justify-center bg-gray-200">
          {props.upload ? (
            <img src={props.upload} alt="" className="h-full object-contain" />
          ) : (
            <p>No Image Selected</p>
          )}
        </div>
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>
        <div className="h-80 flex items-center justify-center bg-gray-200">
          {props.loading ? (
            <Loading />
          ) : props.enhanced ? (
            <img
              src={props.enhanced}
              alt=""
              className="h-full object-contain"
            />
          ) : (
            <p>No Enhanced Image</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
