import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import PerformanceReview from '../models/PerformanceReview';

@Controller('performanceReview')
class PerformanceReviewController {

    public static readonly SUCCESS_MSG = 'PerformanceReview ';

    @Get('list')
    private async getAll(req: Request, res: Response) {
        try {
            const performanceReviews = await PerformanceReview.find();
            Logger.Info(PerformanceReviewController.SUCCESS_MSG + 'getAll OK');
            return res.status(OK).json({ performanceReviews });
        } catch (err) {
            Logger.Err(err, true);
            return res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }
}

export default PerformanceReviewController;
