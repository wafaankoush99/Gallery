
$( '.sort' ).on( 'change', function () { 
  $.ajax( './data/page.json' )
.then( allData =>{
  let sortedData = $( '.sort' ).val();
  console.log( sortedData );
  allData.sort( ( a,b ) => {
    if ( a[sortedData] < b[sortedData] ){
      return -1;
    }
    else if ( a[sortedData] > b[sortedData] ) return 1;
    else return 0;
  } );
  console.log( allData );
  $( 'section' ).remove();

  allData.forEach( val =>{
    console.log( ' hello' , val );
    let newItem = new Items( val );
    newItem.renderData();
    console.log( allData );


    console.log( newItem );
  } );

  console.log( allData );

} );
} );