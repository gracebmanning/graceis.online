import "./ListFilter.css";

export function ListFilter({ filters, activeFilter, onFilterChange }) {
  return (
    <div className="listFilter">
      <p>filter:</p>
      <ul className="listFilterItems">
        {filters.map((filter, index) => {
          return (
            <li
              key={index}
              onClick={() => onFilterChange(filter)}
              className={
                activeFilter === filter
                  ? "filterListItem active"
                  : "filterListItem"
              }
            >
              {filter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
