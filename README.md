before start please change directory to user-service and run "npm run seed" first for default credintial.
<img width="460" height="300" src="https://github.com/desistrom/microservice-quest/blob/master/flow%20diagram.jpg">
<br/>
Credintial
Admin : 
  email: admin@admin.com
  password:abc12345

User :
  email: user@user.com
  password: abc12345


  for runing docker run docker
  1. in root folder run "docker-compose up -d"
  2. enter auth-service folder, run "docker-compose up --build -d"
  3. enter user-service folder, run "docker-compose up --build -d"