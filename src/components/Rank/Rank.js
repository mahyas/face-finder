import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`Hi ${name}, You have tested`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
      <div className='white f3'>
        {`pictures so far!`}
      </div>
    </div>
  );
}

export default Rank;