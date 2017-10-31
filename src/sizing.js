/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

/* global exports */

var vm = require('vm');

function ratioFunction(ratio) {
    'use strict';

    ratio = ratio || '16 / 9';

    ratio = vm.runInThisContext(ratio);

    return {
        display: 'block',
        height: 0,
        'padding-top': (1 / ratio) * 100 + '%'
    };
}

exports.mixins = {
    ratio: function(mixin, ratio) {
        'use strict';

        return ratioFunction(ratio);
    },
    ratioEmbed: function(mixin, ratio) {
        'use strict';

        var rule = ratioFunction(ratio);

        rule.content = "' '";

        return {
            overflow: 'hidden',
            position: 'relative',
            '&:before': rule
        };
    },
    circle: function(mixin, diameter, crop, display) {
        'use strict';

        var rule = {
            'border-radius': diameter / 2 + 'px',
            height: diameter + 'px',
            width: diameter + 'px'
        };

        if (crop) {
            rule.overflow = 'hidden';
        }

        if (display) {
            rule.display = display;
        }

        return rule;
    }
};
