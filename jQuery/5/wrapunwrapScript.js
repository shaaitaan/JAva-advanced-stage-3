function togglerWrap(){
    var pTags = $( "p" );
    if ( pTags.parent().is( "div" ) ) {
        pTags.unwrap();
      } else {
        pTags.wrap( "<div></div>" );
      }
}