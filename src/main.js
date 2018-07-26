let items = [];
let itemsToPush = [];

$.getJSON( "http://localhost:3000/items.json", function( data ) {
  $.each( data, function( key, val ) {
      items.push(val);
      if(val.checked === true){
        itemsToPush.push( "<li class='list-group-item' ><input id='" + val.id + "' class='checkBox' type='checkbox' checked></input><span class='spanClass'>" + val.title + "</span><img class='prioLogo' src='./img/" + val.prio + ".png'/></li>" );
        console.log('Item: ' + val.id + ' checked');
      }else{
        itemsToPush.push( "<li class='list-group-item' ><input id='" + val.id + "' class='checkBox' type='checkbox' ></input><span class='spanClass'>" + val.title + "</span><img class='prioLogo' src='./img/" + val.prio + ".png'/></li>" );
      }
  });
  $( "<ul/>", { "class": "list-group list-group-flush", html: itemsToPush.join( "" )}).appendTo( '#articleItemCard' );
});

$(document).ready(function () {
    $("#articleItemCard").find("input").on('input', function () {
        let currentId;
        if(this.checked === true) {
          currentId = parseInt(this.id);
          console.log('Item: ' + this.id + ' checked');
          $.each(items, function(key, val) {
            if(currentId === val.id){
              this.checked = true;
            }
          });
        }else {
          currentId = parseInt(this.id);
          console.log('Item: ' + this.id + ' unchecked');
          $.each(items, function(key, val) {
            if(currentId === val.id){
              this.checked = false;
            }
          });
        }

    });
});
