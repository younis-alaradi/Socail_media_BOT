//||||||||||||||||||||||||||||||||||||||||||||||||instagram|||||||||||||||||||||||||||||||||||||||||||||||||||||/
/************(   1   )**********************************| Instagram like |***************************************/


function saa ()
{
    alert("hello");
}
 var se =function auto_auto_like_instagram() {
    var count = 0;
    setInterval(function () {
        var heart = document.querySelector('svg[aria-label="Like"] ').parentNode;
        // for unlike type " svg[ aria - label ="Unlike" ]"
        var arrow = document.querySelector('a.coreSpriteRightPaginationArrow');

        if (heart) {
            heart.click();
            count++;
            console.log(`you' ve liked ${count} photo (s)`)
        }
        arrow.click();
    }, 3000);
}




//********************************************| end - Instagram like |***********************************/

/*******(     2     )*****************************|Auto_follow|**********************************/
var Explorer = document.querySelector('svg[aria-label="Find People"] ').parentNode;
setInterval(function()
{
    Explorer.click();
},2000)
var play = document.querySelector('svg[aria-label="Video"] ').parentNode;
var follow = 0 ;
setInterval(function ()
{// set up click button with internet speed
    play.click();
    setInterval(function()
    {
        var arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
        if(Explorer)
        {
            var submit_button = document.getElementsByClassName('y3zKF ')[0];
            submit_button.click();
            follow++;
            console.log(`you follow ${follow} users`)
        }
        arrow.click();
    },5000)
},9000)

/************************************|end-autoFollow|*********************************************************/

/*************************************|comment|*******************************************************************/
var count_Comment = 0; var loop = setInterval(function(){

    var comment_text=document.getElementsByClassName('Ypffh')[0];
    var Inserting_text= Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
    Inserting_text.call(comment_text, "Hi :)");
    var button = document.querySelector('button[type="submit"]');
    var ev2 = new Event('input', { bubbles: true});
    comment_text.dispatchEvent(ev2);
    button.click();

    count_Comment++;
    console.log(`you've write ${count_Comment} comment `)


}, 5000);

/***********************************|end - instagram comment |*****************************************************/

/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||end of instagram functions ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

//////(          1           )////////////////////////////////////////////////////////////////////Twitter follow //////////////////////////////////////////////////////////////////////////
var Twitter_follow = 0;
setInterval(function () {
    var btndd = document.getElementsByClassName('css-18t94o4 css-1dbjc4n r-1niwhzg r-p1n3y5 r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1vsu8ta r-aj3cln r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr')[0];
    btndd.click();
    Twitter_follow++;
    console.log(`you have follow ${Twitter_follow} users `);
},2000)
//Twitter follow //
//////////////////////////////////////////////////////
////////////////////////////////////////////////////
var open_comment = document.querySelector('svg[class= "r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"]').parentNode;
open_comment.click();
var open_comment = document.getElementsByClassName('css-1dbjc4n r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg').parentNode;
open_comment.click();

/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||Twitter functions||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||/


/*************************************|FaceBOok|**************************************************/
/*(     1      )*|Follow_facebook|**/

var facebook_Follow = 0;
setInterval(function () {
    var t =document.getElementsByClassName(' oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329')[0];
    t.click();
facebook_Follow++;
console.log(`you have follow ${facebook_Follow} users `);
},2000)
/**|end - facebook Follow|**/
/////////////////////////////
////////////////////////////
/*(      2        )*******|faceBook like|********/
var Facebook_likes = 0 ;
setInterval(function()
{
    var like = document.getElementsByClassName(' _6rk2 img sp_i956Q2YbRhm_2x sx_4c1d46')[0];
    like.click();
    Facebook_likes++;
    console.log(`You've like ${Facebook_likes} post's`)
},2000)
/********|facebook like |*********/
////////////////////////////////
/////////////////////////////////
/*(        3       )***********|Facebook comment |**************************/
var commentIcon_btn = document.getElementsByClassName('_15kq _77li')[0];
commentIcon_btn.click();
var count = 100;
var message = "nice to meet you ";
var count_Comment = 0; var loop = setInterval(function(){
    var input_tag = document.getElementsByName("comment_text")[0];
    var submit = document.querySelector('button[type="submit"]');


    submit.disabled = false;
    input_tag.value = message;
    submit.click();
    count_Comment++;
    console.log(`you've write ${count_Comment} comment `)
    count -= 1;
    if(count == 0)
    {
        clearInterval(loop);
    }
}, 10000);
/************************|facebook comment|**********************/

/*************************************|end faceBook|*******************************************/





////////(          1            )////////////////////|**WHATSAPP - auto face sender**|//////////////////////////////////////////
var watspp = 0;
setInterval(function () {
    var btn = document.getElementsByClassName('FIHAk _3fM82 a37s7 _2Q56Q _2TkoI')[0];
    var face = document.getElementsByClassName('b74 emojik wa')[0];
    var send = document.getElementsByClassName('_1U1xa')[0];
    btn.click();
    face.click();
    send.click();
    watspp++;
    console.log(`you have follow ${watspp} users `);
},2000)
//////////////////////////|END_AUTO FACE SENDER |///////////////////////////////////////////


