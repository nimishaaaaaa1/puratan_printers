# Create project directory structure
mkdir -p puratan-printers/{src,tests}
cd puratan-printers

# Initialize package.json
npm init -y

# Install core dependencies
npm install express mongoose redis jsonwebtoken bcrypt sharp pdfkit

# Install dev dependencies
npm install --save-dev typescript jest ts-jest @types/node @types/express @types/mongoose @types/redis @types/jsonwebtoken @types/bcrypt supertest

# Initialize TypeScript configuration
npx tsc --init

# Create basic directory structure
mkdir -p src/{api,services,models,utils,config,middleware}
mkdir -p src/api/{controllers,routes,validators}
mkdir -p src/services/{auth,order,file,product,payment}
mkdir -p tests/{unit,integration,e2e} 