'use strict';

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  add comment -------------------------------------------------------------------

var ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: _uuid2.default.v4()
    };
}

//   remove comment -----------------------------------------------------------------
var REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    };
}

//  edit comment ------------------------------------------------------------------------
var EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id: id,
        text: text
    };
}

//  plus one ------------------------------------------------------------------------------
var PLUS_ONE = 'PLUS_ONE';

function plusOne(id) {
    return {
        type: PLUS_ONE,
        id: id
    };
}

//  minus one ----------------------------------------------------------------------------
var MINUS_ONE = 'MINUS_ONE';

function minusOne(id) {
    return {
        type: MINUS_ONE,
        id: id
    };
}
