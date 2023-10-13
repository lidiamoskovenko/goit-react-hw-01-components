import data from 'data';
import {Statistics} from '../Statistics/Statistics';

export const AppStats = () => {
    return (
      <div 
      style={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
>
<Statistics title={"Upload stats"} stats={data} />
</div>
    );
  };
  