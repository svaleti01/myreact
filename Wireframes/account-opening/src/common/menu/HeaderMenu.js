import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const HeaderMenu = ({ mode, menus }) => {
  return (
    <Menu mode={mode}>
        {
            menus.map((menu) => {
                return (
                    menu.children && menu.children.length > 0 ?
                        <SubMenu title={menu.name}>
                            {menu.children.map((submenu) => {
                                return <Menu.Item key={submenu.key}>
                                            <Link to={submenu.url}>{submenu.name}</Link>
                                        </Menu.Item>
                            })}
                        </SubMenu>
                    :
                        <Menu.Item key={menu.key}>
                            <Link to={menu.url}>{menu.name}</Link>
                        </Menu.Item>
                    )
            })
        }
    </Menu>
  )
}

export default HeaderMenu
