import React from 'react'
import './style.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="section-heading" />
            <p className="has-text-centered">
                2020
                <strong>
                    {' '}
                    Melquias Ribeiro
                    <i className="far fa-copyright" />
                </strong>
                , todos os direitos reservados.
            </p>
            <br />
            <div className="icones level">
                <div className="level-item has-text-centered">
                    <a href="https://github.com/MelquiasRibeiro">
                        <i className="fab fa-github-square" />
                    </a>
                </div>
                <div className="level-item has-text-centered">
                    <a href="https://www.instagram.com/melquiasribeiro/">
                        <i className="fab fa-instagram" />
                    </a>
                </div>
                <div className="level-item has-text-centered">
                    <a href="https://www.linkedin.com/in/melquias-ribeiro-a10639182/">
                        <i className="fab fa-linkedin" />
                    </a>
                </div>
                <div className="level-item has-text-centered">
                    <a href="https://twitter.com/MelquiasRibeiro">
                        <i className="fab fa-twitter-square" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
