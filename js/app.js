'use strict';

/////////////////////////////////////////////////////
//////////getting data from page-1.json//////////////
/////////////////////////////////////////////////////

$.ajax( '/data/page-1.json' )
  .then( allData =>{
    allData.forEach( val =>{
      let newItem = new Photo( val );
      newItem.renderAll();
    } );
    let listItems = [...new Set( optionArray )];
    listItems.forEach( option=> renderOption( option ) );
    $( '#photo-template' ).first().remove();
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
  let PhotoClone = $( '#photo-template' ).first().clone();
  PhotoClone.find( 'h2' ).text( this.title );
  PhotoClone.find( 'img' ).attr( 'src' , this.imageUrl );
  PhotoClone.find( 'p' ).text( this.description );
  PhotoClone.addClass( this.keyword );
  $( 'main' ).append( PhotoClone );
};
const renderOption = option =>{
  $( '#filter' ).append( `<option class="option"> ${option}</option>` );
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


// function renderSelected ( ) {
//   let selected = $( '#filter' ).val();
//   console.log( selected );
//   $( '#photo-template' ).hide();
//   $( `.${selected}` ).show();
// }
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
