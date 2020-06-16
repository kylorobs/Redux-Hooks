import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions= {};

export const useStore = (shouldUpdate = true) => {

    const setState = useState(globalState)[1];

    const dispatch = ( actionIdentifier, payload ) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = {...globalState, ...newState};

        for (const listener of listeners){
            listener(globalState)
        }
    }

    useEffect(() => {
       if(shouldUpdate) listeners.push(setState);

        return () => {
            if (shouldUpdate)listeners = listeners.filter(l => l !== setState)
        }
    }, [ setState ]);

    return [ globalState, dispatch ];
}

export const initStore = (userActions, initialState) => {
    console.log('Init Store')
    if (initialState){
        globalState = { ...globalState, ...initialState }
    }
    actions = { ...actions, ...userActions }
}

