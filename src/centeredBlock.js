/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

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
