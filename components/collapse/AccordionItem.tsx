import React from "react";

interface PropsType {
  open: boolean;
  toggle: any;
  title:string;
  desc:string
}

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, toggle, title, desc }: PropsType) => {
  return (
    <div className="pt-[10px] text-black rounded-2xl">
      <div
        className="bg-white border-b-2 border-slate-200 border- py-[25px] px-[20px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-lg md:text-xl">{title}</p>
        <div>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-[40px] py-[30px] text-sm leading-7">{desc}</div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
