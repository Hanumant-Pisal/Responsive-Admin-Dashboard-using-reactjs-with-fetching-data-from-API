import React from 'react'

const NavNotice = () => {
    return (
        <li className="nav-item dropdown">
            <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
                <i className='bi bi-bell'></i>
                <span className='badge bg-primary badge-number'>4</span>

            </a>

            <ul className='dropdown-menu  ropdown-menu-end  ropdown-menu-arrow  notification '>

                <li className='dropdown-header'>
                    you have 4 new notifications
                    <a href='#'>
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span>

                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />


                </li>

                <li className="notification-item">
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Virat Kohali</h4>
                        <p>Hello, Iam Waiting...</p>
                        <p>30 min. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                    <i className='bi bi-x-circle text-danger  '></i>

                    <div>
                        <h4>Rohit Sharma</h4>
                        <p>Hello, Iam Waiting...</p>
                        <p> 1 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-x-circle text-danger  '></i>

                    <div>
                        <h4>K.L Rahul</h4>
                        <p>Hello, Iam Waiting...</p>
                        <p> 2 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-x-circle text-danger  '></i>

                    <div>
                        <h4>Shrayash Iyer</h4>
                        <p>Good morning friends</p>
                        <p> 3 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='dropdown-footer'>
                    <a href='#'>Show all Notification</a>
                </li>
            </ul>

        </li>
    )
}

export default NavNotice
