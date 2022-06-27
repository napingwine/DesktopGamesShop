import React, { FC } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

interface IFilterItem {
  title: string,
  child: any,
  className?: string,
  onClickListener?: (string) => void
}

const FilterItemAccordion: FC<IFilterItem> = ({ title, child, className, onClickListener }) => {
  const listener = () => {
    if(onClickListener != undefined){
      onClickListener(title)
    }
  }
  
  return (
    <div className={className}>
      <Accordion
        disableGutters={true}
        square={true}
      >
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          onClick={listener}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <div className="accordion-details">
          {child}
        </div>
      </Accordion>
    </div>
  )
};

export default FilterItemAccordion;