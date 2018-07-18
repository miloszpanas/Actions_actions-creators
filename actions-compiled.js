'use strict';

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: _uuid2.default.v4()
    };
}
