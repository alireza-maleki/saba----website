import React from "react";
import classes from "./AccordionItem.module.css";

import { Collapse } from "react-collapse";

interface PropsType {
  open: boolean;
  toggle: any;
  title: string;
  desc: string;
}

const AccordionItem = ({ open, toggle, title, desc }: PropsType) => {
  return (
    <div className="pt-[10px] text-[#263d5a]">
      <div
        className="bg-white border-b-2 border-slate-200 py-[20px] px-[24px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-sm md:text-lg">{title}</p>
        <div>
          {open ? (
            <div
              className={`${classes["open-icon"]} ${
                open ? classes["is-active"] : ""
              } `}
            >
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className={`${classes["open-icon"]}`}>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-[40px] py-[20px] text-sm leading-7">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
