import { useState } from "react";

import ContextMenu, { useContextMenu } from "./ContextMenu";
import { File } from "./data";
import FileIcon from "./FileIcon";
import classes from "./FileTree.module.css";

type FileTreeProps = Readonly<{
  file: File;
}>;

export default function FileTree({ file }: FileTreeProps) {
  const [expanded, setExpanded] = useState(true);

  const { contextOpen, contextPosition, setContextOpen, setContextPosition } =
    useContextMenu();

  const onAction = (action: string) => {
    console.log(action, file.name);
  };

  switch (file.type) {
    case "folder":
      return (
        <div className={classes.folder}>
          {contextOpen && (
            <ContextMenu
              x={contextPosition.x}
              y={contextPosition.y}
              onAction={onAction}
            />
          )}
          <div
            className={classes.folderName}
            onClick={() => {
              setExpanded(!expanded);
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              setContextOpen(true);
              setContextPosition({
                x: e.clientX,
                y: e.clientY,
              });
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
            setContextOpen(true);
            setContextPosition({
              x: e.clientX,
              y: e.clientY,
            });
          }}
        >
          <FileIcon file={file} />
          <span>{file.name}</span>

          {contextOpen && (
            <ContextMenu
              x={contextPosition.x}
              y={contextPosition.y}
              onAction={onAction}
            />
          )}
        </div>
      );
  }
}
