export const trash = () => {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78L4 6z"></path>
      <path d="M7.345 3.147A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6l1.345-2.853z"></path>
      <path d="M2 6h20"></path>
      <path d="M10 11v5"></path>
      <path d="M14 11v5"></path>
    </svg>
  );
};

export const sync = () => {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m18 2 3 3-3 3"></path>
      <path d="m6 22-3-3 3-3"></path>
      <path d="M21 5H10a7 7 0 0 0-7 7"></path>
      <path d="M3 19h11a7 7 0 0 0 7-7"></path>
    </svg>
  );
};

export const plus = ({className}) => {
  return (
    <svg
      width="26"
      height="26"
      fill="none"
      className={className}
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 12H4"></path>
      <path d="M12 20V4"></path>
    </svg>
  );
};

export const chevronLeft = () => {
  return (
    <svg
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m15 4-8 8 8 8"></path>
    </svg>
  );
};
