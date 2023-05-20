import React from "react";

const options: Intl.DateTimeFormatOptions = { year: 'numeric'};
const updatedAt = process.env.NEXT_PUBLIC_LAST_UPDATED_AT ? new Date(process.env.NEXT_PUBLIC_LAST_UPDATED_AT).toLocaleDateString(undefined,options) : "-";

export const copyright = () => {
  return `Copyright ${updatedAt}`
}
