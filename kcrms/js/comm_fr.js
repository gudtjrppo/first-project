$(document).ready(function(){
    var $mainCollection = $('.collections');
    var $mainStories = $('.stories');

    $mainCollection.slick({
        autoplay: true,
        slidesToShow : 3,
        prevArrow : $('.collectionsPrev'), 
        nextArrow : $('.collectionsNext'),
        responsive: [ 
            { 
                breakpoint: 769, 
                settings: {	
                    variableWidth: true,
                    slidesToShow:1
                } 
            }
        ]
    });

    $mainStories.slick({
        autoplay: true,
        slidesToShow : 3,
        prevArrow : $('.storiesPrev'), 
        nextArrow : $('.storiesNext'),
        responsive: [ 
            { 
                breakpoint: 769, 
                settings: {	
                    variableWidth: true,
                    slidesToShow:1
                } 
            }
        ]
    });


    $('.accd_head a').on('click', function(){
        $(this).parents().next('.accd_cont').toggle()
        $(this).toggleClass('on');
    })

    $('.search').on('click', function(){
        $('.searchWrap').addClass('on');
        
    })
    $('.allMenuBtn a').on('click', function(){
        $('.allMenu').addClass('on');
    })
    $('.closeWrap a').on('click', function(){
        $(this).parents().parents().removeClass('on');
    })

    $('.home__scroll-down').on('click', function(){
        var elemTop = $('#scrollCurrent').offset().top;

        $('html, body').animate({scrollTop: elemTop}, 500);
    })
    $('.top').on('click', function(){
        $('html, body').animate({scrollTop: '0'}, 500);
    })

    

    var randomNumber = Math.floor(Math.random() * $('.randomBox .randomItem').length);

    $('.randomBox .randomItem').eq(randomNumber).addClass('on');


    $('.clear').on('click', function(){
            $('.bedge').remove();
    });

    $('.toggleDropdown').on('click', function(){
        $(this).toggleClass('on');
        $(this).siblings('.dropDownMenu').toggleClass('on');
    })

    $('.dropDownMenu li').on('click', function(){
        var thisValue = $(this).children('p').text();
        var itemsSlot = $(this).parents().parents().siblings('.drop-item');

        $('.toggleDropdown').removeClass('on');
        $('.toggleDropdown').siblings('.dropDownMenu').removeClass('on');

        itemsSlot.prepend('<span class="bedge"><span>'+ thisValue +'</span><button type="button">×</button></span>')
        $('.bedge button').on('click', function(){
            $(this).parent('.bedge').remove();
        })
    })


    $('.filterBtn a').on('click', function(){
        $('.filterWrap').show();
        $('body').addClass('scrollHidden');
    })

    $('.filterCont .closeWrap a').on('click', function(){
        $('.filterWrap').hide();
        $('body').removeClass('scrollHidden');
    })

    $('.tabWrap .js_tab > li > a').on('click', function(){
		var idx = $(this).parent().index();
		$(this).closest('.tabWrap').find('.js_tab > li').removeClass('on').eq(idx).addClass('on');
		$(this).closest('.tabWrap').find('> .js_tab_cont').find('> .tab_cont').removeClass('on').eq(idx).addClass('on');
	})

    $('.viewInner .imgBox img').on('click', function(e){
        $('.img_popup').addClass('on');
        $('body').addClass('scrollHidden');

        

        $('.img_popup .close').on('click', function(){
            $('.img_popup').removeClass('on');
            $('body').removeClass('scrollHidden');
        })
    })

    $(document).keydown(function(event) {
        if ( event.keyCode == 27 || event.which == 27 ) {
            $('.img_popup').removeClass('on');
            $('body').removeClass('scrollHidden');
        }
    });

})