import React from "react";

function SvgWarning(props) {
  return (
    <svg fill="none" viewBox="0 0 52 52" {...props}>
      <path
        d="M44.586 36.215h.921l-.502-.773-8.424-12.96a.5.5 0 11.838-.545l9.429 14.505a.5.5 0 01-.42.773H5.571a.5.5 0 01-.419-.773L25.581 5.014a.5.5 0 01.838 0l5.107 7.857a.5.5 0 01-.838.545l-4.269-6.567-.42-.645-.418.645L6.995 35.442l-.502.773h38.093zM34.5 18a.5.5 0 11-1 0 .5.5 0 011 0z"
        fill="#3E486E"
        stroke="#4E6896"
      />
      <path
        d="M26 14.714a1.57 1.57 0 00-1.571 1.571v9.429a1.571 1.571 0 003.143 0v-9.429c0-.868-.704-1.571-1.572-1.571zm0 14.143A1.571 1.571 0 1026 32a1.571 1.571 0 000-3.143z"
        fill="#FF7067"
      />
    </svg>
  );
}

export default SvgWarning;