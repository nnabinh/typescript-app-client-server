import * as mongoose from 'mongoose';

export interface Employee extends mongoose.Document {
  title: string;
  author: number;
}

export const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Employee = mongoose.model<Employee>('Employee', EmployeeSchema);
export default Employee;
