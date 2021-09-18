FROM    node:alpine
RUN     mkdir /app
WORKDIR /app
COPY    . .
ARG    API_URL="http://18.204.231.151:8080/api/v1/employees"
ENV    EMPLOYEE_API_BASE_URL = $API_URL
RUN     npm install
CMD     ["npm", "run", "start"]