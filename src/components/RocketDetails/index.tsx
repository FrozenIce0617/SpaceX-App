import React, { useState, useEffect } from "react";
import { CircularProgress, Modal, Box  } from "@mui/material";
import { Paper, Typography } from "@material-ui/core";
import { IModalProps } from "./types";
import Wrapper from "components/Wrapper";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RocketStat(props: {
  title?: string;
  value?: string;
  style?: React.CSSProperties;
}) {
  const { title, value, style } = props;

  return (
    <div className="rocket-stat">
      <span>{`${title}:`}</span>
      <span style={style}>{value}</span>
    </div>
  );
}

const RocketDetailsModal = ({
  isOpen = false,
  rocket,
  loading,
  onClose,
}: IModalProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose && onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      data-testid="rocket-details-modal"
      aria-labelledby="rocket details"
      aria-describedby="rocket details information"
    >
      <Wrapper>
        <Box sx={style}>
          {loading ? (
            <CircularProgress aria-label="rocket loading spinner"/>
          ) : (
            <Paper key={rocket?.name} elevation={0} className="rocket" aria-label="rocket details">
              <Typography variant="h4">{rocket?.name}</Typography>
              <img
                className="rocket-img"
                alt={rocket?.name}
                src={rocket?.imgUrls[0]}
                style={{ width: "100%" }}
              />
              <p>{rocket?.description}</p>
              <RocketStat title="First Flight" value={rocket?.firstFlight} />
              <RocketStat
                title="Mass"
                value={`${rocket?.weight.toLocaleString()} lbs`}
              />
              <RocketStat
                title="Est. Cost"
                value={`$ ${rocket?.cost.toLocaleString()}`}
              />
              <RocketStat
                title="Success Rate"
                value={`${rocket?.successRate} %`}
              />
            </Paper>
          )}
        </Box>
      </Wrapper>
    </Modal>
  );
};

export default RocketDetailsModal;
