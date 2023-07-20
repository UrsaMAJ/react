import MenuItem from './menuItem';
import './menu.css'
function Menu(){
    return(
        <div className='menu'>
            <div className='menuBanner'> <h1>Menu</h1></div>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
        
    )
}

export default Menu;