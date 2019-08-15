import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Container, Button, Text } from './styles';

type Props = RouteComponentProps<{}>;

const Home = ({
  history,
}: Props) => (
  <Container>
    <Button onClick={() => history.push('employee-list')}>
      <Text>Go to Employee List</Text>
    </Button>
    <Button onClick={() => history.push('performance-review-list')}>
      <Text>Go to Performance Review List</Text>
    </Button>
  </Container>
);

export default withRouter(Home);
