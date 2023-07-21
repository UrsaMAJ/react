


function MenuItem(props){
    return(
        <div className='menuItemContainer'>
            <div className='menuItemBanner'>
                <h2> {props.itemName}</h2>
            </div>
            <div  className='menuItemPictureContainer'>
                <img src={props.itemImg} className='menuItemPicture'></img>
            </div>
            <div className='menuItemDescrContainer'>
                <h3>{props.ItemDescr}</h3>
                <h3>{props.itemPrice}</h3>
            </div>
        </div>
        
    )
}

export default MenuItem;