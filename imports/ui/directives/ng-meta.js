import angular from 'angular';

export default 'ngMeta';

angular.module("ngMeta",[]).provider("ngMeta",function(){"use strict";function a(a){var d=function(d,e){a.ngMeta.title=d||b.title,c.useTitleSuffix&&(a.ngMeta.title+=e||b.titleSuffix)},e=function(c,d){a.ngMeta[c]=d||b[c]},f=function(a){a=a||{},d(a.title,a.titleSuffix),delete a.title,delete a.titleSuffix;for(var c=Object.keys(a),f=angular.copy(b),g=0;g<c.length;g++)f.hasOwnProperty(c[g])&&delete f[c[g]],e(c[g],a[c[g]]);for(var h=Object.keys(f),i=0;i<h.length;i++)e(h[i],f[h[i]])},g=function(a,b){f(angular.copy(b.meta))},h=function(){a.ngMeta={},a.$on("$routeChangeSuccess",g),a.$on("$stateChangeSuccess",g)};return{init:h,setTitle:d,setTag:e}}var b={},c={useTitleSuffix:!1};this.setDefaultTitle=function(a){b.title=a},this.setDefaultTitleSuffix=function(a){b.titleSuffix=a},this.setDefaultTag=function(a,c){b[a]=c},this.useTitleSuffix=function(a){c.useTitleSuffix=!!a},this.$get=["$rootScope",function(b){return new a(b)}]});
