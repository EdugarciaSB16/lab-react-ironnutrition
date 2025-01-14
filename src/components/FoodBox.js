import React from 'react'
import '../assets/css/FoodBox.css'

const FoodBox = (props) => {
    const {name, calories, image, quantity, onChange} = props

    const onQuantityChange = (event) => {
        onChange({...props, quantity: Number(event.target.value)})
    }

    const onClick = (event) => {
        onChange({ ...props, quantity: quantity +1 })
    }

    return (
        <div className="FoodBox">
            <div className="container">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={image} alt={name} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{name}</strong> <br />
                                    <small>{calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value={quantity} onChange={onQuantityChange} />
                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={onClick}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    )
}

export default FoodBox;