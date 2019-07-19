import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  column-gap: ${props => props.colGap}rem;
  row-gap: ${props => props.colGap}rem;
  @media (max-width: 991.98px) {
    grid-template-columns: ${props => ((props.col > 2) ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)')};
  }
  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 565.98px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWith};
  @media (min-width: 1200px) {
    margin: 0 auto;
  }
  @media (max-width: 1199.98px) {
    margin: 0 4%;
  }
`;

const Box = styled.div`
  text-align: ${props => ((props.textAlign === 'center') ? 'center' : '')};
`;

export { Grid, Container, Box };
