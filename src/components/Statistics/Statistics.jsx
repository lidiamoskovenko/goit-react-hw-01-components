import css from './Statistics.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}               
export const Statistics = ({title,stats}) => {
    return (
        <section className={css.statistics}>
        
        { title.length > 0? <h2 className={css.title}>{title}</h2>: null}
      
        <ul className={css.stat_list}>{
            stats.map(stat =>
                <li  key={stat.id} className={css.item}
                style={{
               backgroundColor:getRandomHexColor ()
    }}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
              </li>)}
        </ul>
      </section>
    );
  };
