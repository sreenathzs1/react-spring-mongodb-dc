FROM    node:alpine
RUN     mkdir /app
WORKDIR /app
COPY    . .
RUN     CI=true
RUN     npm install
CMD     ["npm", "run", "start"]