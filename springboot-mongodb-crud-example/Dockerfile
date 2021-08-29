FROM    maven:3-openjdk-11
RUN     apt install openjdk-11-jdk-headless -y
RUN     mkdir -p /app/src
COPY    src src
COPY    pom.xml .
CMD     ["mvn","-c","spring-boot:run"]