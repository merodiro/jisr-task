import { File } from "./data";
import classes from "./FileTree.module.css";

type FileTreeProps = Readonly<{
  file: File;
}>;

export default function FileTree({ file }: FileTreeProps) {
  switch (file.type) {
    case "folder":
      return (
        <div className={classes.folder}>
          {file.name}
          {file.data.map((f) => (
            <FileTree key={f.name} file={f} />
          ))}
        </div>
      );
    case "file":
      return <div className={classes.file}>{file.name}</div>;
  }
}
