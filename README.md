
# DASHBOARD CRYPTO

Este es un proyecto para mi dashboard donde se evalua sobre el reto tecnico y demás.


## Características
- 🔥 Framework: Nuxt 3 (Vue 3 + Vite)
- 🎨 Estilos: TailwindCSS
- 🔐 Tipado: TypeScript
- 🔁 Consumo de servicios con `useFetch`
- 📊 Dashboard con búsqueda de monedas
- ♻️ Composables reutilizables (`useCoins`, `useServiceStatus`)


# Installation

Clona el repositorio y entra al proyecto:

```bash
git clone https://github.com/usuario/cripto-dashboard.git
cd cripto-dashboard
```
Instala las dependencias
```bash
npm install
```
Crea un archivo .env en la raiz con esta variable
```bash
NUXT_PUBLIC_API_CRYPTO=https://api.coingecko.com/api
```
Ejecuta en desarrollo:
```bash
npm run dev
```
## 🔗 Demo

🎯 **[Ver demo en vivo](https://cripto-dashboard.vercel.app)**


## API Reference
En esta parte se muestra los servicios utilizados para el.
#### Obtener cryptos

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. agagag |
| `nombre`      | `string` | **Required**. agagag |
| `precio`      | `number` | **Required**. gaadasd |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Screenshots

![App Screenshot](https://res.cloudinary.com/ddq6ilgjr/image/upload/v1750401901/Captura_de_pantalla_2025-06-20_014301_hanylr.png)

