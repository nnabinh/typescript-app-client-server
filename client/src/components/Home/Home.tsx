import React, { FC } from 'react';
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
  </Container>
);

export default withRouter(Home);
