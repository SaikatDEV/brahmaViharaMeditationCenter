# Use a lightweight Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Expose the port your backend server listens to
EXPOSE 4000

# Command to start the backend server
CMD ["node", "server.js"]
