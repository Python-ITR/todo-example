import React from "react";
import PT from "prop-types";
import { ButtonGroup, Button } from "reactstrap";

const ALL = "all";
const DONE_ONLY = "done_only";

const Filters = ({ current_filter, onChangeFilter }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => onChangeFilter(ALL)} disabled={current_filter === ALL}>All</Button>
      <Button onClick={() => onChangeFilter(DONE_ONLY)} disabled={current_filter === DONE_ONLY}>Done only</Button>
    </ButtonGroup>
  );
};

Filters.propTypes = {
  current_filter: PT.oneOf([ALL, DONE_ONLY]),
  onChangeFilter: PT.func.isRequired,
};

export default Filters;
