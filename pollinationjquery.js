$( document ).ready(function() {

	$( 'a' ).click(function( event ) {

	     alert( "It works!!" );
	 });
});


$( ".petals" ).hover(function() {
        $( "#first_petal_path" ).fadeIn(100, "slow");
 });

$( "#frontpetal, #rightpetal, #leftpetal, #backrightpetal, #backleftpetal" ).click(function() {
  $( this ).hide( 1000, function() {
    $( this ).remove();
  });
});
    
//     $("#three").delay(5000).fadeIn( "slow", function() {
//     $("#four").fadeIn(100, "slow");
// });	
// 	$("#line_one")delay(5000).fadeIn(0, function(){
// 		$("#line_one").animate({
// 			height: 70px;
// 			)};
// 	}):	
    			
//     $("#clickfront").click(function(){
//         $("#frontp").hide();
//      });

//     $("#h").click(function(){
//      	$("#frontp").show();
// 	});
    
//     $("#pedicel").click(function(){
//         $("#pedicel").hide();
//     });
    
//     $("#pedicel").click(function(){
//      	$("#pedicel").show();
// 	});
    
//     $("#rightp").click(function(){
//         $("#rightp").hide();
//     });
     
//     $("#rightp").click(function(){
//      	$("#rightp").show();
// 	});
//  });
 

