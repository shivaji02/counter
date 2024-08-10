import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementSync,
    resetValue,
    selectCount,
} from './counterslice'

import './counter.css'

export function Counter(){
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('0');
    console.log('counter.js file lo check');
    
    return (
        <div>
            <div className={'row'}>
                <button
                    className={'button'}
                    aria-label='Increment Value'
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>

                <span className={'value'}>{count}</span>

                <button
                    className={'button'}
                    aria-label='Decrement Value'
                    onClick={() => {
                        if (count > 0) {
                            dispatch(decrement());
                        }
                    }}
                    disabled={count <= 0}
                >
                    -
                </button>
            </div>
            <div className={'row'}>
                <input
                    className={'textbox'}
                    aria-label='set Increment amount'
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />

                <button
                    className={'button'}
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                    Add Amount
                </button>

                <button
                    className={'button'}
                    onClick={() => dispatch(incrementSync(Number(incrementAmount) || 0))}
                >
                    Add Sync
                </button>
            </div>
            <button className='button' onClick={() => dispatch(resetValue())}>
                Reset
            </button>

        </div>
    );
};