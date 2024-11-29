import { useState } from "react";

import { File } from "./data";
import FileIcon from "./FileIcon";
import classes from "./FileTree.module.css";

type FileTreeProps = Readonly<{
  file: File;
}>;

export default function FileTree({ file }: FileTreeProps) {
  const [open, setOpen] = useState(false);

  switch (file.type) {
    case "folder":
      return (
        <div className={classes.folder}>
          <div
            className={classes.folderName}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FileIcon file={file} open={open} />
            <span>{file.name}</span>
          </div>
          {open && (
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
        <div className={classes.file}>
          <FileIcon file={file} />
          <span>{file.name}</span>
        </div>
      );
  }
}
