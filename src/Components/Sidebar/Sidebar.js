import React, { useState } from "react";
import { HiDocumentAdd } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Sidebar.css";

const Sidebar = (props) => {
  const colors = [
    "#80DEEA",
    "#8DD078",
    "#9DC1CE",
    "#CF93D9",
    "#DADFDC",
    "#E6EE9B",
    "#FFAB91",
    "#FFCC80",
  ];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <div className="plus-icon-wrapper">
        <HiDocumentAdd
          className="plus-icon"
          onClick={() => setListOpen(!listOpen)}
        />
      </div>

      <div className="sidebar-list-wrapper">
        <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
          {colors.map((color, index) => (
            <motion.li
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={index}
              className="sidebar-list-item"
              style={{ backgroundColor: color }}
              onClick={() => props.addNote(color)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
