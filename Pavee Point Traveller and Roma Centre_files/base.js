jQuery(document).ready(function(){
	"use strict";
	//initiating jQuery

	/* Sticky menu */
	jQuery(function(jQuery) {
		jQuery(document).ready( function() {
		//enabling stickUp on the '.navbar-wrapper' class
		jQuery('#masthead .menu').stickUp();
		});
	});

	/* Causes hover */
	jQuery(window).load(function() {

		jQuery("article.item").hover(function(){
			jQuery( this ).toggleClass("box-select");
		});

	});

	/* Flexslider */
	jQuery(window).load(function() {
		jQuery('.flexslider').flexslider({
			animation: "fade",
			animationLoop: true,
			pauseOnAction: true,
			pauseOnHover: true,
			start: function(slider) {
				jQuery( '.flexslider' ).removeClass('loading');
			}
		});
	});


	/* Gallery Posts Slider */
	jQuery(window).load(function() {
		
		jQuery('.flexslider-gallery').flexslider({
			animation: "fade",
			animationLoop: true,
			pauseOnAction: true,
			pauseOnHover: true,
			start: function(slider) {
				jQuery( '.flexslider-gallery' ).removeClass('loading');
			}
		});

	});
	
	/* OWL Carousel */
	jQuery(document).ready(function() {
		var owl = jQuery("#owl-sponsors");

		owl.owlCarousel({
			stopOnHover : true,
			items : 4,
			itemsCustom : false,
			itemsDesktop : [1200,4],
			itemsDesktopSmall : [1240,4],
			itemsTablet: [767,2],
			itemsTabletSmall: false,
			itemsMobile : [480,1],
			singleItem : false,
			pagination: false,
			itemsScaleUp : false,
		});

		jQuery(".next").click(function(){
			owl.trigger('owl.next');
		})

		jQuery(".prev").click(function(){
			owl.trigger('owl.prev');
		})
	});
	
	/* Mean Menu */
	jQuery(document).ready(function () {
		jQuery('#site-navigation .container_12.non-res').meanmenu();
	});

	/* Masonry */
	jQuery(window).load(function() {
		var jQuerycontainer = jQuery('.js-masonry');
		jQuerycontainer.imagesLoaded(function(){
			jQuerycontainer.masonry({
				itemSelector: '.item',
				columnWidth: 1,
				isAnimated: true,
				animationOptions: {
					duration: 750,
					easing: 'easeInOutCirc',
					queue: false
				}
			});

		});
	});



	/* FitVids */
	jQuery(document).ready(function(){
		// Target your .container, .wrapper, .post, etc.
		jQuery("#content, iframe").fitVids();
	});



	/* Tabs */
	jQuery('.panes .tab-content').hide();
	jQuery(".tabs a:first").addClass("selected");
	jQuery(".tabs_table").each(function(){
			jQuery(this).find('.panes .tab-content:first').show();
			jQuery(this).find('a:first').addClass("selected");
	});
	jQuery('.tabs a').click(function(){
			var which = jQuery(this).attr("rel");
			jQuery(this).parents(".tabs_table").find(".selected").removeClass("selected");
			jQuery(this).addClass("selected");
			jQuery(this).parents(".tabs_table").find(".panes").find(".tab-content").hide();
			jQuery(this).parents(".tabs_table").find(".panes").find("#"+which).fadeIn(800);
	});

	/* Toggle */
	jQuery(".toggle-content .expand-button").click(function() {
		jQuery(this).toggleClass('close').parent('div').find('.expand').slideToggle(250);
	});

});




// Share buttons
function twwindows(object) {
	window.open( object, "twshare", "height=400,width=550,resizable=1,toolbar=0,menubar=0,status=0,location=0" ) 
}

function fbwindows(object) {
	window.open( object, "fbshare", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
}

function pinwindows(object) {
	window.open( object, "pinshare", "height=270,width=630,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" )
}