console.log("fing.js");

/*
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        console.log(details);
        
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        if (details.requestHeaders[i].name === 'User-Agent') {
          details.requestHeaders.splice(i, 1);
          break;
        }
      }
      return {requestHeaders: details.requestHeaders};
      
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]);
*/



// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.


/*
var json = [
    {
        "urls": [
            "tagesanzeiger.ch"
        ],
        "sels": [
            "div.commentsBox",
            "div.articleSharing .comments",
            ".storyInfo .commentsLink"
        ]
    },
    {
        "urls": [
            "nzz.ch"
        ],
        "sels": [
            "div#kommentare",
            "span.disqus-comment-count"
        ]
    }
];
var matchSels = [];

var runAlready = document.body.getAttribute( "data-no-comment-run" ) == "yes";
if( runAlready == false) {

    document.body.setAttribute( "data-no-comment-run", "yes" );

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if(request.decomStatusUpdate !== undefined) {
            updateVisibility(request.decomStatusUpdate);
        }
    });

    harvestSelectors();
}

function harvestSelectors() {
    var loc = location.href;
    for(var i = 0; i < json.length; i++) {
        for(var j = 0; j < json[i].urls.length; j++) {
            if(loc.indexOf(json[i].urls[j]) >  0) {
                matchSels = matchSels.concat(json[i].sels);
            }
        }
    }
}

function updateVisibility(visible) {
    var visValue = visible ? "visible" : "hidden";

    for(var i in matchSels) {
        var els = document.querySelectorAll(matchSels[i]);
        for(var k in els) {
            if(els[k].style) {
                els[k].style.visibility = visValue;
            }
        }
    }
}
*/

