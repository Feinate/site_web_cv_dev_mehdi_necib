var menu = document.getElementById("menu_app");
var menuUl = document.getElementById("menu_ul");
var signn = document.getElementById("signn");

function scrollAncre(){
    $(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate( {
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                }
                );
            }
        });});
}

function barreProgressive(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
        scrollPercent = (scroll / (dh-wh)) * 100;
        $('#progressbar').css('width', scrollPercent + '%');
    });
}

AOS.init({
    duration: 1200,
})

function hamburger(){
    $(document).ready(function(){
        $('#signn').click(function(e){
            e.preventDefault();
            $this = $(this);
            if($this.hasClass('ouvert')){
                $this.addClass('ferme').removeClass('ouvert');
                signn.style.marginLeft = "0px"
                menuUl.style.marginLeft = "-270px";
                menu.style.display = "none";
            }
            else{
                $this.removeClass('ferme').addClass('ouvert');
                menu.style.display = "block";
                menuUl.style.marginLeft = "0px";
                signn.style.marginLeft = "270px";
                var li = document.getElementsByTagName("a");
                for (var i = 0; i < li.length; i++) {
                    li[i].addEventListener('click',function(){
                        $this.addClass('ferme').removeClass('ouvert');
                        signn.style.marginLeft = "0px"
                        menuUl.style.marginLeft = "-270px";
                        menu.style.display = "none";
                    });
                }
            };
        });
    });
}

// mehdi = Array();
// mehdi[0] = "FUTUR écolié DE 42";
// mehdi[1] = "DEVELOPPEUR WEB JUNIOR";
// nb=-1;
// Mehdi1.style.textTransform="uppercase";
// function change(){
//     if(nb==mehdi.length-1){
//         nb=0;
//     }
//     else{
//         nb++;
//     }
//     document.getElementById("Mehdi1").innerHTML=mehdi[nb];
// }setInterval("change()",2000);


hamburger();
scrollAncre();
barreProgressive();
