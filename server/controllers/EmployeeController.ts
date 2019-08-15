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
            console.log('employees: ', employees)
            Logger.Info(EmployeeController.SUCCESS_MSG + 'getAll OK');
            return res.status(OK).json({ employees });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    @Post('remove/:id')
    private async remove(req: Request, res: Response) {
        try {
            await Employee.remove({ id: req.params.id });
            Logger.Info(EmployeeController.SUCCESS_MSG + `remove ${req.params.id} OK`);
            return res.status(OK);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default EmployeeController;
