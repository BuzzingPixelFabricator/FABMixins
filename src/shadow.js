/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

/* global exports */

exports.mixins = {
    shadow: function(mixin, color, x, y, blur, spread) {
        'use strict';

        color = color || 'rgba(0, 0, 0, 0.4)';
        x = x || '1px';
        y = y || x;
        blur = blur || '5px';
        spread = spread || '0px';

        return {
            'box-shadow': x + ' ' + y + ' ' + blur + ' ' + spread + ' ' + color
        };
    },
    shadowInner: function(mixin, color, x, y, blur, spread) {
        'use strict';

        color = color || 'rgba(0, 0, 0, 0.8)';
        x = x || '0px';
        y = y || x;
        blur = blur || '5px';
        spread = spread || '0px';

        return {
            'box-shadow': 'inset ' + x + ' ' + y + ' ' + blur + ' ' + spread + ' ' + color
        };
    }
};
