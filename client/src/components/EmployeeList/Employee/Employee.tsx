import React, { useState } from 'react';
import { ContainerProps } from './EmployeeContainer';
import { Button, ButtonText, ActionGroup } from './styles';

export type OwnProp = {
  id: string;
}

const Employee = ({
  id,
  name,
  remove,
  update,
}: ContainerProps) => {
  const [newName, setNewName] = useState(name);
  const updateEmployee = () => {
    if (newName !== name && !!newName) {
      update({ id, name: newName });
    }
  }

  return <>
    <td>
      <input onChange={(event) => setNewName(event.target.value)} value={newName}/>
    </td>
    <ActionGroup>
      <Button onClick={updateEmployee}>
        <ButtonText> Update </ButtonText>
      </Button>
      <Button onClick={() => remove(id)}>
        <ButtonText> Remove </ButtonText>
      </Button>
    </ActionGroup>
  </>;
}

export default Employee;
