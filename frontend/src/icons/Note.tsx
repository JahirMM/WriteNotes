import { SVGProps } from "react";
const Note = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h224V368c0-26.5 21.5-48 48-48h112V96c0-35.3-28.7-64-64-64H64zm384 320H336c-8.8 0-16 7.2-16 16v112l32-32 64-64 32-32z" />
  </svg>
);
export default Note;
