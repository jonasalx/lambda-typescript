# lambda-typescript
Ejemplo basico de lambda con typescript y deploy directo en cuenta AWS

## Como lo cree      
## 1  crear proyecto lambda (hello-world)           

sam init

## 2  TypeScript Dependency         

"scripts": {
  "compile": "tsc"
},
"devDependencies": {
  "aws-sdk": "^2.655.0",
  "@types/aws-lambda": "^8.10.51",
  "@types/node": "^13.13.5",
  "typescript": "^3.8.3"
}

## 3  tsconfig         
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2017",
    "noImplicitAny": true,
    "preserveConstEnums": true,
    "outDir": "./built",
    "sourceMap": true
  },
  "include": ["src-ts/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}


## 4  crear directorio src-ts y mover app.js       

### app.js       
exports.lambdaHandler = async (event, context) => {
  const queries = JSON.stringify(event.queytStringParameters);
  return {
    statusCode: 200,
    body: `Queries: ${queries}`
  }
};

### app.ts          
import { 
  APIGatewayProxyEvent, 
  APIGatewayProxyResult 
} from "aws-lambda";
export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const queries = JSON.stringify(event.queryStringParameters);
  return {
    statusCode: 200,
    body: `Queries: ${queries}`
  }
}

### deberia estar algo asi          
        
├── README.md
├── hello-world
│   ├── built
│   │   ├── app.js
│   │   └── app.js.map
│   ├── package-lock.json
│   ├── package.json
│   ├── src-ts
│   │   ├── app.ts
│   │   └── tests
│   └── tsconfig.json
├── samconfig.toml
└── template.yaml

## 5 DEPLOY   

cd hello-world
npm install
npm run compile
cd ..
sam deploy --guided


## 6 Pruebas en local     
           
sam local start-api

