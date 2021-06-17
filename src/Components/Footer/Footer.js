import React from "react";
import './Footer.css'

export const Footer = () => {
    return (
    <footer>
        <section className="ft-main">
            <div className="ft-main-item">
            <h2 className="ft-title">MENU</h2>
            <ul>
                <li><a href="/">DC TEAM</a></li>
                <li><a href="/aboutus">SOBRE</a></li>
                <li><a href="#">NOTÍCIAS</a></li>
            </ul>
            </div>
            <div className="ft-main-item">
            <h2 className="ft-title">LOJA</h2>
            <ul>
                <li><a href="https://shop.dcteam.gg/produtos" target="_blank">CATÁLOGO</a></li>
                <li><a href="https://shop.dcteam.gg/jersey-2021-5">UNIFORME</a></li>
                <li><a href="#">COLEÇÕES</a></li>
                <li><a href="/aboutus">F.A.Q</a></li>
            </ul>
            </div>
        </section>
        <section className="ft-social">
            <a className="follorthethunder">#FollowTheThunder</a><br />
            <ul className="ft-social-list">
            <li><a href="https://twitter.com/DCTeam_gg"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://twitch.tv/dcteam_gg"><i className="fab fa-twitch"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            <li><a href="https://instagram.com/dcteam.gg"><i className="fab fa-instagram"></i></a></li>
            </ul>
        </section>
        <section className="ft-legal">
            <a>Copyright 2021 DC Team. Todos os direitos reservados.</a>
        </section>
    </footer>
    );
}

export default {};