import React from 'react'

const Alert = (props) => {

    const capitalizingFun=(word)=>{
            let lower= word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.alert &&
        <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalizingFun(props.alert.type)}</strong>:{props.alert.msg}
            {/* <button type='button' className='btn-close text-end' data-bs-dismiss="alert" aria-label='Close'></button> */}
        </div>
    )
}

export default Alert