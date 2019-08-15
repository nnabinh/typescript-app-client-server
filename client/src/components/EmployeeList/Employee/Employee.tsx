import React from 'react';
import { ContainerProps } from './EmployeeContainer';
import { Button, ButtonText, ActionGroup } from './styles';

export type OwnProp = {
  id: string;
}

const Employee = ({
  name,
}: ContainerProps) => {

  return <>
    <td>{name}</td>
    <ActionGroup>
      <Button onClick={() => {}}>
        <ButtonText> Update </ButtonText>
      </Button>
      <Button onClick={() => {}}>
        <ButtonText> Remove </ButtonText>
      </Button>
    </ActionGroup>
  </>;
}

export default Employee;
