import React from 'react';
import style from './Botao.module.scss';


interface Props {
    children?: React.ReactNode, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Botao({children, type, onClick}: Props) {
    // const {type = "button", onClick} = this.props;
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}
        >
            {children}
        </button>
    )
}

//Class Components
// class Botao1 extends React.Component
// <{
//     children?: React.ReactNode, 
//     type?: "button" | "submit" | "reset" | undefined,
//     onClick?: () => void
// }> 
// {
//     render() {
//         const {type = "button", onClick} = this.props;
//         return (
//             <button onClick={onClick} type={type} className={style.botao}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }