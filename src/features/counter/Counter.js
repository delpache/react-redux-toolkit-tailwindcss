import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    increment, 
    decrement, 
    incrementByAmount, 
    incrementAsync, 
    selectCount 
} from "./counterSlice";
import styles from './Counter.module.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(2);
    const asyncStyle = "bg-indigo-300 text-indigo-800 hover:bg-indigo-800 hover:text-white rounded-md px-4 py-2 font-bold";
    const inputStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3.5 mr-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

    return (
        <div>
            <div className="max-w-[1640px] m-auto px-4 py-12">
                <div className="px-10 py-20">
                    <h1 className='text-indigo-900 font-bold text-4xl text-center top-10'>
                        Counter React Redux Toolkit Tailwind CSS
                    </h1>
                </div>
                <div className="text-center">
                    <button 
                        aria-label="Incrémenter le Compteur"
                        className="text-white bg-indigo-800 px-4 py-2 rounded hover:bg-indigo-900"
                        onClick={() => dispatch(increment())}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        
                    </button>
                    <span className="m-5" x-text="count">{ count }</span>
                    <button 
                        aria-label="Décrémenter le Compteur"
                        className="text-white bg-indigo-800 px-4 py-2 rounded hover:bg-indigo-900"
                        onClick={() => dispatch(decrement())}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                    </button>
                    <div className="px-10 py-20">
                        <input 
                            className={inputStyle}
                            aria-label="Définir le montant à incrémenter"
                            value={incrementAmount}
                            onChange={e => setIncrementAmount(e.target.value)}
                        />
                        <button
                            className={styles.button}
                            onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                        >
                            Ajouter un Montant
                        </button>
                        <button
                            className={ styles.asyncButton } 
                            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                        >
                            Ajout Asynchrone
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}