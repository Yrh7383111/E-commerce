import React from "react";
import { useSelector } from 'react-redux';
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory.styles";


// Directory component that contains all the Menu Items
const Directory = () => {
    // Retrieve props from store
    // Caching - Memoization on Directory component
    // If state.directory doesn't change, memoize sections
    const sections = useSelector(selectDirectorySections);


    return (
        <DirectoryMenuContainer>
            {/* Destructing */}
            {/* section -> { id, title, imageUrl, size, linkUrl } */}
            {/* ...otherProps - remaining properties in section with the same name passed through */}
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </DirectoryMenuContainer>
    );
};


export default Directory;
