import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Button, theme, Tile } from "@socialgouv/react-ui/";

export const CustomTile = React.forwardRef(
  ({ action, children, ...props }, ref) => (
    <Tile custom {...props} ref={ref}>
      {children}
      <StyledDiv hasContentAbove={Boolean(children)}>
        <Button variant="link" as="div">
          {action}
        </Button>
      </StyledDiv>
    </Tile>
  )
);

CustomTile.displayName = "CustomTile";

CustomTile.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node
};

CustomTile.defaultProps = {
  action: "",
  children: null
};

const { spacings } = theme;

const StyledDiv = styled.div`
  margin-top: ${({ hasContentAbove }) =>
    hasContentAbove ? spacings.base : spacings.small};
`;