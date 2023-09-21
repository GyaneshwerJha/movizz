import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    <p>Welcome to Movizz - Your Ultimate Movie Destination!</p>
                    <p>Explore a world of cinema with our extensive collection of movies, TV shows, and more. From classic films to the latest blockbusters, we've got it all.</p>
                    <p>Discover movie reviews, trailers, cast information, and more. Whether you're a cinephile or just looking for something to watch tonight, Movies has you covered.</p>
                    <p>Join our movie-loving community and start your cinematic journey today!</p>
                </div>

                <div className="socialIcons">
                    <a href="https://github.com/GyaneshwerJha" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="icon">
                            <FaGithub /> {/* GitHub icon */}
                        </span>
                    </a>
                    <a href="https://www.instagram.com/mrgyaneshwerjha?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="icon">
                            <FaInstagram /> {/* Instagram icon */}
                        </span>
                    </a>
                    <a href="https://x.com/gyaneshwer65676?t=Qa-QLgOZxwRyNvmWneVccw&s=09" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="icon">
                            <FaTwitter /> {/* Twitter icon */}
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/gyaneshwer-jha-233871206" style={{ textDecoration: 'none', color: 'white' }}>
                        <span className="icon">
                            <FaLinkedin /> {/* LinkedIn icon */}
                        </span>
                    </a>
                </div>



            </ContentWrapper>

        </footer>

    );
};

export default Footer;