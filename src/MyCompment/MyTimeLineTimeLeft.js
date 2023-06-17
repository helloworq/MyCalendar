import {  Radio, Timeline  } from 'antd';
import { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';

const MyTimeLineLeft = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            dot: <ClockCircleOutlined className="timeline-clock-icon" />,
            color :'red',
            children: 'Technical testing',
          },
          {
            dot: <ClockCircleOutlined className="timeline-clock-icon" />,
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
  );
};
export default MyTimeLineLeft;
