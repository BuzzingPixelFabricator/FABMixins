/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

/* global exports */

exports.mixins = {
    backgroundGradient: function(mixin, color, start, end, angle) {
        'use strict';

        color = color || 'gray';
        start = start || 'rgba(0, 0, 0, 0.8)';
        end = end || 'rgba(0, 0, 0, .2)';
        angle = angle || '180';

        return {
            'background-color': color,
            'background': 'linear-gradient(' + angle + 'deg, ' + start + ', ' + end + ')'
        };
    },
    backgroundGradientDark: function(mixin, start, end, angle) {
        'use strict';

        var startAlpha;
        var endAlpha;

        start = start || 0;
        end = end || 1;
        angle = angle || '180';

        startAlpha = 'rgba(0, 0, 0, ' + start + ')';
        endAlpha = 'rgba(0, 0, 0, ' + end + ')';

        return {
            'background-color': '#000',
            'background': 'linear-gradient(' + angle + 'deg, ' + startAlpha + ', ' + endAlpha + ')'
        };
    },
    backgroundGradientLight: function(mixin, start, end, angle) {
        'use strict';

        var startAlpha;
        var endAlpha;

        start = start || 0;
        end = end || 1;
        angle = angle || '180';

        startAlpha = 'rgba(255, 255, 255, ' + start + ')';
        endAlpha = 'rgba(255, 255, 255, ' + end + ')';

        return {
            'background-color': '#fff',
            'background': 'linear-gradient(' + angle + 'deg, ' + startAlpha + ', ' + endAlpha + ')'
        };
    }
};
