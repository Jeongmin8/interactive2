$(document).ready(function(){

	
	$('.an').click(function () {
            $('.a').css({"color":"#feac54"});
            $('.an').css({"color":"#feac54"});
            $('.bn').css({"color":"#252527"});
            
            
        }).mouseout(function() {
        	$('.a').css({"color":"#252527"});
            $('.an').css({"color":"#feac54"});
            $('.bn').css({"color":"#feac54"});
        }
    
    
    );	
   

    $('.boxset , .ae').mouseover(function () {
            $('.aaa').css({"color":"#feac54"});


        }).mouseout(function() {
        	$('.aaa').css({"color":"#252527"})
        }
    	
    
    );	
    $('.boxset , .ae').click(function () {
            
            a = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.aaa').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(a);
            $('.aaa').css({"color":"#252527"})

        } 
    );  
    $('.box, .be').mouseover(function () {
            $('.bbb').css({"color":"#feac54"});
        }).mouseout(function() {
        	$('.bbb').css({"color":"#252527"})
        }
    	
    
    );
    $('.box, .be').click(function () {
            
            a = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.bbb').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(a);
            $('.bbb').css({"color":"#252527"})

        } 
    );  

    $('.bbox, .c').mouseover(function () {
            $('.ccc').css({"color":"#feac54"});
        }).mouseout(function() {
        	$('.ccc').css({"color":"#252527"})
        }
    	
    
    );
    $('.bbox , .c').click(function () {
            
            c = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ccc').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(c);
            $('.ccc').css({"color":"#252527"})

        } 
    );  	   
    $('.bbbox, .d').mouseover(function () {
            $('.ddd').css({"color":"#feac54"});
        }).mouseout(function() {
        	$('.ddd').css({"color":"#252527"})
        }
    	
    
    );
    $('.bbbox, .d').click(function () {
            
            d = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ddd').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(d);
            $('.ddd').css({"color":"#252527"})

        } 
    );  	 
    $('.ex, .e').mouseover(function () {
            $('.eee').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.eee').css({"color":"#252527"})
        }
        
    
    );
    $('.ex , .e').click(function () {
            
            e = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.eee').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(e);
            $('.eee').css({"color":"#252527"})

        } 
    );   
    $('.fx, .f').mouseover(function () {
            $('.fff').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.fff').css({"color":"#252527"})
        }
        
    
    );
    $('.fx , .f').click(function () {
            
            f = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.fff').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(f);
            $('.fff').css({"color":"#252527"})

        } 
    );     
    $('.gx, .g').mouseover(function () {
            $('.ggg').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.ggg').css({"color":"#252527"})
        }
        
    
    );
    $('.gx, .g').click(function () {
            
            g = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ggg').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(g);
            $('.ggg').css({"color":"#252527"})

        } 
    );     
    $('.hx, .h').mouseover(function () {
            $('.hhh').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.hhh').css({"color":"#252527"})
        }
    );
    $('.hx , .h').click(function () {
            
            h = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.hhh').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(h);
            $('.hhh').css({"color":"#252527"})

        } 
    );        
    $('.ix, .i').mouseover(function () {
            $('.iii').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.iii').css({"color":"#252527"})
        }
    );
    $('.ix , .i').click(function () {
            
            i = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.iii').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(i);
            $('.iii').css({"color":"#252527"})

        } 
    );  
    $('.jx, .j').mouseover(function () {
            $('.jjj').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.jjj').css({"color":"#252527"})
        }
    ); 
    $('.jx , .j').click(function () {
            
            j = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.jjj').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(j);
            $('.jjj').css({"color":"#252527"})

        } 
    );  
    $('.kx, .k').mouseover(function () {
            $('.kkk').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.kkk').css({"color":"#252527"})
        }
    ); 
    $('.kx, .k').click(function () {
            
            k = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.kkk').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(k);
            $('.kkk').css({"color":"#252527"})

        } 
    );  
    $('.lx, .l').mouseover(function () {
            $('.lll').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.lll').css({"color":"#252527"})
        }
    );   
    $('.lx , .l').click(function () {
            
            l = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.lll').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(l);
            $('.lll').css({"color":"#252527"})

        } 
    );    
    $('.mx, .m').mouseover(function () {
            $('.mmm').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.mmm').css({"color":"#252527"})
        }  
    
    ); 
    $('.mx, .m').click(function () {
            
            m = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.mmm').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(m);
            $('.mmm').css({"color":"#252527"})

        } 
    );  
    $('.nx, .n').mouseover(function () {
            $('.nnn').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.nnn').css({"color":"#252527"})
        }
    );  
    $('.nx, .n').click(function () {
            
            n = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.nnn').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(n);
            $('.nnn').css({"color":"#252527"})

        } 
    );    
    $('.ox, .o').mouseover(function () {
            $('.ooo').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.ooo').css({"color":"#252527"})
        }
        
    
    ); 
    $('.ox, .o').click(function () {
            
            o = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ooo').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(o);
            $('.ooo').css({"color":"#252527"})

        } 
    );    
    $('.px, .p').mouseover(function () {
            $('.ppp').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.ppp').css({"color":"#252527"})
        }
        
    
    );
    $('.px, .p').click(function () {
            
            p = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ppp').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(p);
            $('.ppp').css({"color":"#252527"})

        } 
    );     
    $('.qx, .q').mouseover(function () {
            $('.qqq').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.qqq').css({"color":"#252527"})
        }
        
    
    ); 
    $('.qx, .q').click(function () {
            
            q = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.qqq').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(q);
            $('.qqq').css({"color":"#252527"})

        } 
    );  
    $('.rx, .r').mouseover(function () {
            $('.rrr').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.rrr').css({"color":"#252527"})
        }
    );  
    $('.rx, .r').click(function () {
            
            r = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.rrr').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(r);
            $('.rrr').css({"color":"#252527"})

        } 
    );  
    $('.sx, .s').mouseover(function () {
            $('.sss').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.sss').css({"color":"#252527"})
        }
    ); 
    $('.sx, .s').click(function () {
            
            s = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.sss').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(s);
            $('.sss').css({"color":"#252527"})

        } 
    );  
    $('.tx, .t').mouseover(function () {
            $('.ttt').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.ttt').css({"color":"#252527"})
        }
    );
    $('.tx, .t').click(function () {
            
            t = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ttt').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(t);
            $('.ttt').css({"color":"#252527"})

        } 
    );  
    $('.ux, .u').mouseover(function () {
            $('.uuu').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.uuu').css({"color":"#252527"})
        }
        
    
    ); 
    $('.ux, .u').click(function () {
            
            u = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.uuu').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(u);
            $('.uuu').css({"color":"#252527"})

        } 
    );   
    $('.vx, .v').mouseover(function () {
            $('.vvv').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.vvv').css({"color":"#252527"})
        }
        
    
    ); 
    $('.vx, .v').click(function () {
            
            v = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.vvv').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(v);
            $('.vvv').css({"color":"#252527"})

        } 
    );   
    $('.wx, .w').mouseover(function () {
            $('.www').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.www').css({"color":"#252527"})
        }
    );
    $('.wx, .w').click(function () {
            
            w = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.www').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(w);
            $('.www').css({"color":"#252527"})

        } 
    );  
    $('.xx, .x').mouseover(function () {
            $('.xxx').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.xxx').css({"color":"#252527"})
        }
        
    
    ); 
    $('.xx, .x').click(function () {
            
            x = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.xxx').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(x);
            $('.xxx').css({"color":"#252527"})

        } 
    );   
    $('.yx, .y').mouseover(function () {
            $('.yyy').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.yyy').css({"color":"#252527"})
        }
        
    
    );  
    $('.yx, .y').click(function () {
            
            y = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.yyy').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(y);
            $('.yyy').css({"color":"#252527"})

        } 
    );  
    $('.zx, .z').mouseover(function () {
            $('.zzz').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.zzz').css({"color":"#252527"})
        }
        
    
    );
    $('.zx, .z').click(function () {
            
            z = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.zzz').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(z);
            $('.zzz').css({"color":"#252527"})

        } 
    );  

    $('.ques, .qu').mouseover(function () {
            $('.ququ').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.ququ').css({"color":"#252527"})
        }
        
    
    );
    $('.ques, .qu').click(function () {
            
            qu = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ququ').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(qu);
            $('.ququ').css({"color":"#252527"})

        } 
    );   

    $('.excla, .ec').mouseover(function () {
            $('.ecec').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.ecec').css({"color":"#252527"})
        }
    );   
    $('.excla, .ec').click(function () {
            
            ec = window.setInterval(function(){
            $redValue = Math.floor(Math.random()*255);
            $greenValue = Math.floor(Math.random()*255);
            $blueValue = Math.floor(Math.random()*255); 
            $('.ecec').css(
                'color', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
            );
            },500);

        }).mouseout(function() {
            window.clearInterval(ec);
            $('.ecec').css({"color":"#252527"})

        } 
    );     
    $('.bn').click(function () {
            $('.num').css({"color":"#feac54"});
            $('.an').css({"color":"#252527"});
            $('.bn').css({"color":"#feac54"});
        }).mouseout(function() {
            $('.num').css({"color":"#252527"})
             $('.an').css({"color":"#feac54"});
            $('.bn').css({"color":"#feac54"});
        }
        

    
    );  
    

//$(function(){
//  $(window).mousemove(function(e){
//    $('.a').css('transform', 'rotateX(' + - e.pageY + 'deg)' + 'rotateY(' + e.pageX + 'deg)');
//  }); 
//})    
   

	

});
