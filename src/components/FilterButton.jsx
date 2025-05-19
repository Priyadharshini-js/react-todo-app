import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const FilterButton = ({ name, value }) => {

    const location = useLocation();
    const currentFilter = new URLSearchParams(location.search).get('filter');

    const isSelected = currentFilter === value || (currentFilter === null && value === 'all');

    return (
        <li>
            <NavLink to={`/?filter=${value}`} className={isSelected ? 'selected' : ''}>
                {name}
            </NavLink>
        </li>
    );
}

export default FilterButton;
