# Listarr Frontend

A modern web interface for Listarr built with SolidJS, TypeScript, and Tailwind CSS.

## Tech Stack

- [SolidJS](https://www.solidjs.com/) - A declarative JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Bun](https://bun.sh/) - A fast all-in-one JavaScript runtime & toolkit

## Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Docker (if using containerized deployment)

## Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/unfaiyted/listarr-frontend.git
cd listarr/frontend
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

The app will be available at `http://localhost:3000`

## Building for Production

Build the production version:
```bash
bun run build
```

## Docker Deployment

Build the Docker image:
```bash
docker build -t listarr-frontend .
```

Run the container:
```bash
docker run -p 3000:3000 listarr-frontend
```

## Environment Variables

Create a `.env` file in the frontend directory:

```env
API_URL=http://localhost:8000
# Add other environment variables as needed
```

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run TypeScript type checking
- `bun test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT License](LICENSE)
