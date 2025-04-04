import '../../styles/CartItem.css'

function CartItem ({props}) {

    return (
      
        <div className="cartBody">
            <div className='imgBody'><img src={props.image} alt="" />
            </div>
            <div className="detailMenu">
                <h3>{props.plate}</h3>
                <p>{props.description}</p>
                <div>
                    <button className="buttonCommander">Commander</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;