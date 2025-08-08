import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string().required(),
    })
    .authorization((allow) => [allow.authenticated()]),

  NoticiasCortas: a
    .model({
      nombre: a.string().required(),
      fechaEscrita: a.datetime().required(),
      autor: a.string().required(),
      mensaje: a.string().required(),
      imagen: a.string(),
    })
    .authorization((allow) => [
      allow.authenticated().to(["create", "read", "update", "delete"]),
      allow.publicApiKey().to(["read"]),
    ]),

  Obras: a
    .model({
      imagen: a.string(),
      titulo: a.string().required(),
      fecha: a.datetime().required(),
      autor: a.string().required(),
      contenido: a.string().required(),
      estado: a.enum(["pendiente", "en_progreso", "completado"]),
    })
    .authorization((allow) => [
      allow.authenticated().to(["create", "read", "update", "delete"]),
      allow.publicApiKey().to(["read"]),
    ]),

  MapaDistrito: a
    .model({
      nombre: a.string().required(),
      direccion: a.string().required(),
      descripcion: a.string().required(),
      imagen: a.string(),
      latitud: a.float(),
      longitud: a.float(),
    })
    .authorization((allow) => [
      allow.authenticated().to(["create", "read", "update", "delete"]),
      allow.publicApiKey().to(["read"]),
    ]),

  Alertas: a
    .model({
      mensaje: a.string().required(),
      fechaHora: a.datetime().required(),
      userId: a.string().required(),
    })
    .authorization((allow) => [
      allow.authenticated().to(["create", "read", "update", "delete"]),
    ]),

  Queja: a
    .model({
      tipo: a.enum(["Acumulacion", "Contaminacion"]),
      direccion: a.string().required(),
      estado: a.string().default("pendiente"),
      contenido: a.string().required(),
      imagen: a.string(),
      autorNombre: a.string().required(),
      autorEmail: a.string().required(),
    })
    .authorization((allow) => [
      allow.authenticated().to(["create", "read", "update", "delete"]),
    ]),

  Solicitud: a
    .model({
      tipo: a.enum(["Corte_de_Jardin", "Corte_de_Arbol"]),
      direccion: a.string().required(),
      estado: a.string().default("pendiente"),
      contenido: a.string().required(),
      imagen: a.string(),
      autorNombre: a.string().required(),
    })
    .authorization((allow) => [
      allow.authenticated().to(["create", "read", "update", "delete"]),
    ]),

  PuntoReciclaje: a
    .model({
      imagen: a.string(),
      direccion: a.string().required(),
      descripcion: a.string().required(),
      latitud: a.float().required(),
      longitud: a.float().required(),
    })
    .authorization((allow) => [
      allow.authenticated().to(["create", "read", "update", "delete"]),
      allow.publicApiKey().to(["read"]),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
