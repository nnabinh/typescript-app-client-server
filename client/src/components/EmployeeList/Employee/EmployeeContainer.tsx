import { connect } from 'react-redux';
import { remove, update } from '../../../actions/employee';
import { ApplicationState } from '../../../reducers';
import Employee, { OwnProp } from './Employee';

export type ContainerProps = OwnProp &
  ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const mapStateToProps = (state: ApplicationState, { id }: OwnProp) => {
  const { name } = state.model.employee.byId[id];
  return {
    name,
  };
};

const mapDispatchToProps = {
  remove,
  update,
};

const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(Employee);

export default EmployeeContainer;
