import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DUMMY_ACOORDION = [
  { id: 1, title: "Lorem Lorem 1", desc: "Description 1" },
  { id: 2, title: "Lorem Lorem 2", desc: "Description 2" },
  { id: 3, title: "Lorem Lorem 3", desc: "Description 3" },
  { id: 4, title: "Lorem Lorem 4", desc: "Description 4" },
];

const Question = () => {
  return (
    <div className="w-screen min-h-[600px] p-12 bg-gradient-to-r from-[#d6f4fd] to-[#e0e7fe]">
      <div className="container w-full mx-auto bg-gradient-to-r from-[#d6f4fd] to-[#e0e7fe] md:w-1/2 h-full p-12 rounded-[40px] drop-shadow-2xl">

      <div className="text-center md:text-start">
        <h1 className="font-bold text-2xl md:text-4xl text-[#263d5a] pb-4">Frequently</h1>
        <h1 className="font-bold text-2xl md:text-4xl text-[#263d5a]">Asked Questions</h1>
      </div>

        <div className="pt-12">
        {DUMMY_ACOORDION.map((item) => (
          <Accordion key={item.id} className="m-1 p-2" sx={{ margin: '0', border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="py-2"
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        </div>

      </div>
    </div>
  );
};

export default Question;
