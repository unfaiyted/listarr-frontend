// scripts/generate-types.js
import { exec } from 'child_process';
import { writeFile } from 'fs/promises';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import swagger2openapi from 'swagger2openapi';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OPENAPI_OUTPUT_PATH = join(__dirname, '../src/lib/api/v1.d.ts');
const OPENAPI_TEMP_PATH = join(__dirname, '../openapi.json');

async function convertSwaggerToOpenAPI(swagger) {
	try {
		const options = {
			patch: true,
			warnOnly: true
		};
		const { openapi } = await swagger2openapi.convert(swagger, options);
		return openapi;
	} catch (error) {
		console.error('Error converting Swagger to OpenAPI:', error);
		throw error;
	}
}

async function generateTypes() {
	try {
		console.log('Fetching Swagger schema from backend...');
		const response = await fetch('http://localhost:8080/swagger/doc.json');

		if (!response.ok) {
			throw new Error(`Failed to fetch Swagger schema: ${response.statusText}`);
		}

		const swaggerSchema = await response.json();

		console.log('Converting Swagger 2.0 to OpenAPI 3.0...');
		const openApiSchema = await convertSwaggerToOpenAPI(swaggerSchema);

		console.log('Writing OpenAPI schema file...');
		await writeFile(OPENAPI_TEMP_PATH, JSON.stringify(openApiSchema, null, 2));

		console.log('Generating TypeScript types...');
		const { stdout, stderr } = await execAsync(
			`npx openapi-typescript ${OPENAPI_TEMP_PATH} --output ${OPENAPI_OUTPUT_PATH}`
		);

		if (stdout) console.log(stdout);
		if (stderr) console.error(stderr);

		console.log('Types generated successfully!');
	} catch (error) {
		console.error('Error generating types:', error);
		process.exit(1);
	}
}

generateTypes();
