FROM bfhlcontainerregistry.azurecr.io/builds/node-12-cacert-bash:latest

# Copy code
COPY package*.json ./
RUN npm install --only=production
COPY . .

EXPOSE 3000

CMD [ "node", "src/index.js" ]