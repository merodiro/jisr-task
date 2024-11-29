import DefaultFileIcon from "./assets/file_default.svg?react";
import HTMLIcon from "./assets/file_html.svg?react";
import ImgIcon from "./assets/file_img.svg?react";
import JSIcon from "./assets/file_js.svg?react";
import SvgIcon from "./assets/file_svg.svg?react";
import TSIcon from "./assets/file_ts.svg?react";
import FolderOpenIcon from "./assets/folder-open.svg?react";
import { File } from "./data";
import classes from "./FileIcon.module.css";

type FileIconProps = Readonly<{
  file: File;
}>;

export default function FileIcon({ file }: FileIconProps) {
  switch (file.type) {
    case "folder":
      return <FolderOpenIcon className={classes.icon} />;
    case "file":
      switch (file.meta) {
        case "js":
          return <JSIcon className={classes.icon} />;
        case "ts":
          return <TSIcon className={classes.icon} />;
        case "img":
          return <ImgIcon className={classes.icon} />;
        case "svg":
          return <SvgIcon className={classes.icon} />;
        case "html":
          return <HTMLIcon className={classes.icon} />;
        default:
          return <DefaultFileIcon className={classes.icon} />;
      }
  }
}
