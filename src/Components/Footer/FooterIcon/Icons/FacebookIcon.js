import React from "react";
import "./FacebookIcon.scss";

export default function FacebookIcon() {
  return (
    <span className="FacebookIcon">
      <a href="https://www.facebook.com/Class101Korea/">
        <span>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#edeff0"
              d="M20.007 3H3.993A.993.993 0 003 3.993v16.014c0 .549.444.993.993.993h8.621v-6.97h-2.347v-2.716h2.347V9.308c0-2.324 1.42-3.589 3.494-3.589.994 0 1.848.072 2.096.106v2.43h-1.44c-1.125 0-1.344.54-1.344 1.327v1.733h2.689l-.349 2.722h-2.34V21h4.587a.993.993 0 00.993-.993V3.993A.993.993 0 0020.007 3"
            ></path>
          </svg>
        </span>
      </a>
    </span>
  );
}
