$(document).ready(function() { 
    /* chantilly con mouse de fruta*/
    $('#tmnSelect').change(function(event) {
      var op = $(this).val();
      if(op == 1) $('#precioSelect').html('S/ 30.00');
      if(op == 2) $('#precioSelect').html('S/ 40.00');
      if(op == 3) $('#precioSelect').html('S/ 50.00');
      if(op == 4) $('#precioSelect').html('S/ 63.00');
    })
    
    /*chantilly con fruta premium */
    $('#tmnSelect-chantillyfruta').change(function(event) {
      var op = $(this).val();
      if(op == 1) $('#precioSelecte').html('S/ 35.00');
      if(op == 2) $('#precioSelecte').html('S/ 45.00');
      if(op == 3) $('#precioSelecte').html('S/ 55.00');
      if(op == 4) $('#precioSelecte').html('S/ 70.00');
    })  
    /* tres leches de sabores  */
    $('#tmnSelect-treslechesdesabores').change(function(event) {
      var op = $(this).val();
      if(op == 1) $('#precioSelected').html('S/ 40.00');
      if(op == 2) $('#precioSelected').html('S/ 50.00');
      if(op == 3) $('#precioSelected').html('S/ 63.00');
      if(op == 4) $('#precioSelected').html('S/ 80.00');
    }) 
    /*  chocopremium */
    $('#tmnSelect-chocopremium').change(function(event) {
      var op = $(this).val();
      if(op == 1) $('#precioSelectede').html('S/ 35.00');
      if(op == 2) $('#precioSelectede').html('S/ 45.00');
      if(op == 3) $('#precioSelectede').html('S/ 55.00');
      if(op == 4) $('#precioSelectede').html('S/ 60.00');
    })
    
    /*  tortras frias */
    $('#tmnSelect-tortasfrias').change(function(event) {
      var op = $(this).val();
      if(op == 1) $('#precioSelecteh').html('S/ 35.00');
      if(op == 2) $('#precioSelecteh').html('S/ 55.00');
    })
    
    /* tres leches clasica */ 
    $('#tmnSelect-tresleches').change(function(event) {
      var op = $(this).val();
      if(op == 1) $('#precioSelecteder').html('S/ 37.00');
      if(op == 2) $('#precioSelecteder').html('S/ 47.00');
      if(op == 3) $('#precioSelecteder').html('S/ 59.00');
      if(op == 4) $('#precioSelecteder').html('S/ 75.00');
    }) 
    /* tortas dulces */
    $('#tmnSelect-cdulce').change(function(event) {
      var op = $(this).val();
      if(op == 1) $('#precioSelectedere').html('S/ 45.00');
      if(op == 2) $('#precioSelectedere').html('S/ 55.00');
      if(op == 3) $('#precioSelectedere').html('S/ 70.00');
    }) 
    });
