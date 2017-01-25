Run the client-side public/index.html of the project by command:<br>
<b>mvn spring-boot:run -Dserver.port=9000</b><br>
or by running app.groovy:<br>
To pass command line arguments to the Java application, you need to use a -- to separate them from the “spring” command arguments, e.g.<br>
<b>spring run app.groovy -- --server.port=9000</b><br>
http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#cli-run