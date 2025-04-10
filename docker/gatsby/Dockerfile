ARG NODE_IMG="${NODE_IMG:-node:22.14-alpine}"
ARG NGINX_IMG="${NGINX_IMG:-nginx:1.27-alpine}"

FROM ${NODE_IMG} AS base
LABEL maintainer="hola@kevinavila.pro"

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
# We should not run as root
USER node
# Set working diretory
WORKDIR /home/node/src

# Copy current working directory into working directory
COPY --chown=node:node . .

# Set environment to development mode
ENV NODE_ENV=development

# Install dependencies with caching enabled
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm -r install --frozen-lockfile --ignore-scripts


FROM base AS build

RUN pnpm -r build

# Serve stage using NGINX
FROM ${NGINX_IMG} AS serve

# Copy NGINX configuration
COPY --from=build /home/node/src/config/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy static files from build stage
COPY --from=build /home/node/src/blog/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80


FROM base AS dev

EXPOSE 8000

RUN pnpm --filter @kevhah/*plugin* build

CMD ["pnpm", "--filter", "@kevhah/blog", "develop", "-H", "0.0.0.0"]
