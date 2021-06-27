window.onscroll=function(){
    var oHead=document.getElementById('Top');
    var h=document.body.scrollTop;
    var t=document.body.scrollTop || document.documentElement.scrollTop;
    oHead.style.top =0;
    document.onscroll=function(){
        var top=document.body.scrollTop || document.documentElement.scrollTop;
        oHead.style.top =h + top + 'px';
    }
}