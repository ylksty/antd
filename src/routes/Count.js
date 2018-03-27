import React from 'react';
import { connect } from 'dva';
import CountApp from '../components/Count';

const Count = ({ dispatch, count }) => {
  function handleClick() {
    dispatch({type: 'count/add'});
  }
  return (
    <div>
      <h2>count</h2>
      <CountApp onClick={handleClick} count={count} />
    </div>
  );
};

function mapStateToProps(state) {
  return { count: state.count };
}
// export default connect(({ count }) => ({
//   count,
// }))(Count);
export default connect(mapStateToProps)(Count);
