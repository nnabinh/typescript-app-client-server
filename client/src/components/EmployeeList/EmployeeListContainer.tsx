import { connect } from 'react-redux';
import { getList, add } from '../../actions/employee';
import { ApplicationState } from '../../reducers';
import EmployeeList from './EmployeeList';

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const mapStateToProps = (state: ApplicationState) => ({
  employeeIds: state.model.employee.allIds,
});

const mapDispatchToProps = {
  getList,
  add,
};

const EmployeeListContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeList);

export default EmployeeListContainer;
