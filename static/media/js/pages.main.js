var ul = $('#i-am .what');
var lis = $('#i-am .what li');
       $.each([90, 180,270], function(index, value) { $('.rot'+value).css({rotate:'-'+value+'deg', origin: ['0px', '0px']})});;

var actual;

var w = ul.parent().width();
var h = ul.parent().height();
var goTo = function (l) {
    if (l.length<1) return;
    active = ul.find('.viewport');
            
                var offset = {top:parseInt(l.css('top')),left:parseInt(l.css('left'))};
                var width = l.width();
                var height = l.height();
                var g;
                
                 rot = parseInt(l.css('rotate'))%360;
                 g = rot*Math.PI/180;
                 rot = ((360+rot)%360);
                 a = ul.width()/2;
                 b = ul.height()/2;
                 box = {'top':(offset.top-b)*Math.cos(g)-(offset.left-a)*Math.sin(g)+b,'left':(offset.top-b)*Math.sin(g)+(offset.left-a)*Math.cos(g)+a};
                                                      var top = (h-height)/2-box.top;
                var left = (w-width)/2-box.left;

                active.find('.hn').stop().animate({opacity:.2});
                active.find('div').stop().animate({opacity:.08});
                active.removeClass('viewport');
                l.addClass('viewport').find('.hn').delay(900).animate({opacity:1},1000);
                
                //,'origin':[a,b]
                try {
                ul.stop().animate({'rotate':-rot+'deg','top':top,'left':left},1350,'easeInOutBack',function(){
                    l.find('div').delay(200).animate({opacity:1},1000)
                    //.typewriter(100)
                    ;
                });
                }
                catch (e) {}
                return false;
};
    goTo(lis.first());

    $('#i-am .prev').click(function() {
        //active = ul.find('.viewport');
        //l = active.prev();
        //goTo(l);
        goTo(ul.find('.viewport').prev());
        //i = lis.index(active);
        //l = lis.eq((i+1)%lis.length);
        //console.log(l);
        
        });
    $('#i-am .next').click(function() {
        goTo(ul.find('.viewport').next());
        
        });