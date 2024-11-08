import React from 'react';
import profileImg from '../images/hp.jpg';

function NavAvatar() {
    return (
        <li className="nav-item dropdown pe-3">
            <button
                className='nav-link nav-profile d-flex align-items-center pe-0'
                aria-haspopup="true"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ background: 'none', border: 'none', padding: 0 }}
            >
                <img src={profileImg} alt="Profile of Hanumant Pisal" className='rounded-circle'  style={{ width: '30px', height: '30px' }}  />
                <span className='d-none d-md-block dropdown-toggle ps-2'>H.Pisal</span>
            </button>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                <li className='dropdown-header'>
                    <h6>Hanumant Pisal</h6>
                    <span>Software Engineer</span>
                </li>
                <li><hr className='dropdown-divider' /></li>
                <li>
                    <a className='dropdown-item d-flex align-items-center' href="users-profile.html">
                        <i className='bi bi-person'></i>
                        <span>My Profile</span>
                    </a>
                </li>
                <li><hr className='dropdown-divider' /></li>
                <li>
                    <a className='dropdown-item d-flex align-items-center' href="users-profile.html">
                        <i className='bi bi-gear'></i>
                        <span>Account Settings</span>
                    </a>
                </li>
                <li><hr className='dropdown-divider' /></li>
                <li>
                    <a className='dropdown-item d-flex align-items-center' href="pages-faq.html">
                        <i className='bi bi-question-circle'></i>
                        <span>Need Help?</span>
                    </a>
                </li>
                <li><hr className='dropdown-divider' /></li>
                <li>
                    <button className='dropdown-item d-flex align-items-center' onClick={() => alert('Signing out...')}>
                        <i className='bi bi-box-arrow-right'></i>
                        <span>Sign Out</span>
                    </button>
                </li>
            </ul>
        </li>
    );
}

export default NavAvatar;
