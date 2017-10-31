/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

/* global exports */

exports.mixins = {
    transition: function(mixin, property, duration, ease, delay) {
        'use strict';

        property = property || 'all';
        duration = duration || 'var(--defaultDuration)';
        ease = ease || 'var(--defaultTiming)';
        delay = delay || '0s';

        return {
            transition: property + ' ' + duration + ' ' + ease + ' ' + delay
        };
    },
    transitionDelay: function(mixin, delay) {
        'use strict';

        delay = delay || '1s';

        return {
            'transition-delay': delay
        };
    },
    transitionDuration: function(mixin, duration) {
        'use strict';

        duration = duration || 'var(--defaultDuration)';

        return {
            'transition-duration': duration
        };
    },
    transitionProperty: function(mixin, property) {
        'use strict';

        property = property || 'all';

        return {
            'transition-property': property
        };
    },
    transitionTimingFunction: function(mixin, functionParam) {
        'use strict';

        functionParam = functionParam || 'var(--defaultTiming)';

        return {
            'transition-timing-function': functionParam
        };
    }
};
