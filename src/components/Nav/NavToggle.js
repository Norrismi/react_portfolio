// import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom'
// import './SideNav/SideNav'
// import './TopNav/TopNav'

// const NavToggle = () => {

//     const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         function handleResize() {
//            setWidth(window.innerWidth)
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [width]);

//     useEffect(() => {
//         width < 600 && handleSideNavToggle();

//     }, [width]);

//     function handleSideNavToggle(){
//         console.log('toggle it')
//     }

//     return (
//         <div>
            
//         </div>
//     );
// }

// export default NavToggle;
