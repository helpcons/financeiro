import "./styles.css"

function SideBar () {

    return (
        <div>
            <nav id="sidebar">
                <div id="sidebar_content">
                    {/* <div id="user">
                        <img src="https://extranet.lopesrio.com.br/assets/img/logo.svg" alt="Logo Lopes" />
                        <p id="user_infos">
                            <span className="item-descrition">
                                Lopes
                            </span>
                            <span className="item-descrition">
                                Financeiro
                            </span>
                        </p>
                    </div> */}
                    
                    <ul id="side_items">
                        <li className="side-item">
                            <a href="#">
                                <i className="fa-solid fa-chart-line"></i>
                                <span className="item-descrition">
                                    Dashboard
                                </span>
                            </a>
                        </li>
            
                        <li className="side-item active">
                            <a href="/index.html">
                                <i className="fa-regular fa-credit-card"></i>
                                <span className="item-descrition">
                                    Contas a Pagar
                                </span>
                            </a>
                        </li>
            
                        <li className="side-item">
                            <a href="#">
                                <i className="fa-solid fa-bars-staggered"></i>
                                <span className="item-descrition">
                                    Fluxo
                                </span>
                            </a>
                        </li>
            
                        <li className="side-item">
                            <a href="#">
                                <i className="fa-solid fa-box"></i>
                                <span className="item-descrition">
                                    Cadastro
                                </span>
                            </a>
                        </li>
            
                        <li className="side-item">
                            <a href="#">
                                <i className="fa-solid fa-gear"></i>
                                <span className="item-descrition">
                                    Configurações
                                </span>
                            </a>
                        </li>
                    </ul>
            
                    <button id="open_btn">
                        <i id="open_btn_icon" className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                <div id="logout">
                    <button id="logout_btn">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span className="item-descrition">
                            Logout
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default SideBar