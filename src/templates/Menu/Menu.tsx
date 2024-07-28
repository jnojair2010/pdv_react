import {Component} from 'react';
import './css/stylesMenu.css';
import {Link} from 'react-router-dom';


class Menu extends Component{

    state ={
        menuProduto:true,
        menuCadastro:true,
        menuVenda:true,
        menuLogin:true,
        menuMobile: true
    }
    
    handleApresentarMenu(element:string){
        const {menuCadastro, menuLogin, menuProduto, menuVenda, menuMobile} = this.state;

        if(element ==="Produtos"){
            this.setState({
               menuProduto:!menuProduto,
               menuCadastro:true,
               menuLogin:true,
               menuVenda:true,
               menuMobile:true
            });

        }else if(element ==="Cadastro"){
            this.setState({
                menuCadastro:!menuCadastro,
                menuLogin:true,
                menuProduto:true,
                menuVenda:true,
                menuMobile:true
            })
        }else if(element ==="Venda"){
            this.setState({
                menuVenda:!menuVenda,
                menuCadastro:true,
                menuLogin:true,
                menuProduto:true,
                menuMobile:true

            })
        }
      //  this.setState({showSubMenu:!showSubMenu})
    }
    handleEsconderMenu(){
        const {menuCadastro, menuLogin, menuProduto, menuVenda, menuMobile} = this.state;
        this.setState({
            menuCadastro:false,
            menuLogin:false,
            menuProduto:false,
            menuVenda:false,
            menuMobile:true
           
        })
    }
    handleClickMenuMobile(){
        const { menuMobile} = this.state;
    
        if(menuMobile==true){
            this.setState({
                menuMobile : false
            })
        }else{
            this.setState({
                menuMobile : true
            })
        }
       
    }

  
    componentDidMount(){

    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }

     render(){
        const {menuCadastro, menuLogin, menuProduto, menuVenda, menuMobile} = this.state;
        return(
            <header className={ menuMobile? "menu": "menuMobileAtivo"}>
                <div onClick={()=>this.handleClickMenuMobile()} id="menuMobile">
                </div>

                <nav id="navMobile">
                    <ul>
                        <Link to='/'> <li onClick={()=>this.handleApresentarMenu('Produtos')}>Home</li></Link>
                        <Link to='produtos'> 
                            <li  onClick={()=>this.handleApresentarMenu('Produtos')} > Produtos
                            </li>
                        </Link>
                        <Link to='cadastro' >
                            <li id="Cadastro" onClick={()=>this.handleApresentarMenu('Cadastro')}>Cadastro</li>
                        </Link>
                        <Link to="venda" >
                            <li id="Venda" onClick={()=>this.handleApresentarMenu('Venda')}>Venda
                                <ul className={menuVenda? "subMenuOn":"subMenuOff"}>
                                    <li onClick={()=>this.handleEsconderMenu} >Nova</li>
                                    <li onClick={()=>this.handleEsconderMenu}>Consultar</li>
                                </ul>
                            </li>
                        </Link>
                        <Link to='login'><li>login</li></Link>
                    </ul>
                </nav>

                <nav id="navDesktop">
                    <ul>
                        <Link to='/'> <li>Home</li></Link>
                        <Link to='produtos'> 
                            <li  onClick={()=>this.handleApresentarMenu('Produtos')} > Produtos
                            </li>
                        </Link>
                        <Link to='cadastro' >
                            <li id="Cadastro" onClick={()=>this.handleApresentarMenu('Cadastro')}>Cadastro</li>
                        </Link>
                        <Link to="venda" >
                            <li id="Venda" onClick={()=>this.handleApresentarMenu('Venda')}>Venda
                                <ul className={menuVenda? "subMenuOn":"subMenuOff"}>
                                    <li onClick={()=>this.handleEsconderMenu} >Nova</li>
                                    <li onClick={()=>this.handleEsconderMenu}>Consultar</li>
                                </ul>
                            </li>
                        </Link>
                        <Link to='login'><li>login</li></Link>
                    </ul>
                </nav>
            </header>
        )
     }

   }

export default Menu;


     //state para menu dinâmica e sub menu dinâmico
     /*state = {
        listOfMenu:[
                {d:1, nameMenu:"Home", classCss:"subMenuOff"},
                {id:2,nameMenu:"Produtos",subListMenu:[{ id:1,nameSubMenu:"Cadastrar"},{id:2,nameSubMenu:"Consultar"}],classCss:"subMenuOff"},
                {id:3,nameMenu:"Cadastro",subListMenu:[{id:1,nameSubMenu:"Nova Loja"}, {id:2,nameSubMenu:"Colaborador"},{id:3,nameSubMenu:"Categoria" }, {id:4,nameSubMenu:"Fornecedor"}],classCss:"subMenuOff"},
                {id:4,nameMenu:"Venda",subListMenu:[{id:1,nameSubMenu:"Nova Venda"},{id:2,nameSubMenu:"Consultar Venda" }],classCss:"subMenuOff"},
                {id:5, nameMenu:"Login",classCss:"subMenuOff"}
            ],
        showSubMenu:false
    }*/