FROM    node:stretch-slim
RUN     mkdir /app
WORKDIR /app
COPY    . .
ENV     DEBUG=*
RUN     npm install
CMD     ["npm","start"]