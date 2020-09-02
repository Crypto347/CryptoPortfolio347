/**
* Operators
*/

import { 
    of
} from 'rxjs';

import { 
    mergeMap, 
    delay 
  } from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
* Constants
*/

import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';

/**
* Epic
*/

export const unmountComponentEpic = (action$) => 
    action$.pipe(
        ofType(actionTypes.UNMOUNT_COMPONENT),
        mergeMap(action => {
            console.log(action.page)
            return of(
                Actions.gotoNewPage(action.repeatedKey, action.repeatedPath, action.page)
            ).pipe(
                delay(1000)
            )
        })
    )

export default unmountComponentEpic;
