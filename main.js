$(document).ready(function () {
   $("#num_order").change(function (e) {
      var num_order = $('#num_order').val();
      var price = $('#price').text();
      var data = {
         num_order: num_order, price: price
      };
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "process.php",
         data: data,
         dataType: "json",
         success: function (data) {
            $('#total').html('<b>'+data.total+'</b>');
         }
      });
   });
});
