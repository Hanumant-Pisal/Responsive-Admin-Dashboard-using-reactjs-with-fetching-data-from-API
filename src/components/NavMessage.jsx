import React from 'react'

function NavMessage() {
    return (
        <li className="nav-item dropdown">
            <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
                <i className='bi bi-chat-left-text'></i>
                <span className='badge bg-success badge-number'>4</span>

            </a>
            <ul className='dropdown-menu  dropdown-menu-end  dropdown-menu-arrow messages '>
                <li className='dropdown-header'>
                    you have 3 new messages
                    <a href="#">
                        <span className='badge rounded-ill bg-primary p-2 ms-2'>View all</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="#####upload image here" alt="" className='rounded-circle' />
                        <div>
                            <h4>Maria Hudson</h4>
                            <p>
                                Hello, good morning, how are you...
                            </p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="#####" alt="" className='rounded-circle' />
                        <div>
                            <h4>Georgiya meloni</h4>
                            <p>
                                Hello, good morning, how are you...
                            </p>
                            <p>6 hrs. ago</p>
                        </div>
                    </a>
                </li>

                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="#####" alt="" className='rounded-circle' />
                        <div>
                            <h4>Bear gryls</h4>
                            <p>
                                Hello, good morning, how are you...
                            </p>
                            <p>7 hrs. ago</p>
                        </div>
                    </a>
                </li>
            </ul>

        </li>
    )
}

export default NavMessage
