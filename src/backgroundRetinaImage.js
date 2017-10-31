/* global FAB */
/* global exports */

exports.mixins = {
    backgroundRetinaImage: function(mixin, filename, width, height, repeat) {
        'use strict';

        var rule = {
            'background-image': 'url(' + filename + ')'
        };

        var ext = FAB.path.extname(filename);
        var fileNameNoExt = filename.substr(0, filename.lastIndexOf('.'));

        width = width || 'auto';
        height = height || 'auto';

        rule['background-size'] = width + ' ' + height;

        rule['@media only screen and (-webkit-min-device-pixel-ratio: 1.3), (min--moz-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx)'] = {
            'background-image': 'url(' + fileNameNoExt + 'var(--retinaSuffix)' + ext + ')'
        };

        return rule;
    }
};
