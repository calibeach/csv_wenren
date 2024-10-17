import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { StyledWinningChengyuDropdown } from "./StyledWinningChengyuDropdown";

interface WinningChengyuProps {
  winningChengYu: string[];
}

const WinningChengyuDropdown: React.FC<WinningChengyuProps> = ({
  winningChengYu,
}) => {
  return (
    <StyledWinningChengyuDropdown>
      <Accordion
        sx={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          sx={{
            flexDirection: "row-reverse",
            minHeight: "20px", // Set minimum height
            height: "20px", // Set exact height
            padding: "0",
            "&.Mui-expanded": {
              minHeight: "20px", // Keep height reduced when expanded
            },
            ".MuiAccordionSummary-content": {
              margin: 0,
            },
          }}
        >
          {/* Blank Summary */}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
          }}
        >
          <List>
            {winningChengYu.map((chengyu, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={chengyu}
                  sx={{
                    fontFamily: "localFont KaitiM GB",
                    color: "#1c1c1c",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "0",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </StyledWinningChengyuDropdown>
  );
};

export { WinningChengyuDropdown };
export default WinningChengyuDropdown;
