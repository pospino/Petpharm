angular.module('starter')
        .constant('config', {
            apiurl: 'http://webapi.petpharm.net/index.php/',
            ruta_mascota: 'http://petpharm.net/img/mascotas/',
            ruta_perfil: 'http://petpharm.net/img/dm/',
            push_server: 'http://webapi.petpharm.net/PushServer.php'
        })
        .config(function ($compileProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        });

