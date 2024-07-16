import {Component} from 'react';
import './css/stylesMenu.css';
import {Link} from 'react-router-dom';


class Menu extends Component{

    state ={
        menuProduto:true,  menuCadastro:true, menuVenda:true, menuLogin:true
    }
    
    handleApresentarMenu(element:string){
        const {menuCadastro, menuLogin, menuProduto, menuVenda} = this.state;

        if(element ==="Produtos"){
            this.setState({
               menuProduto:!menuProduto,
               menuCadastro:true,
               menuLogin:true,
               menuVenda:true
            });

        }else if(element ==="Cadastro"){
            this.setState({
                menuCadastro:!menuCadastro,
                menuLogin:true,
                menuProduto:true,
                menuVenda:true
            })
        }else if(element ==="Venda"){
            this.setState({
                menuVenda:!menuVenda,
                menuCadastro:true,
                menuLogin:true,
                menuProduto:true,

            })
        }
      //  this.setState({showSubMenu:!showSubMenu})
    }
    handleEsconderMenu(){
        const {menuCadastro, menuLogin, menuProduto, menuVenda} = this.state;
        this.setState({
            menuCadastro:false,
            menuLogin:false,
            menuProduto:false,
            menuVenda:false
        })
    }

  
    componentDidMount(){

    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        
    }

     render(){
        const {menuCadastro, menuLogin, menuProduto, menuVenda} = this.state;
        return(
            <header className="menu">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li  onClick={()=>this.handleApresentarMenu('Produtos')} > <Link to='produtos'>Produtos</Link>
                    </li>
                    <li onClick={()=>this.handleApresentarMenu('Cadastro')}><Link to='cadastro' id="Cadastro">Cadastro</Link>
                        <ul className={menuCadastro? "subMenuOn":"subMenuOff"}>
                            <li onClick={()=>this.handleEsconderMenu}>nova loja</li>
                            <li onClick={()=>this.handleEsconderMenu}>Colaborador</li>
                            <li onClick={()=>this.handleEsconderMenu}>Categoria</li>
                            <li onClick={()=>this.handleEsconderMenu}>Fornecedor</li>
                        </ul>
                    </li>
                    <li onClick={()=>this.handleApresentarMenu('Venda')}><Link to="venda" id="Venda">
                    Venda
                        <ul className={menuVenda? "subMenuOn":"subMenuOff"}>
                            <li onClick={()=>this.handleEsconderMenu} >Nova</li>
                            <li onClick={()=>this.handleEsconderMenu}>Consultar</li>
                        </ul>
                    </Link></li>
                    <li><Link to='login'>login</Link></li>
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