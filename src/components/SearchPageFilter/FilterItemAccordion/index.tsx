import React, { FC } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

interface IFilterItem {
  title: string,
  child: any,
  className?: string,
  onClickListener?: (string) => void,
  defaultExpanded?: boolean,
  disabled?: boolean,
  expanded?: boolean
}

const FilterItemAccordion: FC<IFilterItem> = ({ title, child, className, onClickListener, defaultExpanded, disabled,expanded }) => {
  const listener = () => {
    if (onClickListener != undefined) {
      onClickListener(title)
    }
  }

  return (
    <div className={className}>
      <Accordion
        disableGutters={true}
        square={true}
        expanded={expanded}
        defaultExpanded={defaultExpanded ? defaultExpanded : false}
        disabled={disabled ? disabled : false}
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