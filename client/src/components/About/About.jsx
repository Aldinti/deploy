import React from "react";
import styles from "./About.module.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import mail from "../../img/mail.png";
// import { BtnGoBack } from "./../BtnGoBack/BtnGoBack";
import { Nav } from "./../Nav/Nav";

function About() {
	return (
		<div>
			<Nav />
			<footer>
				{/* <BtnGoBack /> */}
				<a
					rel='noreferrer'
					target='_blank'
					href='https://github.com/Aldinti'
				>
					<img
						className={styles.imagenes}
						alt='logo github'
						src={github}
					/>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.linkedin.com/in/Aldinti/'
				>
					<img
						className={styles.imagenes}
						alt='logo linkedin'
						src={linkedin}
					/>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='mailto:aldopati@gmail.com'
				>
					<img
						className={styles.imagenes}
						alt='logo mail'
						src={mail}
					/>
				</a>
			</footer>
		</div>
	);
}

export default About;
