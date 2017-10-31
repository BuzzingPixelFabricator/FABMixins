/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

/* global exports */

exports.mixins = {
    clearfix: function(mixin) {
        'use strict';

        return {
            '&:after': {
                clear: 'both',
                content: "' '",
                display: 'inline-block',
                width: '100%'
            }
        };
    }
};
