import React, { useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";

export default function SortByLatestToggleButton(props) {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      className="toggleSortByLatest"
      value="check"
      selected={selected}
      onChange={() => {
        console.log(selected);
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
