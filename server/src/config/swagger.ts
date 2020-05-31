export default {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "Blog Post API documentation using OpenAPI 3.0.3",
      version: "1.0.0",
      description: "An app to serve blog post app data",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
      contact: {
        name: "Rahul Mitra",
        email: "rahulmitra980@gmail.com"
      }
    },
    servers: [
      {
        url: ((): string => {
          const env = process.env["NODE_ENV"];
          const baseUrl = "localhost:9000";

          return `http://${baseUrl}/api`;
        })()
      }
    ]
  },
  apis: ["**/*.ts"]
};
