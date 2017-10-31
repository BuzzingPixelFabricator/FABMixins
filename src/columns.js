/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

/* global exports */

function columnsCount(count) {
    'use strict';

    return {
        'column-count': count
    };
}

function columnsGap(val) {
    'use strict';

    return {
        'column-gap': val
    };
}

function columnsStyle(val) {
    'use strict';

    return {
        'column-rule-style': val
    };
}

function columnsWidth(val) {
    'use strict';

    return {
        'column-rule-width': val
    };
}

exports.mixins = {
    columnsCount: function(mixin, count) {
        'use strict';

        return columnsCount(count);
    },
    columnsGap: function(mixin, val) {
        'use strict';

        return columnsGap(val);
    },
    columnsStyle: function(mixin, val) {
        'use strict';

        return columnsStyle(val);
    },
    columnsWidth: function(mixin, val) {
        'use strict';

        return columnsWidth(val);
    },
    columns: function(mixin, count, gap, style, width) {
        'use strict';

        var rule;

        count = count || 2;

        rule = columnsCount(count);

        if (gap) {
            Object.assign(rule, columnsGap(gap));
        }

        if (style) {
            Object.assign(rule, columnsStyle(style));
        }

        if (width) {
            Object.assign(rule, columnsWidth(width));
        }

        return rule;
    }
};
