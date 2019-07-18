import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  column-gap: ${props => props.colGap}rem;
  row-gap: ${props => props.colGap}rem;
`;

const Container = styled.div`
  max-width: ${props => props.theme.maxWith};
  margin: 0 auto;
  width: 100%;
`;

const Box = styled.div`
  text-align: ${props => ((props.textAlign === 'center') ? 'center' : '')};
`;

export { Grid, Container, Box };
