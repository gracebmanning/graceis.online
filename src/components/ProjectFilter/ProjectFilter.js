import './ProjectFilter.css';

export default function ProjectFilter(){
    return(
        <div className="projectsFilter">
            <p>filter:</p>
            <ul className="filterList">
                <li className="filterListItem">website</li>
                <li className="filterListItem">music video</li>
                <li className="filterListItem">other</li>
            </ul>
        </div>
    )
}