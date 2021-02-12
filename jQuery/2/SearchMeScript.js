var newText = $( "p" ).text().split( " " ).join( "</span> <span>" );
newText = "<span>" + newText + "</span>";
 
$( "p" )
  .html( newText )
  .find( "span" )
    .hover(function() {
      $( this ).addClass( "marker" );
    }, function() {
      $( this ).removeClass( "marker" );
    })
  .end()
  .find( ":contains('th')" )
    .css({
        "font-style": "italic",
        "text-shadow": "2px 2px pink",
        "font-weight": "bolder"
    });
