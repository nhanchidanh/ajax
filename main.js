$(document).ready(function () {
   $("#num_order").change(function (e) {
      var num_order = $('#num_order').val();
      var data = {
         num_order: num_order
      };
      console.log(data);
      e.preventDefault();
      $.ajax({
         type: "POST",
         url: "process.php",
         data: data,
         dataType: "text",
         success: function (data) {
            alert(data);
         }
      });
   });
});