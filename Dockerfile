# Use an official image of Node.js runtime
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app 

# Copy all package filed from out=r local machine to contaimer's working directory. Here "./" means working dir and here it is "/app"
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy all files from my current dir to container's current dir(/app)
COPY . .

# Set env variable. It can be set in this file or while run the command
ENV PORT=8000

CMD ["node", "server.js"]

