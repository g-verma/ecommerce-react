import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Route } from 'constants/routes';
import UserAvatar from 'views/account/components/UserAvatar';
import { RootState } from 'types/types';
import logo from '../../../static/logo-full.png';

const AdminNavigation: React.FC = () => {
	const state = useSelector((state: RootState) => ({
		isAuthenticating: state.app.isAuthenticating,
		profile: state.profile
	}));

	return (
		<nav className="navigation navigation-admin">
			<div className="logo">
				<Link to={Route.ADMIN_DASHBOARD} style={{ display: 'flex', alignItems: 'center' }}>
					<img src={logo} />
					<h3>ADMIN PANEL</h3>
				</Link>
			</div>
			<ul className="navigation-menu">
				<li className="navigation-menu-item">
					<UserAvatar
						isAuthenticating={state.isAuthenticating}
						profile={state.profile}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default AdminNavigation;