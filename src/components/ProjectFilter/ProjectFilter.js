import './ProjectFilter.css';

export default function ProjectFilter({ projects, filters }){
    return(
        <div className="projectsFilter">
            <p>filter:</p>
            <ul className="filterList">
                {filters.map((filter) => {
                    return(
                        <li key={filter} className="filterListItem">
                            <button>{filter}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}