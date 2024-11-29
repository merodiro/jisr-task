import classes from "./ContextMenu.module.css";
import { useContextMenuState } from "./ContextMenuContext";

const contextItems = [{ name: "Copy" }, { name: "Rename" }, { name: "Delete" }];

type ContextMenuProps = {
  onAction: (action: string, identifier: string) => void;
};

export default function ContextMenu({ onAction }: ContextMenuProps) {
  const { isOpen, position, identifier, closeMenu } = useContextMenuState();

  if (!isOpen) return null;

  return (
    <div
      className={classes.menu}
      style={{ left: position.x, top: position.y }}
      onClick={closeMenu}
    >
      {contextItems.map((item) => (
        <div
          key={item.name}
          className={classes.item}
          onClick={() => {
            if (!identifier) return;
            onAction(item.name, identifier);
            closeMenu();
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
