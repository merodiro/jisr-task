import { useState } from "react";

import { useContextMenuState } from "./ContextMenuContext";
import { File } from "./data";
import FileIcon from "./FileIcon";
import classes from "./FileTree.module.css";

type FileTreeProps = Readonly<{
  file: File;
}>;

export default function FileTree({ file }: FileTreeProps) {
  const [expanded, setExpanded] = useState(true);
  const { openMenu } = useContextMenuState();

  switch (file.type) {
    case "folder":
      return (
        <div className={classes.folder}>
          <div
            className={classes.folderName}
            onClick={() => {
              setExpanded(!expanded);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              openMenu(e.clientX, e.clientY, file.name);
            }}
          >
            <FileIcon file={file} open={expanded} />
            <span>{file.name}</span>
          </div>
          {expanded && (
            <div className={classes.files}>
              {file.data.map((f) => (
                <FileTree key={f.name} file={f} />
              ))}
            </div>
          )}
        </div>
      );
    case "file":
      return (
        <div
          className={classes.file}
          onContextMenu={(e) => {
            e.preventDefault();
            openMenu(e.clientX, e.clientY, file.name);
          }}
        >
          <FileIcon file={file} />
          <span>{file.name}</span>
        </div>
      );
  }
}
