import React from 'react';

const MyInfo = ({ details }) => {
    return (
        <>
            <img src="#" alt="" />
            <h1>Kim Kiamco</h1>
            <div className='info'>
                details.map(el => {
                    <a href={el.link}>
                        <img src={el.logo} alt={el.name} />
                        el.detail
                    </a>
                })
            </div>
        </>
    )
}