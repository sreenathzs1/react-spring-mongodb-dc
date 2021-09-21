FROM    maven:3-openjdk-11
RUN     mkdir -p /app/src
COPY    src src
COPY    pom.xml .
CMD     ["mvn","-c","spring-boot:run"]