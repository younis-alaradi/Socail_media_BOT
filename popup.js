document.getElementById("Auto_like_instagram").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var count = 0;\n' +
            '    setInterval(function () {\n' +
            '        var heart = document.querySelector(\'svg[aria-label="Like"] \').parentNode;\n' +
            '        // for unlike type " svg[ aria - label ="Unlike" ]"\n' +
            '        var arrow = document.querySelector(\'a.coreSpriteRightPaginationArrow\');\n' +
            '' +
            '        if (heart) {' +
            '            heart.click();' +
            '            count++;' +
            '            console.log(`you\' ve liked ${count} photo (s)`)\n' +
            '        }' +
            '        arrow.click();' +
            ' }, 3000); alert("operation in service ");'});
}, false);

document.getElementById("Auto_follow_instagram").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var Explorer = document.querySelector(\'svg[aria-label="Find People"] \').parentNode;\n' +
            'setInterval(function()\n' +
            '{\n' +
            '    Explorer.click();\n' +
            '},2000)\n' +
            'var play = document.querySelector(\'svg[aria-label="Video"] \').parentNode;\n' +
            'var follow = 0 ;\n' +
            'setInterval(function ()\n' +
            '{// set up click button with internet speed\n' +
            '    play.click();\n' +
            '    setInterval(function()\n' +
            '    {\n' +
            '        var arrow = document.querySelector(\'a.coreSpriteRightPaginationArrow\');\n' +
            '        if(Explorer)\n' +
            '        {\n' +
            '            var submit_button = document.getElementsByClassName(\'y3zKF \')[0];\n' +
            '            submit_button.click();\n' +
            '            follow++;\n' +
            '            console.log(`you follow ${follow} users`)\n' +
            '        }\n' +
            '        arrow.click();\n' +
            '    },5000)\n' +
            '},9000);'});
}, false);
document.getElementById("Auto_comment_instagram").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var count_Comment = 0; var loop = setInterval(function(){\n' +
            '\n' +
            '    var comment_text=document.getElementsByClassName(\'Ypffh\')[0];\n' +
            '    var Inserting_text= Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;\n' +
            '    Inserting_text.call(comment_text, "Hi :)");\n' +
            '    var button = document.querySelector(\'button[type="submit"]\');\n' +
            '    var ev2 = new Event(\'input\', { bubbles: true});\n' +
            '    comment_text.dispatchEvent(ev2);\n' +
            '    button.click();\n' +
            '\n' +
            '    count_Comment++;\n' +
            '    console.log(`you\'ve write ${count_Comment} comment `)\n' +
            '\n' +
            '\n' +
            '}, 5000);\n'});
}, false);

document.getElementById("Auto_follow_facebook").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var facebook_Follow = 0;\n' +
            'setInterval(function () {\n' +
            '    var t =document.getElementsByClassName(\' oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329\')[0];\n' +
            '    t.click();\n' +
            'facebook_Follow++;\n' +
            'console.log(`you have follow ${facebook_Follow} users `);\n' +
            '},2000)'});
}, false);

document.getElementById("Auto_like_facebook").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var Facebook_likes = 0 ;\n' +
            'setInterval(function()\n' +
            '{\n' +
            '    var like = document.getElementsByClassName(\' _6rk2 img sp_i956Q2YbRhm_2x sx_4c1d46\')[0];\n' +
            '    like.click();\n' +
            '    Facebook_likes++;\n' +
            '    console.log(`You\'ve like ${Facebook_likes} post\'s`)\n' +
            '},2000)'});
}, false);

document.getElementById("Auto_comment_facebook").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var commentIcon_btn = document.getElementsByClassName(\'_15kq _77li\')[0];\n' +
            'commentIcon_btn.click();\n' +
            'var count = 100;\n' +
            'var message = "nice to meet you ";\n' +
            'var count_Comment = 0; var loop = setInterval(function(){\n' +
            '    var input_tag = document.getElementsByName("comment_text")[0];\n' +
            '    var submit = document.querySelector(\'button[type="submit"]\');\n' +
            '\n' +
            '\n' +
            '    submit.disabled = false;\n' +
            '    input_tag.value = message;\n' +
            '    submit.click();\n' +
            '    count_Comment++;\n' +
            '    console.log(`you\'ve write ${count_Comment} comment `)\n' +
            '    count -= 1;\n' +
            '    if(count == 0)\n' +
            '    {\n' +
            '        clearInterval(loop);\n' +
            '    }\n' +
            '}, 10000);'});
}, false);

document.getElementById("Auto_follow_twitter").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var Twitter_follow = 0;\n' +
            'setInterval(function () {\n' +
            '    var btndd = document.getElementsByClassName(\'css-18t94o4 css-1dbjc4n r-1niwhzg r-p1n3y5 r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1vsu8ta r-aj3cln r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr\')[0];\n' +
            '    btndd.click();\n' +
            '    Twitter_follow++;\n' +
            '    console.log(`you have follow ${Twitter_follow} users `);\n' +
            '},2000)'});
}, false);

document.getElementById("Auto_face_sender").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'var watspp = 0;\n' +
            'setInterval(function () {\n' +
            '    var btn = document.getElementsByClassName(\'FIHAk _3fM82 a37s7 _2Q56Q _2TkoI\')[0];\n' +
            '    var face = document.getElementsByClassName(\'b74 emojik wa\')[0];\n' +
            '    var send = document.getElementsByClassName(\'_1U1xa\')[0];\n' +
            '    btn.click();\n' +
            '    face.click();\n' +
            '    send.click();\n' +
            '    watspp++;\n' +
            '    console.log(`you have follow ${watspp} users `);\n' +
            '},2000)'});
}, false);

document.getElementById("instgram_link").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'window.open(\'https://www.Instagram.com\', \'_blank\');\n'});
}, false);
document.getElementById("facebook_link").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'window.open(\'https://www.Facebook.com\', \'_blank\');\n'});
}, false);
document.getElementById("twitter_link").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'window.open(\'https://www.Twitter.com\', \'_blank\');\n'});
}, false);
document.getElementById("Whatsapp_link").addEventListener("click", function() {
    chrome.tabs.executeScript({"code": 'window.open(\'https://web.whatsapp.com\', \'_blank\');\n'});
}, false);