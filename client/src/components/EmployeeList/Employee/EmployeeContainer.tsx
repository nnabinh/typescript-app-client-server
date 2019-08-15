import { connect } from 'react-redux';
import { ApplicationState } from '../../../reducers';
import Employee, { OwnProp } from './Employee';

export type ContainerProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: ApplicationState, { id }: OwnProp) => {
  const { name } = state.model.employee.byId[id];
  return {
    name,
  };
};

const EmployeeContainer = connect(mapStateToProps)(Employee);

export default EmployeeContainer;
