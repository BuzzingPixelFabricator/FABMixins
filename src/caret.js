/* global exports */

exports.mixins = {
    caretUp: function(mixin, color, tipSize, edgesSize) {
        'use strict';

        color = color || 'var(--caretDefaultColor)';
        tipSize = tipSize || 'var(--caretDefaultTipSize)';
        edgesSize = edgesSize || 'var(--caretDefaultEdgesSize)';

        return {
            'border-left': edgesSize + ' solid transparent',
            'border-right': edgesSize + ' solid transparent',
            'border-bottom': tipSize + ' solid ' + color,
            content: "' '",
            height: 0,
            width: 0
        };
    },
    caretDown: function(mixin, color, tipSize, edgesSize) {
        'use strict';

        color = color || 'var(--caretDefaultColor)';
        tipSize = tipSize || 'var(--caretDefaultTipSize)';
        edgesSize = edgesSize || 'var(--caretDefaultEdgesSize)';

        return {
            'border-left': edgesSize + ' solid transparent',
            'border-right': edgesSize + ' solid transparent',
            'border-top': tipSize + ' solid ' + color,
            content: "' '",
            height: 0,
            width: 0
        };
    },
    caretRight: function(mixin, color, tipSize, edgesSize) {
        'use strict';

        color = color || 'var(--caretDefaultColor)';
        tipSize = tipSize || 'var(--caretDefaultTipSize)';
        edgesSize = edgesSize || 'var(--caretDefaultEdgesSize)';

        return {
            'border-bottom': edgesSize + ' solid transparent',
            'border-top': edgesSize + ' solid transparent',
            'border-left': tipSize + ' solid ' + color,
            content: "' '",
            height: 0,
            width: 0
        };
    },
    caretLeft: function(mixin, color, tipSize, edgesSize) {
        'use strict';

        color = color || 'var(--caretDefaultColor)';
        tipSize = tipSize || 'var(--caretDefaultTipSize)';
        edgesSize = edgesSize || 'var(--caretDefaultEdgesSize)';

        return {
            'border-bottom': edgesSize + ' solid transparent',
            'border-top': edgesSize + ' solid transparent',
            'border-right': tipSize + ' solid ' + color,
            content: "' '",
            height: 0,
            width: 0
        };
    }
};
