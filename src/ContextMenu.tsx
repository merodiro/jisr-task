import { useEffect, useState } from "react";

import classes from "./ContextMenu.module.css";

const contextItems = [
  {
    name: "Copy",
  },
  {
    name: "Rename",
  },
  {
    name: "Delete",
  },
];

type ContextMenuProps = Readonly<{
  x: number;
  y: number;
  onAction: (action: string) => void;
}>;

export default function ContextMenu({ x, y, onAction }: ContextMenuProps) {
  return (
    <div className={classes.menu} style={{ left: x, top: y }}>
      {contextItems.map((item) => (
        <div
          key={item.name}
          className={classes.item}
          onClick={() => {
            onAction(item.name);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export function useContextMenu() {
  const [contextOpen, setContextOpen] = useState(false);
  const [contextPosition, setContextPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => {
      setContextOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return {
    contextOpen,
    setContextOpen,
    contextPosition,
    setContextPosition,
  };
}
