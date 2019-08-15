import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import Employee from '../models/Employee';

@Controller('employee')
class EmployeeController {

    public static readonly SUCCESS_MSG = 'Employee ';

    @Get('list')
    private async getAll(req: Request, res: Response) {
        try {
            const employees = await Employee.find();
            Logger.Info(EmployeeController.SUCCESS_MSG + 'getAll OK');
            return res.status(OK).json({ employees });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Post('remove/:_id')
    private async remove(req: Request, res: Response) {
        try {
            await Employee.deleteOne({ _id: req.params._id });
            Logger.Info(EmployeeController.SUCCESS_MSG + `remove ${req.params._id} OK`);
            return res.status(OK).json();
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Post('add/:name')
    private async add(req: Request, res: Response) {
        try {
            const employee = new Employee({
                name: req.params.name,
            })
            await employee.save();
            Logger.Info(EmployeeController.SUCCESS_MSG + `save ${employee._id} OK`);
            return res.status(OK).json({ employee });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Post('update/:_id/:name')
    private async update(req: Request, res: Response) {
        try {
            const { _id, name } = req.params;
            await Employee.updateOne({ _id }, { name });
            const employee = await Employee.findById(_id);
            Logger.Info(EmployeeController.SUCCESS_MSG + `update ${employee && employee._id} OK`);
            return res.status(OK).json({ employee });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default EmployeeController;
