import React, { useEffect, useState } from 'react';
import { ContainerProps } from './EmployeeListContainer';
import { Container, Header, Table, TableHeader, BodyRow, Button, ButtonText, AddNewEmployeeGroup } from './styles';
import Employee from './Employee';

const EmployeeList = ({
  employeeIds,
  getList,
  add,
}: ContainerProps) => {
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const addNewEmployee = () => {
    if (!!newEmployeeName) { add(newEmployeeName); }
  }
  useEffect(() => {
    getList();
  }, [getList])

  return (
    <Container>
      <Header>Employees</Header>
      <AddNewEmployeeGroup>
        <div>Name: </div>
        <input onChange={(event) => setNewEmployeeName(event.target.value)}/>
        <Button onClick={addNewEmployee}>
          <ButtonText> Add new employee </ButtonText>
        </Button>
      </AddNewEmployeeGroup>
      <Table>
        <TableHeader>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </TableHeader>
        <tbody>
          {employeeIds.map(id => (
            <BodyRow key={id}>
              <Employee id={id}/>
            </BodyRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EmployeeList;
