import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
	return (
		<nav>
			<NavLink
				to='/home'
				className={({ isActive, isPending }) =>
					isActive ? styles.active : isPending ? styles.pending : " - "
				}
			>
				Home
			</NavLink>
			<NavLink
				to='/activities'
				className={({ isActive, isPending }) =>
					isActive ? styles.active : isPending ? styles.pending : " - "
				}
			>
				Create activity
			</NavLink>
			<NavLink
				to='/about'
				className={({ isActive, isPending }) =>
					isActive ? styles.active : isPending ? styles.pending : " - "
				}
			>
				About
			</NavLink>
		</nav>
	);
};
