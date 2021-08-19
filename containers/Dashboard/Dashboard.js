import React from 'react'
import DashboardWrapper from './DashboardWrapper'
import { List, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../redux/actions'
import { faBahai, faBars, faHome, faImages, faNewspaper, faTasks, faUserFriends, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-awesome-reveal'
import { MdCall } from "react-icons/md";
import Link from "next/link"

const menus = [
    { id: "home", to: "/", title: "Home", icon: faHome },
    { id: "users", to: "/users", title: "Users", icon: faUsers },
    { id: "todos", to: "/todos", title: "Todos", icon: faTasks },
    { id: "albums", to: "/albums", title: "Albums", icon: faVideo },
    { id: "photos", to: "/photos", title: "Photos", icon: faImages },
    { id: "posts", to: "/posts", title: "Posts", icon: faNewspaper },
]

const Dashboard = ({ children, menu }) => {
    const dispatch = useDispatch();

    const show = useSelector(state => state.isSidebarShow);

    return (
        <DashboardWrapper>
            <div className={`sidebar ${show && "show" || ""}`}>
                <div className="d-flex justify-content-between">
                    <img src="https://colorlib.com/polygon/cooladmin/images/icon/logo.png" alt="" />
                    <div className="toggle" onClick={() => toggleMenu(dispatch)} variant="contained" disableElevation>
                        <FontAwesomeIcon icon={faBahai} />
                    </div>
                </div>
                <h2 className="text-white mt-3">Sidebar</h2>
                <hr className="bg-light" />
                <List className="mt-5" component="nav">
                    {menus.map((v, i) => <li key={v.to}>
                        <Slide delay={i * 30}>
                            <Link href={`${v.to}`}>
                                <a className={`${menu === v.id ? "active" : ""}`}>
                                    <ListItem button >
                                        <FontAwesomeIcon icon={v.icon} className="me-2" /> {v.title}
                                    </ListItem>
                                </a>
                            </Link>
                        </Slide>
                    </li>)}
                </List>
            </div>
            <div className="rightside">
                <header className="d-flex justify-content-between border-bottom">
                    <h3 className="md-title d-flex justify-content-center align-items-center ps-2">Dashboard</h3>
                    <div className="text-end d-flex justify-content-center align-items-center">
                        <input type="text" className="border-0 rounded border-bottom" placeholder="Search..." />
                        <div className="others me-4"><MdCall /></div>
                        <div className="others"><FontAwesomeIcon icon={faUserFriends} /></div>
                        <a href="#" className="user me-2"><img src="https://colorlib.com/polygon/cooladmin/images/icon/avatar-01.jpg" alt="" /></a>
                        <h5 className="text-muted me-2">John Doe</h5>
                    </div>
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </DashboardWrapper >
    )
}

export default Dashboard