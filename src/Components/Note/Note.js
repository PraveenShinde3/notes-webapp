import React from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";

import "./Note.css";

const Note = (props) => {
  // console.log(props.note.id);
  let timer = 500,
    timeout;

  const formatDate = (value) => {
    if (!value) return "";

    const months = [
      "Jan",
      "feb",
      "Mar",
      "April",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(value);

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = months[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <motion.div
      className="note"
      style={{ backgroundColor: props.note.color }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <textarea
        className="note_text"
        onChange={(e) => updateText(e.target.value, props.note.id)}
        defaultValue={props.note.text}
      ></textarea>
      <div className="note-footer">
        <p className="note_date"> {formatDate(props.note.date)}</p>
        <MdDelete
          className="delete-icon"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </motion.div>
  );
};

export default Note;
