import * as mongoose from 'mongoose';

export interface PerformancePreview extends mongoose.Document {
  title: string;
  author: number;
}

export const PerformancePreviewSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
  score: {
    type: Number,
    required: true,
  }
});

const PerformancePreview = mongoose.model<PerformancePreview>('PerformancePreview', PerformancePreviewSchema);
export default PerformancePreview;
