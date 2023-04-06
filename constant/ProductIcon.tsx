import React from "react";

const ProductIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 20"
      focusable="false"
      aria-hidden="true"
      width="24"
      height="24"
    >
      <path d="M10.408 3h5.592a1 1 0 0 1 1 1v5.592a2 2 0 0 1-.57 1.399l-5.162 5.277a2.5 2.5 0 0 1-3.536 0l-4-4a2.5 2.5 0 0 1 0-3.536l.008-.008 5.27-5.154a2 2 0 0 1 1.397-.57Zm3.092 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
    </svg>
  );
};
export default ProductIcon;
