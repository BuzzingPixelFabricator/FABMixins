/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

/* global FAB */
/* global exports */

exports.mixins = {
    loadFont: function(mixin, name, file, weight, style) {
        'use strict';

        var rule = {};

        file = file || name;
        weight = weight || 'normal';
        style = style || 'normal';

        rule['font-family'] = name;
        rule['font-style'] = style;
        rule['font-weight'] = weight;

        if (FAB.config.disableWoff2) {
            rule.src = ', url(var(--fontPath)' + file + ".woff) format('woff')";
            rule.src += ', url(var(--fontPath)' + file + ".ttf) format('truetype')";
        } else {
            rule.src = 'url(var(--fontPath)' + file + ".woff2) format('woff2')";
            rule.src += ', url(var(--fontPath)' + file + ".woff) format('woff')";
            rule.src += ', url(var(--fontPath)' + file + ".ttf) format('truetype')";
        }

        return {
            '@font-face': rule
        };
    }
};
