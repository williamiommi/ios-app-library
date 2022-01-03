import { useAppStateContext } from "../context/app";

const AlphabetList = ({ onClick }) => {
  const { alphabet } = useAppStateContext();
  return (
    <div className="absolute right-[2px] top-1/2 -translate-y-1/2 flex flex-col">
      {alphabet.map((char) => (
        <button
          key={char}
          type="button"
          onClick={() => onClick(`char${char}`)}
          className="text-white text-[10px]"
        >
          {char}
        </button>
      ))}
    </div>
  );
};

export default AlphabetList;
