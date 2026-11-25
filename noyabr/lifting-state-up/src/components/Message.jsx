import React from 'react'

const Message = ({count}) => {
    if(count === 0){
        return <h2>Saygac sifirdir</h2>
    }
    else if (count >0){
        return <h2>Saygac artir</h2>
    }
    else if (count < 0){
        return <h2> Saygac azalir</h2>
    }
}

export default Message