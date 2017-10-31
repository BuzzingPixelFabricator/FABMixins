/* global exports */

exports.mixins = {
    centeredBlock: function(mixin, maxWidth, marginBottom) {
        'use strict';

        var rule = {
            display: 'block',
            'margin-left': 'auto',
            'margin-right': 'auto'
        };

        if (maxWidth) {
            rule['max-width'] = maxWidth;
        }

        if (marginBottom) {
            rule['margin-bottom'] = marginBottom;
        }

        return rule;
    }
};
