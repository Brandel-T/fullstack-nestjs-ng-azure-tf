FROM node:22-alpine AS development

WORKDIR /app
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install
COPY . .
COPY .env.* ./
RUN npm run build

CMD ["npm", "run", "start:dev"]


FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev
COPY . .

RUN npm run build


FROM node:22-alpine AS production

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

ENV NODE_ENV=production
EXPOSE 3000

CMD [ "node", "dist/main" ]