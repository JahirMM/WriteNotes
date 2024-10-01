FROM node:18-alpine

# Instala las dependencias necesarias para compilar módulos nativos como bcrypt
RUN apk add --no-cache make g++ python3

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto (dentro del contenedor)
RUN npm install --build-from-source

# Copia el resto de los archivos de la aplicación
COPY . .

# TypeScript, compila el código
RUN npm run build

# Exponer el puerto en el que se ejecutará este proyecto
EXPOSE 4000

# Inicia la aplicación
CMD ["node", "build/index.js"]
