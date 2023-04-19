import React from "react";

function FocusTrap({
  element,
}: {
  element: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
}) {
  const handleRedirect = () => {
    if (element.current) {
      element.current.focus();
    }
  };

  return <div className="absolute" tabIndex={0} onFocus={handleRedirect}></div>;
}

export default FocusTrap;
