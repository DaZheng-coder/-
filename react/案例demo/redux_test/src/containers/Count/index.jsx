import CountUI from '../../components/Count'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

import {connect} from 'react-redux'

function mapStateToProps(state) {
  return {count: state}
}

function mapDispatchToProps(dispatch) {
  return {
    jia: data => dispatch(createIncrementAction(data)),
    jian: data => dispatch(createDecrementAction(data)),
    jiaAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
