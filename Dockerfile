# Use lightweight Node.js image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package.json & lock first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build

# Expose the port (Next.js runs on 3000 by default)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]