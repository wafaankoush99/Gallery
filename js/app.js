'use strict';

/////////////////////////////////////////////////////
//////////getting data from page-1.json//////////////
/////////////////////////////////////////////////////
let getData = ( path )=> {
  $.ajax( path )
    .then( allData =>{
      allData.forEach( val =>{
        let newItem = new Photo( val );
        newItem.renderAll();
      } );
      let listItems = [...new Set( optionArray )];
      listItems.forEach( option=> renderOption( option ) );
      $( '#photo-template' ).first().remove();
    } );
};
getData( './data/page-1.json' );
$( '#page1' ).click( function () {
  $( 'section' ).hide();
  $( '.filter' ).empty();
  optionArray = [];
  getData( './data/page-1.json' );
} );
$( '#page2' ).click( function () {
  $( 'section' ).hide();
  $( '.filter' ).empty();
  optionArray = [];
  getData( './data/page-2.json' );
} );

/////////////////////////////////////////////////////
//////////Global Variables///////////////////////////
/////////////////////////////////////////////////////

let myArr = [];
let optionArray = [];


/////////////////////////////////////////////////////
//////////Prototype//Rendering///////////////////////
/////////////////////////////////////////////////////

Photo.prototype.renderAll = function(){
  let template = $( '#pageTemplate' ).html();
  let data = Mustache.render( template, this );
  $( 'main' ).append( data );
};

/////////////////////////////////////////////////////
//////////Functionss/////////////////////////////////
/////////////////////////////////////////////////////

function Photo( arrPhoto ) {
  this.keyword = arrPhoto.keyword;
  this.title = arrPhoto.title;
  this.imageUrl = arrPhoto.image_url;
  this.description = arrPhoto.description;
  this.horns = arrPhoto.horns;
  myArr.push( this );
  optionArray.push( this.keyword );
}

const renderOption = option =>{
  $( '#filter' ).append( `<option class="option"> ${option}</option>` );
};
function renderSelected ( ) {
  let selected = $( '#filter' ).val();
  console.log( selected );
  $( 'section' ).hide();
  $( `.${selected}` ).show();
}

/////////////////////////////////////////////////////
//////////Calling functions//////////////////////////
/////////////////////////////////////////////////////

$( '#filter' ).on( 'change', renderSelected );

//////////////////////////////////////////////////////

$( '.sort' ).on( 'change', function(){
  let getData = ( path )=> {
    $.ajax( path )
      .then( allData => {
        let sortedData = $( '.sort' ).val();
        console.log( sortedData );
        allData.sort( ( a,b )=>{
          if ( a[sortedData] < b[sortedData] ){return -1;}
          else if ( a[sortedData] > b[sortedData] ){return 1;}
          else return 0;
        } );
        console.log( allData );
        $( 'section' ).remove();

        allData.forEach( val=>{
          console.log( val );
          let newItem = new Photo( val );
          newItem.renderAll();
        } );
      } );
  };

  getData( './data/page-1.json' );
  $( '#page1' ).click( function () {
    $( 'section' ).hide();
    $( '.filter' ).empty();
    optionArray = [];
    getData( './data/page-1.json' );
  } );
  $( '#page2' ).click( function () {
    $( 'section' ).hide();
    $( '.filter' ).empty();
    optionArray = [];
    getData( './data/page-2.json' );
  } );

} );
