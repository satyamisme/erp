# Lakki Terminal OS

Lakki Terminal OS is a high-density, enterprise-grade Point of Sale (POS) and ERP system tailored for phone repair, retail, and omnichannel management. It features a complete architecture spanning 367 unique business functions across 7 distinct domains.

## Architecture (Atomic Design)
The project strictly adheres to an atomic, scalable React structure:
- `src/components/atoms`: Smallest UI building blocks (Buttons, Inputs, Spinners)
- `src/components/molecules`: Combinations of atoms (Search bars, Data rows)
- `src/components/organisms`: Complex functional UI pieces (Sidebar, Header, Tables)
- `src/components/templates`: Layout wrappers
- `src/pages`: Top-level route components
- `src/store`: Zustand state management (User, Auth, Cart, Features)
- `src/features`: Domain-specific business logic (React Query / custom hooks)

**Tech Stack:**
- Frontend: React 19, Vite, TypeScript, Tailwind CSS v3, Zustand
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)

---

## 🚀 Setup & Installation Guide

This guide covers setting up the project for local development across Windows, macOS, and Linux.

### Prerequisites (All Platforms)
1. **Node.js** (v18 or later recommended)
2. **MongoDB** (Running locally on default port `27017` or a MongoDB Atlas URI)
3. **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/your-org/lakki-terminal.git
cd lakki-terminal
```

### 2. Environment Configuration
Navigate to the `backend/` directory and create a `.env` file based on the sample configuration below:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/lakki_terminal
JWT_SECRET=your_super_secret_key_here
```

*Note: Some enterprise features require specific API keys (e.g., `WHATSAPP_API_KEY`, `GSMA_API_KEY`, `TWILIO_API_KEY`). You will need to add these to your `.env` file to fully activate them via the Governance dashboard.*

### 3. Windows Setup
1. **Install Dependencies:**
   Open PowerShell or Command Prompt as Administrator:
   ```cmd
   # Install Frontend dependencies
   npm install

   # Install Backend dependencies
   cd backend
   npm install
   cd ..
   ```
2. **Start MongoDB:** Ensure MongoDB is running as a Windows Service (`services.msc`), or start it manually.
3. **Seed Database:**
   ```cmd
   node backend/seedFeatures.js
   ```
4. **Start Servers:**
   - Terminal 1 (Backend): `cd backend && node server.js`
   - Terminal 2 (Frontend): `npm run dev`

### 4. macOS Setup
1. **Install Dependencies:**
   Open Terminal:
   ```bash
   # Install Frontend dependencies
   npm install

   # Install Backend dependencies
   cd backend && npm install && cd ..
   ```
2. **Start MongoDB:**
   If installed via Homebrew: `brew services start mongodb-community`
3. **Seed Database:**
   ```bash
   node backend/seedFeatures.js
   ```
4. **Start Servers:**
   - Terminal 1 (Backend): `cd backend && node server.js`
   - Terminal 2 (Frontend): `npm run dev`

### 5. Linux Setup (Ubuntu/Debian)
1. **Install Dependencies:**
   Open Terminal:
   ```bash
   # Install Frontend dependencies
   npm install

   # Install Backend dependencies
   cd backend && npm install && cd ..
   ```
2. **Start MongoDB:**
   ```bash
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```
3. **Seed Database:**
   ```bash
   node backend/seedFeatures.js
   ```
4. **Start Servers:**
   - Terminal 1 (Backend): `cd backend && node server.js`
   - Terminal 2 (Frontend): `npm run dev`

---

## 🛠 Usage

1. Access the application at `http://localhost:5173`.
2. Login with any of the predefined roles (e.g., `SA` for Super Admin, `MGR` for Manager).
3. Navigate to the **Governance** tab to manage the 367 features via the Feature Activation Matrix. Toggle their status or Role-Based Access Control (RBAC) settings. These changes are saved directly to MongoDB.

For details on the status of individual features and the development roadmap, refer to the [PLAN.md](./PLAN.md) file.
