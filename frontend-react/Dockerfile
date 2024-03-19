FROM    node:alpine
RUN     mkdir /app
WORKDIR /app
COPY    . .
RUN     npm install
# RUN     npm install cors --save
EXPOSE  3000
CMD     ["npm", "run", "start"]
