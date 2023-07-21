import MenuItem from './menuItem';
import './menu.css'
import item from "./data.json";

function Menu(){
    return(
        <div className='menu'>
            <div className='menuBanner'> <h1>Menu</h1></div>
            <MenuItem 
                itemName={item.itemName}
                itemImg={item.itemImg} 
                itemDescr={item.itemDescr} 
                itemPrice={item.itemPrice}
            />
            
        </div>
        
    )
}

export default Menu;