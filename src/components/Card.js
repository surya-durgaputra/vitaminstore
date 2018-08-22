import React from 'react'
import LazyLoad from 'react-lazyload'
import './Card.css'

const Card = (props) => (
    <LazyLoad height={650} offset={-100}>
        <div className={props.card.animation}>
            {/* <img src="juice.jpg" alt="Vitamin juice" className="card-image"/> */}
            <div className="front" onClick={()=>props.showBack(props.card)}>
                <div className="container">
                    <h3>Accessa <span className="price">Ticket# 10000</span></h3>
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, praesentium ducimus placeat recusandae explicabo odit nisi, adipisci obcaecati harum accusamus id architecto iusto at iure nam, inventore laboriosam sequi. </p>
                </div>
            </div>
            <div className="container-back back" onClick={()=>props.showFront(props.card)}>
                <h3>Accessa <span className="price">Ticket# 10000</span></h3>
                
                <p>{props.card.description}</p>
            </div>
            
        </div>
    </LazyLoad>
)

export default Card