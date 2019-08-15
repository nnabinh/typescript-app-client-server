import React, { useEffect } from 'react';
import { ContainerProps } from './EmployeeListContainer';
import { Container, Header, Table, TableHeader, BodyRow } from './styles';
import Employee from './Employee';

const EmployeeList = ({
  employeeIds,
  getList,
}: ContainerProps) => {
  useEffect(() => {
    getList();
  }, [])

  return (
    <Container>
      <Header>Employees</Header>
      <Table>
        <TableHeader>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </TableHeader>
        <tbody>
          {employeeIds.map(id => (
            <BodyRow>
              <Employee id={id}/>
            </BodyRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default EmployeeList;
