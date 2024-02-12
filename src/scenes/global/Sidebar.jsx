// import React from 'react'

// export default function Sidebar() {
//   return (
//     <div>Sidebar</div>
//   )
// }


import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function Sidebar() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <SubMenu title="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
