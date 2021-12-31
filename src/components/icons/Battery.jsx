const Battery = ({ className }) => {
  return (
    <svg
      className={`h-5 w-5 fill-transparent ${className}`}
      viewBox="0 0 30 30"
    >
      <path
        d="M24,21H4  c-1.105,0-2-0.895-2-2v-9c0-1.105,0.895-2,2-2h20c1.105,0,2,0.895,2,2v9C26,20.105,25.105,21,24,21z"
        className="stroke-gray-400"
        stroke="2"
      />
      <path d="M29,17h-1v-5h1c0.552,0,1,0.448,1,1v3C30,16.552,29.552,17,29,17z" className="stroke-gray-400 fill-gray-400" />
      <rect height="7" width="12" x="5" y="11" className="stroke-white fill-white" />
    </svg>
  );
};

export default Battery;
