FROM    maven:3-jdk-13
RUN     mkdir -p /app/src
COPY    src src
COPY    pom.xml .
CMD     ["mvn","-c","spring-boot:run"]