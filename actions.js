 import uuid from 'uuid';
 

//  add comment -------------------------------------------------------------------

const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
   return {
       type: ADD_COMMENT,
       text,
       id: uuid.v4()
    }
}

//   remove comment -----------------------------------------------------------------

const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id,
    }
}
 
//  edit comment ------------------------------------------------------------------------
const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text,
    }
}

//  plus one ------------------------------------------------------------------------------
const PLUS_ONE = 'PLUS_ONE';

function plusOne(id) {
    return {
        type: PLUS_ONE,
        id,
    }
}

//  minus one ----------------------------------------------------------------------------
const MINUS_ONE = 'MINUS_ONE';

function minusOne(id) {
   return {
       type: MINUS_ONE,
       id,
   }
}
