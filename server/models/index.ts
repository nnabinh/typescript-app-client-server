import * as mongoose from 'mongoose';
import Employee from './Employee';
import PerformanceReview from './PerformanceReview';

const uri: string = 'mongodb://127.0.0.1:27017/local';

// Connect to the db
mongoose.connect(uri, (err: any) => {
  console.log('Connecting to mongodb...');
  if (err) {
    console.log(err.message);
  } else {
    console.log('Successfully Connected to mongodb!');
  }
});

// Temporarily setup demo data
Employee.collection.deleteMany({});
Employee.collection.insertMany([{
  name: 'Max',
}, {
  name: 'Oskar'
}, {
  name: 'Alex'
}, {
  name: 'Mohammed'
}, {
  name: 'Xuatz'
}, {
  name: 'Cody'
}]).then(() => {
  PerformanceReview.collection.insertMany([{
    score: 9,
  }, {
    score: 8,
  }])
});
