import React from "react";

const SiteVersion = () => {
  const currentVersion = process.env.NEXT_PUBLIC_PACKAGE_VERSION || "-";
  return (
    <p>
      Site Version: {currentVersion}
    </p>
  )
}

export default SiteVersion
