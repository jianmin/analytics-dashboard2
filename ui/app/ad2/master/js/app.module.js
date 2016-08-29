/*!
 * 
 * Analytics Dashboard
 * 
 * Version: 2.0.0
 * Author: Jianmin Liu
 * 
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('angle', [
            'ngSanitize',
            'angular-toArrayFilter',
            'app.core',
            'app.routes',
            'app.sidebar',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.pages',
            'app.utils',
            'app.material'
        ]);
})();

