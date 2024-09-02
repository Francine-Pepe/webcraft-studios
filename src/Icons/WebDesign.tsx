import React from "react";
import type { SVGProps } from "react";

export function WebDesign(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10vw"
      height="10rem"
      viewBox="0 0 14 14"
      {...props}
      className="service-icon"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6M7.5 2v9M3 5h2M3 8h1"></path>
        <path d="m7.5 7l1.21-1a2 2 0 0 1 2.55 0l2.24 2"></path>
      </g>
    </svg>
  );
}
