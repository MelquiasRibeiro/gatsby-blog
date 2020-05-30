import React from 'react'
import './style.scss'

export default function Header() {
    return (
        <nav className="navbar is-black is-fixed-top">
            <div className="navbar-brand">
                <div
                    className="navbar-burger burger"
                    data-target="navbarExampleTransparentExample"
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item" href="#about">
                        <span className="icon">
                            <i className="fas fa-info" />
                        </span>
                        <span>Sobre Mim</span>
                    </a>
                    <a className="navbar-item" href="#services">
                        <span className="icon">
                            <i className="fas fa-bars" />
                        </span>
                        <span>Habilidades</span>
                    </a>
                    <a className="navbar-item" href="#resume">
                        <span className="icon">
                            <i className="fas fa-file-alt" />
                        </span>
                        <span>Currículo</span>
                    </a>
                    <a className="navbar-item" href="#portfolio">
                        <span className="icon">
                            <i className="fas fa-th-list" />
                        </span>
                        <span>Portfólio</span>
                    </a>
                    <a className="navbar-item" href="#contact">
                        <span className="icon">
                            <i className="fas fa-envelope" />
                        </span>
                        <span>Fale comigo</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
