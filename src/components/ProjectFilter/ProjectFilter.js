import './ProjectFilter.css';

export default function ProjectFilter({ projects, filters }){
    console.log(filters);
    return(
        <div className="projectsFilter">
            <p>filter:</p>
            <ul className="filterList">
                <li className="filterListItem">website</li>
                <li className="filterListItem">music video</li>
                <li className="filterListItem">other</li>
                {filters.map((filter) => {
                    return(
                        <li className="filterListItem">
                            <button>{filter}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}