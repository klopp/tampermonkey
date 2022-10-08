// ==UserScript==
// @name         Remove sales posts from Belgorod gift communities in newsfeed
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Remove sales posts from Belgorod gift communities in newsfeed
// @author       https://vk.com/id1176430
// @match        https://vk.com/feed*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", remove_posts);
    window.addEventListener("focus", remove_posts);
    window.addEventListener("scroll", remove_posts);

    var comm = [
        /[/]besplatno31belgorod/,
        /[/]bezgusey/,
        /[/]public108451444/,
        /[/]besplatno_v_belgorod/,
        false
    ];

    function remove_posts()
    {
        var posts = document.getElementsByClassName("feed_row");
        if (posts) {
            posts.forEach(function(post) {
                comm.forEach(function(mask) {
                    if( mask && mask.test(post.innerHTML) ) {
                        if( /(Посмотреть объявление)|(Продано)|(Неактивно)/.test(post.innerText) ) {
                            post.parentNode.removeChild(post);
                            return;
                        }
                    }
                });
            });
        }
    }
})();
