import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  Container,
  PageTitle,
  Stripe,
  Subtitle,
  theme,
  Wrapper
} from "@socialgouv/react-ui/";

const Article = ({ subtitle, title, source, date, children }) => {
  return (
    <Container>
      <Wrapper variant="main" data-main-content>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <StyledPageTitle>
          <Stripe position="left" length="100%" />
          {title}
        </StyledPageTitle>
        <Meta>
          {source && source.url && (
            <Source>
              Source:{" "}
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.name}
              </a>
            </Source>
          )}
          {date && <span>Mis à jour le&nbsp;: {date}</span>}
        </Meta>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
};

Article.propTypes = {
  /** article title */
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** article content */
  children: PropTypes.node,
  date: PropTypes.string,
  source: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }),
  style: PropTypes.object,
  /** when user clicks some tag */
  onTagClick: PropTypes.func
};

Article.defaultProps = {
  subtitle: false
};

export default Article;

const { breakpoints, fonts, spacings } = theme;

const StyledPageTitle = styled(PageTitle)`
  position: relative;
  margin-left: -${spacings.larger};
  padding-left: ${spacings.larger};
`;

const Meta = styled.div`
  display: flex;
  font-size: ${fonts.sizes.small};
  @media (max-width: ${breakpoints.mobile}) {
    flex-flow: column;
    align-items: flex-start;
  }
`;

const Source = styled.span`
  margin-right: ${spacings.small};
`;

const Content = styled.div`
  margin: ${spacings.large} 0 0 0;
`;
