import * as mongoose from 'mongoose';

export interface Employee extends mongoose.Document {
  name: string;
}

export const EmployeeSchema = new mongoose.Schema({
  name: String,
});

const Employee = mongoose.model<Employee>('Employee', EmployeeSchema);
export default Employee;
