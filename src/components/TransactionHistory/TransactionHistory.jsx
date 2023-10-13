import { TransactionRow } from "../TransactionHistory/TransactionRow"
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({items})=> {
    return (
   <table className={css.transaction_history}>
   <thead>
     <tr>
       <th>Type</th>
       <th>Amount</th>
       <th>Currency</th>
     </tr>
   </thead>
   <tbody >
   {items.map((item) => (
   <TransactionRow 
   key = {item.id}
   type ={item.type}
   amount={item.amount}
   currency={item.currency} />))}
   </tbody>
</table>)}
