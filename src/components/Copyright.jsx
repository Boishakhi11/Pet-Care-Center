import React from "react";

const Copyright = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - Made with 🩵 by Boishakhi
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Copyright;
