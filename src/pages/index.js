import React from 'react'
import './mystyles.scss'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <section className="hero is-black bis is-fullheight is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <img src="images/Logo.png" alt="Brand" />
                </div>
            </div>
        </section>

        <section className="section" id="about">
            <div className="section-heading">
                <h3 className="title is-2">Sobre Mim</h3>
                <h4 className="subtitle is-5">
                    Estudante de engenharia da computação e densenvolvedor em
                    formação
                </h4>
                <div className="container">
                    <p className="has-text-justified">
                        Atualmente cursando o sétimo périodo na{' '}
                        <strong>UFMA</strong> sempre disposto a aceitar novos
                        desafios e aprender coisas novas.
                        <strong>Desenvolvedor web/mobile</strong>, com interesse
                        nas áreas de data science e machine learning. buscando
                        sempre novas oportunidades de trabalho e aprendizado em
                        ambientes saudáveis e flexíveis, visando sempre o
                        desenvolvimento da equipe .
                    </p>
                </div>
                <br />
            </div>
            <div className="columns has-same-height is-gapless">
                <div className="column">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="title is-4">Perfil</h3>

                            <div className="content">
                                <table className="table-profile">
                                    <tr>
                                        <th colSpan="1" />
                                        <th colSpan="2" />
                                    </tr>
                                    <tr>
                                        <td>Endereço:</td>
                                        <td>São Luis, MA</td>
                                    </tr>
                                    <tr>
                                        <td>Telefone:</td>
                                        <td>98 981877537</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>melquias10.mr@gmail.com</td>
                                    </tr>
                                </table>
                            </div>
                            <br />
                            <div className="buttons has-addons is-centered">
                                <a
                                    href="https://github.com/MelquiasRibeiro"
                                    className="button is-black"
                                >
                                    Github
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/melquias-ribeiro-a10639182/"
                                    className="button is-black"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/MelquiasRibeiro"
                                    className="button is-black"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="https://www.instagram.com/melquiasribeiro/"
                                    className="button is-black"
                                >
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img
                                    src="./images/pp.jpg"
                                    alt="Melquias Ribeiro"
                                    style={{}}
                                />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-content skills-content">
                            <h3 className="title is-4">Habilidades</h3>
                            <div className="content">
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>JavaScript :</strong>
                                                <br />
                                                <progress
                                                    className="progress is-success"
                                                    value="80"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>React JS:</strong>
                                                <br />
                                                <progress
                                                    className="progress is-success"
                                                    value="65"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Node.js:</strong>
                                                <br />
                                                <progress
                                                    className="progress is-success"
                                                    value="65"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>HTML5/CSS3</strong>
                                                <br />
                                                <progress
                                                    className="progress is-success"
                                                    value="95"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Banco de dados</strong>
                                                <br />
                                                <progress
                                                    className="progress is-success"
                                                    value="65"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <h4 className="subtitle is-5"> Outras tecnologias :</h4>

        <br />
        <div className="tags custom-tags">
            <span className="tag is-light">React Native</span>
            <span className="tag is-light">Express.js</span>
            <span className="tag is-light">adonisJS</span>
            <span className="tag is-light">Bulma</span>
            <span className="tag is-light">Bootstrap</span>
            <span className="tag is-light">jQuery</span>
            <span className="tag is-light">Flutter</span>
            <span className="tag is-light">Flask</span>
            <span className="tag is-light">Django</span>
            <span className="tag is-light">Git</span>
            <span className="tag is-light">Mysql</span>
            <span className="tag is-light">MongoDB</span>
            <span className="tag is-light">postgresql</span>
            <span className="tag is-light">Pandas</span>
            <span className="tag is-light">plotly</span>
            <span className="tag is-light">Scikit-learn</span>
            <span className="tag is-light">DPLYR</span>
            <span className="tag is-light">Spring Boot</span>
        </div>
        <section className="section" id="services">
            <div className="section-heading">
                <h3 className="title is-2">Conhecimentos</h3>
                <h4 className="subtitle is-5">O que posso fazer por você?</h4>
            </div>
            <br />
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">
                                    Desenvolvimento Web Front End{' '}
                                </h4>
                                Desenvolvimento de sites e sistemas web
                                responsivos e bonitos com{' '}
                                <span className="tag is-light">HTML5</span>
                                <span className="tag is-light">CSS3</span>{' '}
                                padronizando os estilos com{' '}
                                <span className="tag is-light">Bulma</span> ou
                                <span className="tag is-light">
                                    Bootstrap
                                </span>{' '}
                                e inserindo funcionalidades com{' '}
                                <span className="tag is-light">JavaScript</span>
                                e <span className="tag is-light">React JS</span>
                                .
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">
                                    Desenvolvimento Web/Mobile Back End{' '}
                                </h4>
                                Desenvolvimento Back End de aplicações e
                                serviços utilizando{' '}
                                <span className="tag is-light">Node.js</span>
                                com{' '}
                                <span className="tag is-light">Express.js</span>
                                ou<span className="tag is-light">
                                    AdonesJs
                                </span>{' '}
                                com as bases de dados do{' '}
                                <span className="tag is-light">Myslq</span>,
                                <span className="tag is-light">postgresql</span>{' '}
                                e<span className="tag is-light">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">
                                    Desenvolvimento Mobile
                                </h4>
                                Desenvolvimento mobile Android e IOS com{' '}
                                <span className="tag is-light">
                                    React Native
                                </span>{' '}
                                seguindo o Material Desing, sempre priorizando a
                                usabilidade e a acessibilidade.
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">Data Science</h4>
                                Conhecimentos em Data Analysis e Data
                                Visualization com{' '}
                                <span className="tag is-light">
                                    Phyton
                                </span> e{' '}
                                <span className="tag is-light">R</span>e criação
                                de relatórios .
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="resume">
            <div className="section-heading">
                <h3 className="title is-2">Currículo</h3>
                <h4 className="subtitle is-5">Saiba mais sobre mim</h4>
                <a
                    href="./others/CurriculoMelquiasRiebeiro2020.pdf"
                    download="Curriculo_MelquiasRibeiro.pdf"
                    target="_blank"
                    className="button is-black is-medium"
                >
                    <span className="icon">
                        <i className="fas fa-file-alt" />
                    </span>
                    <span>Baixe meu currículo</span>
                </a>
            </div>
        </section>
        <section className="section" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">Portfólio</h3>
                    <h4 className="subtitle is-5">Alguns dos meus trabalhos</h4>
                </div>
                <br />
                <div className="container portfolio-container">
                    <div className="columns">
                        <div className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>
                                            Maridoces <small>(Site)</small>
                                        </span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                Html5
                                            </span>
                                            <span className="tag is-default">
                                                Css3
                                            </span>
                                            <span className="tag is-default">
                                                JS
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/Maridoces.gif"
                                            alt="Gif Maridoces"
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/maridoces-web"
                                        className="card-footer-item"
                                    >
                                        Ver código
                                    </a>
                                    <a
                                        href="http://marydoces.surge.sh/"
                                        className="card-footer-item"
                                    >
                                        Ver site
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Maridoces(app)</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                Flutter
                                            </span>
                                            <span className="tag is-default">
                                                Spring Boot
                                            </span>
                                            <span className="tag is-default">
                                                Myslq
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content has-text-centered">
                                    <figure className="image has-text-centered">
                                        <img
                                            src="./images/maridocesAPP.gif"
                                            alt="maridoces app"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/maridoces"
                                        className="card-footer-item"
                                    >
                                        Ver Mais
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>PokeReact</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                React.js
                                            </span>
                                            <span className="tag is-default">
                                                Styled-components
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content has-text-centered">
                                    <figure className="image has-text-centered">
                                        <img
                                            src="./images/maridocesAPP.gif"
                                            alt="maridoces app"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/pokereact"
                                        className="card-footer-item"
                                    >
                                        Ver Código
                                    </a>
                                    <a
                                        href="http://pokereact.surge.sh/"
                                        className="card-footer-item"
                                    >
                                        Ver Site
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Open Campus Map</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                React.js
                                            </span>
                                            <span className="tag is-default">
                                                Flask
                                            </span>
                                            <span className="tag is-default">
                                                MongoDB
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content has-text-centered">
                                    <figure className="image has-text-centered">
                                        <img
                                            src="./images/maridocesAPP.gif"
                                            alt="maridoces app"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://staging-opencampusmap.surge.sh/"
                                        className="card-footer-item"
                                    >
                                        Ver Site
                                    </a>
                                </footer>
                            </div>
                            <br />
                        </div>
                        <div className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Cron </span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                ReactJs
                                            </span>
                                            <span className="tag is-default">
                                                ReactNative
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/localDev.gif"
                                            alt="localDev Gif"
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/Cron"
                                        className="card-footer-item"
                                    >
                                        Ver Código
                                    </a>
                                    <a
                                        href="http://cron.surge.sh/"
                                        className="card-footer-item"
                                    >
                                        Ver Site
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Vedoo </span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                NodeJs
                                            </span>
                                            <span className="tag is-default">
                                                ReactJs
                                            </span>
                                            <span className="tag is-default">
                                                Postgres
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/localDev.gif"
                                            alt="localDev Gif"
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="http://vedoo.surge.sh/"
                                        className="card-footer-item"
                                    >
                                        Ver Site
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>LocalDev </span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                NodeJs
                                            </span>
                                            <span className="tag is-default">
                                                ReactJs
                                            </span>
                                            <span className="tag is-default">
                                                MongoDB
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/localDev.gif"
                                            alt="localDev Gif"
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/LocalDev"
                                        className="card-footer-item"
                                    >
                                        Ver Mais
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Hoove(APP)</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                ReactNative
                                            </span>
                                            <span className="tag is-default">
                                                Spring Boot
                                            </span>
                                            <span className="tag is-default">
                                                MySQL
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/Hoove.png"
                                            alt="Telas do APP"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/TecEngineering/Hoove"
                                        className="card-footer-item"
                                    >
                                        Ver Código
                                    </a>
                                </footer>
                            </div>
                            <br />
                        </div>

                        <div className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Getkcal</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                HTML5
                                            </span>
                                            <span className="tag is-default">
                                                CSS3
                                            </span>
                                            <span className="tag is-default">
                                                JS
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/Tindev.gif"
                                            alt="Tindev Gif"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/getKcal"
                                        className="card-footer-item"
                                    >
                                        Ver Código
                                    </a>
                                    <a
                                        href="http://getkcal.surge.sh/"
                                        className="card-footer-item"
                                    >
                                        Ver Site
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Hotel Paraíso </span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                HTML5
                                            </span>
                                            <span className="tag is-default">
                                                CSS3
                                            </span>
                                            <span className="tag is-default">
                                                JS
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/Tindev.gif"
                                            alt="Tindev Gif"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/hotel-paraiso"
                                        className="card-footer-item"
                                    >
                                        Ver Código
                                    </a>
                                    <a
                                        href="http://hotel-paraiso.surge.sh/"
                                        className="card-footer-item"
                                    >
                                        Ver Site
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>Tindev</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                Nodejs
                                            </span>
                                            <span className="tag is-default">
                                                ReactJs
                                            </span>
                                            <span className="tag is-default">
                                                MongoDb
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/Tindev.gif"
                                            alt="Tindev Gif"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a
                                        href="https://github.com/MelquiasRibeiro/tindev"
                                        className="card-footer-item"
                                    >
                                        Ver Código
                                    </a>
                                </footer>
                            </div>
                            <br />
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        <span>DashBoard</span>
                                        <span className="is-pulled-right">
                                            <span className="tag is-default">
                                                R
                                            </span>
                                            <span className="tag is-default">
                                                Python
                                            </span>
                                        </span>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <figure className="image">
                                        <img
                                            src="./images/dash.jpeg"
                                            alt="DashBoard"
                                            style={{}}
                                        />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    <a href="/" className="card-footer-item">
                                        Ver mais
                                    </a>
                                </footer>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="contact">
            <div className="container">
                <div className="section-heading">
                    <h3 className="title is-2">Contato</h3>
                    <h4 className="subtitle is-5">Fale comigo</h4>
                </div>
                <br />
                <div className="columns">
                    <div className="column is-6 is-offset-3" />
                    <form action="https://formspree.io/xvorykpw" method="POST">
                        <div className="box" />
                        <div className="field">
                            <label className="label">Nome</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    value=""
                                    name="Nome"
                                    placeholder="Nome"
                                    required
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="email"
                                    placeholder="Email"
                                    value=""
                                    name="_replyto"
                                    required
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope" />
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Mensagem</label>
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    value=""
                                    name="Mensagem"
                                    placeholder="Me diga quanado começamos"
                                    required
                                />
                            </div>
                        </div>
                        <div className="field is-grouped has-text-centered">
                            <div className="control">
                                <button
                                    className="button is-black is-large"
                                    type="submit"
                                    value="Send"
                                >
                                    <span className="icon">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <span>Enviar</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </Layout>
)

export default IndexPage
