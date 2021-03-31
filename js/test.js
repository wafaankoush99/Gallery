'use strict';

let optionArray = [];

const getData =  ( path ) =>{
  $.ajax( path )
    .then( allData =>{
      allData.forEach( val =>{
        let newItem = new Items( val );

        newItem.renderData();
      } );
      let dropList = [...new Set( optionArray )];
      dropList.forEach( option=> renderOption( option ) );
      $( '.page1' ).first().remove();
    } );
};

getData( './data/page.json' );
$( '#pageOne' ).click( function () {
  $( 'section' ).hide();
  $( 'select' ).empty();
  optionArray = [];
  getData( './data/page.json' );
} );
$( '#pageTwo' ).click( function () {
  $( 'section' ).hide();
  $( 'select' ).empty();
  optionArray = [];
  getData( './data/page2.json' );
} );
function Items( objectData ) {
  this.imageUrl = objectData.image_url;
  this.title = objectData.title;
  this.description = objectData.description;
  this.keyword = objectData.keyword;
  this.horns = objectData.horns;
  allItems.push( this );
  optionArray.push( this.keyword );
}
let allItems = [];
console.log( allItems );
Items.prototype.renderData = function(){
  let template = $( '#dataSet' ).html();
  let data = Mustache.render( template, this );
  $( 'main' ).append( data );
};
const renderOption = option =>{
  $( '#filter' ).append( `<option class="option"> ${option}</option>` );
};
$( '#filter' ).on( 'change', renderSelected );
function renderSelected ( ) {
  let selected = $( '#filter' ).val();
  console.log( selected );
  $( 'section' ).hide();
  $( `.${selected}` ).show();
}
const sortByNumber = function () {
  allItems.sort( ( a,b )=> {
    console.log( a.horns );
    return a.horns - b.horns;} );
  let sorted = $( '#sort' ).val();
  console.log( sorted );

};
allItems.sort( ( a,b )=>{
  if ( a.title.toUpperCase() < b.title.toUpperCase() ) {
    return 1;
  }
  else if ( a.title.toUpperCase() > b.title.toUpperCase() ){
    return -1;
  }
  else return 0;
}
);
console.log(allItems);


/////////////

$( '#page1' ).click( function() {

    $.ajax( './data/page-1.json' )
      .then( allData =>{
        allData.sort( ( a,b ) => {
          if ( a.title.toUpperCase() < b.title.toUpperCase() ){
            return -1;
          }
          else if ( a.title.toUpperCase() > b.title.toUpperCase() ) return 1;
          else return 0;
        } );
        console.log( allData );
        allData.forEach( val =>{
          let newItem = new Photo( val );
          newItem.renderAll();
        } );
        let listItems = [...new Set( optionArray )];
        listItems.forEach( option=> renderOption( option ) );
        $( '#photo-template' ).first().remove();
      } );
  
  } );


