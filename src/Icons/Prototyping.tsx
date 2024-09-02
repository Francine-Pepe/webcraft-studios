import React from "react";
import type { SVGProps } from "react";

export function Prototyping(props: SVGProps<SVGSVGElement>) {
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
        <path d="M1 1.25h12c.3 0 .5.2.5.5v8c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5"></path>
        <path d="M4.64 5.75a1.39 1.39 0 1 0 0-2.781a1.39 1.39 0 0 0 0 2.781M6 10.25l-1 2.5m3-2.5l1 2.5m-5 0h6m-5.91-2.5l5.075-4.88a.48.48 0 0 1 .624 0L13.5 8.11"></path>
      </g>
    </svg>
  );
}