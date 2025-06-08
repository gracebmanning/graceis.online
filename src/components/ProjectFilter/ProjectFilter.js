import './ProjectFilter.css';

export default function ProjectFilter({ filters, activeFilter, onFilterChange }){
    return(
        <div className="projectsFilter">
            <p>filter:</p>
            <ul className="filterList">
                {filters.map((filter, index) => {
                    return(
                        <li key={index} onClick={() => onFilterChange(filter)} className={activeFilter === filter ? 'filterListItem active' : 'filterListItem'}>
                            {filter}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}