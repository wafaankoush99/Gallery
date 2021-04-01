'use strict';

//default page//

$.ajax( './data/page-1.json' )
  .then( allData =>{
    allData.forEach( val =>{
      let newItem = new Photo( val );
      newItem.renderAll();
    } );
    let listItems = [...new Set( optionArray )];
    listItems.forEach( option=> renderOption( option ) );
    $( '#photo-template' ).first().remove();
  } );



let myArr = [];
let optionArray = [];




Photo.prototype.renderAll = function(){
  let template = $( '#pageTemplate' ).html();
  let data = Mustache.render( template, this );
  $( 'main' ).append( data );
};



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



$( '#filter' ).on( 'change', renderSelected );


// page 1 data //

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
    optionArray = [];
    getData( './data/page-1.json' );
  } );


} );





$( '#page2' ).click( function () {
  $( '#page2' ).hide();
  $( '#page1' ).show();
  $( 'section' ).hide();
  $( '.filter' ).empty();

  $.ajax( './data/page-2.json' )
    .then( allData =>{
      allData.forEach( val =>{
        let newItem = new Photo( val );
        newItem.renderAll();
      } );
      let listItems = [...new Set( optionArray )];
      listItems.forEach( option=> renderOption( option ) );
      $( '#photo-template' ).first().remove();
    } );

  let myArr = [];
  let optionArray = [];


  Photo.prototype.renderAll = function(){
    let template = $( '#pageTemplate' ).html();
    let data = Mustache.render( template, this );
    $( 'main' ).append( data );
  };


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


  $( '#filter' ).on( 'change', renderSelected );

  // page 2 data //

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

    getData( './data/page-2.json' );
    $( '#page2' ).click( function () {
      $( 'section' ).hide();
      optionArray = [];
      getData( './data/page-2.json' );
    } );


  } );
} );


$( '#page1' ).click( function () {
  $( '#page1' ).hide();
  $( '#page2' ).show();
  $( 'section' ).hide();
  $( '.filter' ).empty();

  $.ajax( './data/page-1.json' )
    .then( allData =>{
      allData.forEach( val =>{
        let newItem = new Photo( val );
        newItem.renderAll();
      } );
      let listItems = [...new Set( optionArray )];
      listItems.forEach( option=> renderOption( option ) );
      $( '#photo-template' ).first().remove();
    } );

  let myArr = [];
  let optionArray = [];


  Photo.prototype.renderAll = function(){
    let template = $( '#pageTemplate' ).html();
    let data = Mustache.render( template, this );
    $( 'main' ).append( data );
  };


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


  $( '#filter' ).on( 'change', renderSelected );


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
      optionArray = [];
      getData( './data/page-1.json' );

    } );


  } );
} );
