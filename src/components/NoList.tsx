'use client';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
`;

const Text = styled.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.1;
  color: ${({ color }) => color || '#181818'};
`;

export const NoList = ({ value }: { value: string }) => {
  return (
    <Container>
      <Text color="gray">{value}</Text>
    </Container>
  );
};
