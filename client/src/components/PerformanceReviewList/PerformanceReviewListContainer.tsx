import { connect } from 'react-redux';
import { getList } from '../../actions/performanceReview';
import { ApplicationState } from '../../reducers';
import PerformanceReviewList from './PerformanceReviewList';

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const mapStateToProps = (state: ApplicationState) => ({
  ids: state.model.performanceReview.allIds,
});

const mapDispatchToProps = {
  getList,
};

const PerformanceReviewListContainer = connect(mapStateToProps, mapDispatchToProps)(PerformanceReviewList);

export default PerformanceReviewListContainer;
