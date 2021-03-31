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
  $( 'select' ).empty();
  optionArray = [];
  getData( './data/page-1.json' );
} );
$( '#page2' ).click( function () {
  $( 'section' ).hide();
  $( 'select' ).empty();
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
//   let PhotoClone = $( '#photo-template' ).first().clone();
//   PhotoClone.find( 'h2' ).text( this.title );
//   PhotoClone.find( 'img' ).attr( 'src' , this.imageUrl );
//   PhotoClone.find( 'p' ).text( this.description );
//   PhotoClone.addClass( this.keyword );
//   $( 'main' ).append( PhotoClone );
// };

  let template = $( '#dataPage2' ).html();
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





