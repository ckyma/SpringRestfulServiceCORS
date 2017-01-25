/**
 * Created by yuchen on 1/23/2017.
 */
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/greeting?name=Yu"
    }).then(function(data, status, jqxhr) {
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
        console.log(jqxhr);
    });
});
