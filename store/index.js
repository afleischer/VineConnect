import React from 'react';
import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers/reducers.js';

export const store = createStore(rootReducer);
/*{
	 
	combineReducers({e
		state: reducers
	})	
	
}
*/