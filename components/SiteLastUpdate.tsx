import React from "react";

const options: Intl.DateTimeFormatOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const SiteLastUpdate = () => {
  const updatedAt = process.env.NEXT_PUBLIC_LAST_UPDATED_AT ? new Date(process.env.NEXT_PUBLIC_LAST_UPDATED_AT).toLocaleDateString(undefined,options) : "-";
  return (
    <p>
      Last Updated At: {updatedAt}
    </p>
  )
}

export default SiteLastUpdate
