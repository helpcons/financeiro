import './style.css'

 function Header () {
    return (
        <div className="header">
            <div id="logo">
                <div>
                    <img src="https://extranet.lopesrio.com.br/assets/img/logo.svg" alt="Logo Lopes" />
                </div>
                <p className="company-infos">
                    <div>
                        <span className="item-description">
                            Lopes 
                        </span>
                    </div>
                    <div>
                        <span className="item-description">
                            Financeiro
                        </span>
                    </div>
                </p>
            </div>
            
            {/* <div className="search">
                <input type="text" placeholder='Search' />
            </div> */}

            <div className="user">
                <div className="settings">
                    <i class="fa-solid fa-gear"></i>
                </div>
                <p className="user-info">
                    <span className="item-descrition">Helder Pereira</span>
                </p>
                <div>
                    <img src="https://cdn.lopesrj.com.br/perfil/imagemlocal.ashx?us=10229&wd=200&ht=200&m=crop" alt="Usuário" />
                </div>
                <div className='arrow-user'>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            

        </div>
    )
}

export default Header