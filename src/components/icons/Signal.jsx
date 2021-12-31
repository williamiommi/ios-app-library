const Signal = ({ className }) => {
  return (
    <>
      <svg
        className={`relative h-4 w-4 -top-0.5 ${className}`}
        viewBox="0 0 128 128"
      >
        <g>
          <path
            d="M18.863,86.36h-5.974C7.98,86.36,4,90.326,4,95.218v19.915c0,4.897,3.98,8.86,8.889,8.86h5.974   c4.909,0,8.889-3.963,8.889-8.86V95.218C27.751,90.326,23.771,86.36,18.863,86.36z"
            className="fill-white"
          />
          <path
            d="M51.299,63.884h-7.034c-4.907,0-8.887,3.966-8.887,8.858v1.405v39.586v1.404   c0,4.896,3.98,8.859,8.887,8.859h7.034c4.909,0,8.889-3.963,8.889-8.859v-1.404V74.147v-1.405   C60.188,67.85,56.208,63.884,51.299,63.884z"
            className="fill-white"
          />
          <path
            d="M83.206,41.401H76.17c-4.905,0-8.886,3.967-8.886,8.86v2.833v59.213v2.833c0,4.897,3.98,8.86,8.886,8.86   h7.036c4.909,0,8.888-3.963,8.888-8.86v-2.833V53.094v-2.833C92.094,45.369,88.115,41.401,83.206,41.401z"
            className="fill-gray-400"
          />
          <path
            d="M115.114,18.922h-7.036c-4.906,0-8.886,3.967-8.886,8.86v25.312v36.733v25.313   c0,4.897,3.979,8.86,8.886,8.86h7.036c4.909,0,8.886-3.963,8.886-8.86V89.827V53.094V27.782   C124,22.889,120.023,18.922,115.114,18.922z"
            className="fill-gray-400"
          />
        </g>
      </svg>
    </>
  );
};

export default Signal;
