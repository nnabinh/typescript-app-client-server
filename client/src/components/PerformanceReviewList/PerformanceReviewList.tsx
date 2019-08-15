import React, { useEffect } from 'react';
import { ContainerProps } from './PerformanceReviewListContainer';
import { Container, Header } from './styles';

const PerformanceReviewList = ({
  ids,
  getList,
}: ContainerProps) => {
  useEffect(() => {
    getList();
  }, [getList])

  return (
    <Container>
      <Header>Performance Reviews</Header>
      {ids.map(id => <div>{id}</div>)}
    </Container>
  );
}

export default PerformanceReviewList;
