 import uuid from 'uuid';
 

//  add comment -------------------------------------------------------------------

 const ADD_COMMENT = 'ADD_COMMENT';

 {
     type: ADD_COMMENT,
     text: 'new comment'
 }

 function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
 }
 const boundAddComment = text => dispatch(addComment(text));
 boundAddComment();
 

 

//   remove comment -----------------------------------------------------------------
 const REMOVE_COMMENT = 'REMOVE_COMMENT';

 {
     type: REMOVE_COMMENT,
     id: uuid.v4()
 }

 function removeComment(text) {
     return {
         type: REMOVE_COMMENT,
         id: uuid.v4()
     }
 }
 const boundRemoveComment = text =>(removeComment(text));
 boundRemoveComment();

//  edit comment ------------------------------------------------------------------------

 const EDIT_COMMENT = 'EDIT_COMMENT';

 {
     type: EDIT_COMMENT,
     id: uuid.v4()
     text: 'edited comment text'
 }

 function editComment(text) {
     return {
         type: EDIT_COMMENT,
         id: uuid.v4(),
         text
     }
 }
 const boundEditComment = text => (editComment(text));
 boundEditComment();

//  plus one ------------------------------------------------------------------------------

 const PLUS_ONE = 'PLUS_ONE';

 {
    type: PLUS_ONE,
    id: uuid.v4(),
    symbol: thumbs_up
 }

 function plusOne(symbol) {
     return {
         type: PLUS_ONE,
         id: uuid.v4(),
         symbol
     }
 }
 const boundPlusOne = symbol => (plusOne(symbol));
 boundPlusOne();

//  minus one ----------------------------------------------------------------------------
 const MINUS_ONE = 'MINUS_ONE';

 {
     type: MINUS_ONE,
     id: uuid.v4(),
     symbol: thumb_down
 }

 function minusOne(symbol) {
    return {
        type: MINUS_ONE,
        id: uuid.v4(),
        symbol
    }
}
const boundMinusOne = symbol => (minusOne(symbol));
boundMinusOne();




