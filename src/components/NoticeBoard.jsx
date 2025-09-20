import React from "react";
import "../styles/NoticeBoard.css";
import { NOTICE_BOARD } from "../constants/texts";

const NoticeBoard = () => (
  <section className="notice-board">
    <span className="fixed-text">{NOTICE_BOARD.notice}</span>
    <div className="scroll-container">
      <div className="scroll-text">
          {NOTICE_BOARD.results}
      </div>
    </div>
  </section>
);

export default NoticeBoard;
