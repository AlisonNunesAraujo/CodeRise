import './styles.css' 
import { TbRocket } from "react-icons/tb";    
export default function Header() {
 return (
   <div className='container'>
    <div className='icon'>
        <TbRocket color='blue' size={45}/>
    </div>
    <div className='menu'>
        <a>sobre nos</a>
        <a>Serviços</a>
        <button>
            contato
        </button>
    </div>
   </div>
 );
}