import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
	return (
		<nav>
			<NavLink
				to='/home'
				className={({ isActive, isPending }) =>
					isPending ? styles.pending : isActive ? styles.active : " "
				}
			>
				Home
			</NavLink>
			<NavLink
				to='/activities'
				className={({ isActive, isPending }) =>
					isPending ? styles.pending : isActive ? styles.active : " "
				}
			>
				Create activity
			</NavLink>
			<NavLink
				to='/about'
				className={({ isActive, isPending }) =>
					isPending ? styles.pending : isActive ? styles.active : " "
				}
			>
				About
			</NavLink>
		</nav>
	);
};
