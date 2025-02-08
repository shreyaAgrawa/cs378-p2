import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, price, description, imageName}) => {
    return (
        <>
        <div className="menu-description">
                <div>
                    <img className="menu-photos" src={'assets/${imageName}'} alt="image 1"/>
                </div>
                <div className="menu-description">
                    <div className="menu-text">
                        <b>{title}</b><br />
                        <p style={{ whiteSpace: 'pre-line' }}>{description}<br /></p>
                        <b>${price.toFixed(2)}</b>
                    </div>
                    <div>
                        <button>
                            Add
                        </button>
                    </div>
                </div>
        </div>
        </>
    );
};

export default MenuItem;
