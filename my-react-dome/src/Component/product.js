import React, {Component} from 'react';
import './../asset/css/product.css'
export default class product extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id='div8'>
               <div className='con-left'>
                   <img src={this.props.elem.img} alt=""/>
               </div>
                <div className='con-right'>
                    <div>
                        <h3>{this.props.elem.product_name}</h3>
                    </div>
                    <p>
                        {this.props.elem.description}
                    </p>
                    <div>
                        <span className="pro-current-price">{this.props.elem.discount_price}</span>
                        <span className="pro-door-price">门市价 {this.props.elem.price}</span>
                        <span className="pro-sold">已售{this.props.elem.num}</span>
                    </div>

                </div>
            </div>
        )
    }
}
