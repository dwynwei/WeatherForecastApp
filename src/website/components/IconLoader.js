import React from "react";
import { Icon as MDIcon } from "@mdi/react";

function IconLoader({ icon, className, ...restOfProps }) {
  const MDIcons = require("@mdi/js");
  let loadedIcon = MDIcons[icon];
  if (!loadedIcon) {
    console.error(`Could not find ${icon} in Material Design Icons`);
    loadedIcon = MDIcons.mdiCancel;
  }

  return (
    <MDIcon
      path={loadedIcon}
      className={`mdi ${icon} ${className}`.trim()}
      {...restOfProps}
    />
  );
}

IconLoader.defaultProps = {
  className: "",
};

export default IconLoader;
