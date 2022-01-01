import { memo, useState } from "react";

const NestedFolder = ({ icons }) => {
  let filtered = icons.filter((_, index) => index >= 3 && index < 3 + 4);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-2 p-2 cursor-pointer" onClick={() => setShow(!show)}>
        {filtered.map((icon) => (
          <img key={icon.name} src={icon.src} alt={icon.name} />
        ))}
      </div>
    </div>
  );
}

export default memo(NestedFolder);