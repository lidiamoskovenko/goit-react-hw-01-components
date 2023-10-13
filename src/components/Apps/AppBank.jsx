
import transactions from 'transactions';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';


export const AppBank = () => {
 return (
   <div 
   style={{
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px'
  }}
   >
  <TransactionHistory items={transactions} />;
   </div>
 );
};


