'use strict';

$.ajax( '../data/page-1.json' ).then( arrOfObjGallery => {
  arrOfObjGallery.forEach( photo => {
    let newPhoto = new Photo( photo );
    newPhoto.renderAll();
    // console.log( photo );
  } );
} );

let myArr=[];
function Photo( arrPhoto ) {
  this.keyword= arrPhoto.keyword;
  this.title = arrPhoto.title;
  this.img = arrPhoto.image_url;
  this.description = arrPhoto.description;
  myArr.push( this );
}

let arr =[];
console.log( arr );


Photo.prototype.renderAll = function () {

  $( 'select' ).append( `<option value="${this.keyword}">${this.keyword}</option>` );
  //   console.log( $( 'option' ).text() );
  if( ! arr.includes( $( 'option' ).text() ) ){
    arr.push( $( 'option' ).text() );
    $( 'select' ).append( $( 'option' ) );}

    $('#photo-template').append('<div></div>');


  // $('#photo-template').append('<div></div>');

  $( 'div' ).prepend( `
    <h2> ${this.title} </h2>
    ` );

  $( 'div' ).prepend( `
    <p> ${this.description} </p>
    ` );

  $( 'div' ).prepend( `<img src='${this.img}' alt="">` );

  $('#photo-template').append('<div></div>');

  // $( '#photo-template' ).append( `
  //   <h2> ${this.title} </h2>
  //   ` );

  // $( '#photo-template' ).append( `
  //   <p> ${this.description} </p>
  //   ` );

  // $( '#photo-template' ).append( `<img src='${this.img}' alt="">` );



};




