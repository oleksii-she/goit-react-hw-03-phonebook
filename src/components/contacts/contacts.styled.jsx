import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
