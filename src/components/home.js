import React from 'react'
export default function home() {
    return (
        <div>
            <div className='add-to-cart'>
                <img src='/cart.png'/>
            </div>
            <div className='cart-wrapper'>
                <div className='img-wrapper img'>
                    <img alt='' src='/images.jpg' />
                </div>
                <div className='text-wraper item'>
                    <span style={{"float":"left"}}>I-phone</span>
                    <span style={{"float":"left"}}>Price:$1000</span>
                </div>
                <div className='btn-wrapper button'>
                    <button>Ad to Cart</button>
                </div>
            </div>
            {/* <div className='cart-wrapper'>
                <div className='img-wrapper img'>
                    <img alt='' src='/images.jpg' />
                </div>
                <div className='text-wraper item'>
                    <span style={{"float":"left"}}>I-phone</span>
                    <span style={{"float":"left"}}>Price:$1000</span>
                </div>
                <div className='btn-wrapper button'>
                    <button>Ad to Cart</button>
                </div>
            </div>
            <div className='cart-wrapper'>
                <div className='img-wrapper img'>
                    <img alt='' src='/images.jpg' />
                </div>
                <div className='text-wraper item'>
                    <span style={{"float":"left"}}>I-phone</span>
                    <span style={{"float":"left"}}>Price:$1000</span>
                </div>
                <div className='btn-wrapper button'>
                    <button>Ad to Cart</button>
                </div>
            </div>
            <div className='cart-wrapper'>
                <div className='img-wrapper img'>
                    <img alt='' src='/images.jpg' />
                </div>
                <div className='text-wraper item'>
                    <span style={{"float":"left"}}>I-phone</span>
                    <span style={{"float":"left"}}>Price:$1000</span>
                </div>
                <div className='btn-wrapper button'>
                    <button>Ad to Cart</button>
                </div>
            </div> */}
            </div>
    )
}
