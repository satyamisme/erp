# COMPLETE FEATURES LIST – Lakki Terminal OS
## All Features Discussed (IDs 1–350+)
**Enterprise Feature Registry** | Last Updated: April 2026

**Legend:** ✅ Core (original 315) | 🔄 Enhanced (gap analysis) | 🆕 New (post‑audit, IDs 316–350)

---

## Domain 1: POS & Unified Sales Terminal (IDs 1–60)

| ID | Feature | Status | Description |
|----|---------|--------|-------------|
| 1 | 4‑column virtualised product grid | ✅ | High‑density grid with virtual scrolling; supports pinning bestsellers via sort_priority. |
| 2 | Barcode scanner integration | ✅ | USB/Bluetooth scanner support; auto‑focus input field. |
| 3 | Elastic global search | 🔄 | Debounced (300ms), rate‑limited (50/min), virtual scroll results. |
| 4 | Product quick view | ✅ | Modal with details, stock, price, image. |
| 5 | IMEI validation (15‑digit check) | 🔄 | Real‑time chip: green (valid), red (invalid), grey (checking). |
| 6 | IMEI duplicate check during sale | 🔄 | Checks active cart + last 7 days of sales; blocks double sale. |
| 7 | Product bundling | 🔄 | 1‑SKU deduction of multiple items; supports partial return with bundle breakdown modal. |
| 8 | Serial number tracking (non‑IMEI) | ✅ | For accessories, power banks, etc. |
| 9 | Cart editing (quantity, remove) | ✅ | Increment/decrement, delete with reason code. |
| 10 | Customer lookup by phone | ✅ | Auto‑suggest from recent customers. |
| 11 | Tax calculation (VAT) | ✅ | Configurable tax rate per store (0%, 5%, 8%). |
| 12 | Split payments | ✅ | Payment matrix (cash, card, BNPL, loyalty); real‑time balance. |
| 13 | Discount input | ✅ | Percentage or fixed; capped by ID 206; manager override requires PIN. |
| 14 | Loyalty points redemption | ✅ | Convert points to currency; logged in audit. |
| 15 | Receipt printing (thermal) | ✅ | ESC/POS protocol; supports custom templates (ID 220). |
| 16 | Email receipt | ✅ | Send PDF via email/SMS. |
| 17 | Hold cart | ✅ | Save cart for later retrieval (max 20 per terminal). |
| 18 | Retrieve held cart | ✅ | Resume from hold; logs who retrieved. |
| 19 | Add note to sale | ✅ | Internal memo (e.g., “gift wrap”). |
| 20 | Salesperson assignment | ✅ | Attach staff ID to sale for commission. |
| 21 | Exchange item | ✅ | Return + repurchase in one transaction. |
| 22 | Layaway / deposit plan | ✅ | Customer pays deposit, balance later. |
| 23 | Gift card sale & redemption | ✅ | Issue gift cards; track balance. |
| 24 | Customer credit limit check | ✅ | Warn if customer exceeds credit limit. |
| 25 | Multi‑currency cash | ✅ | Accept USD/INR; convert at store rate. |
| 26 | Rounding adjustment | ✅ | Round to nearest 5 fils (Kuwait). |
| 27 | Price override | 🔄 | Requires manager PIN; logged with reason code. |
| 28 | Cost price visibility | ✅ | Only managers/inventory staff. |
| 29 | Margin indicator | ✅ | Show profit % during sale (manager only). |
| 30 | Low stock warning on add | ✅ | Alert if stock < reorder point. |
| 31 | Offline‑first mode | 🔄 | IndexedDB queue; pending fulfilment state; conflict resolution UI on reconnection. |
| 32 | Auto‑sync engine | 🔄 | Background sync every 30s; “Last sync” indicator. |
| 33 | Offline sale storage | ✅ | Stores up to 500 transactions offline. |
| 34 | Voucher / coupon validation | ✅ | Scan or enter code; validates expiry and usage limits. |
| 35 | Buy One Get One (BOGO) | ✅ | Automatic discount rule. |
| 36 | Time‑based sale (happy hour) | ✅ | Discount automatically applied during configured hours. |
| 37 | Customer group discount | ✅ | e.g., “Gold members get 5%”. |
| 38 | Minimum cart value for discount | ✅ | E.g., “10 KD off above 50 KD”. |
| 39 | Free shipping threshold | ✅ | For omnichannel orders. |
| 40 | Refund / return | 🔄 | Requires manager PIN if > threshold; mandatory reason code. |
| 41 | Return to original payment | ✅ | Refund to same card/cash. |
| 42 | Store credit refund | ✅ | Issue store credit instead of cash. |
| 43 | No‑receipt return | ✅ | Manager approval required; checks last 30 days. |
| 44 | Return with original receipt | ✅ | Auto‑populates items. |
| 45 | Exchange price difference | ✅ | Collect or refund difference. |
| 46 | Void transaction (full) | ✅ | Manager PIN required if receipt printed. |
| 47 | Void line item | ✅ | Requires reason code. |
| 48 | Re‑print last receipt | ✅ | Accessible from “Recent Sales”. |
| 49 | Open cash drawer (no sale) | 🔄 | Requires manager PIN; logs reason. |
| 50 | Cash drawer count | ✅ | Record opening/closing cash amount. |
| 51 | Sales history per customer | ✅ | 360 view (ID 256). |
| 52 | Recent customers list | ✅ | Stores last 20 customers per terminal (IndexedDB). |
| 53 | Quick customer creation | ✅ | Minimal fields: name, phone. |
| 54 | Customer edit | ✅ | Full profile edit with audit. |
| 55 | Merge duplicate customers | ✅ | One‑click cleanup (ID 222). |
| 56 | Customer blacklist flag | ✅ | Warn cashier before sale. |
| 57 | Required customer for repair | ✅ | Repair intake requires customer. |
| 58 | Optional customer for sale | ✅ | Guest checkout allowed. |
| 59 | Customer birthday reminder | ✅ | Popup on POS. |
| 60 | Customer spend summary | ✅ | Lifetime value (CLV). |

---

## Domain 2: Deep‑Tech Repair Hub (IDs 61–120)

| ID | Feature | Status | Description |
|----|---------|--------|-------------|
| 61 | Repair intake form | ✅ | Customer, device, symptoms, photos (max 5). |
| 62 | Device catalog | ✅ | Brands, models, variants (storage, color). |
| 63 | Visual damage mapper | ✅ | Clickable phone diagram; stores damage map as JSON. |
| 64 | Symptom checklist | ✅ | Predefined symptoms (cracked screen, battery, water damage). |
| 65 | Repair priority (normal/urgent/VIP) | ✅ | ID 107. |
| 66 | Estimated completion time | ✅ | Calculated from queue length + part availability. |
| 67 | Repair quote generation | ✅ | PDF quote sent to customer. |
| 68 | Quote approval (customer) | ✅ | Customer signs digitally or via WhatsApp. |
| 69 | Repair status tracking | ✅ | In queue → In progress → QC → Ready → Collected. |
| 70 | Status update notifications | ✅ | WhatsApp/SMS (ID 74). |
| 71 | 20‑point QC gate | 🔄 | Versioned checklist; QC fail requires manual confirm before notification. |
| 72 | QC failure reason | ✅ | Mandatory text field. |
| 73 | Rework workflow | ✅ | Return to “In progress” with note. |
| 74 | WhatsApp status bot | 🔄 | Triggered after QC pass or manager override; uses circuit breaker (ID 319). |
| 75 | SMS fallback for notifications | ✅ | If WhatsApp fails, send SMS. |
| 76 | Repair history per device (IMEI) | ✅ | All past repairs linked to IMEI. |
| 77 | Warranty tracking | ✅ | Store warranty (e.g., 90 days on repairs). |
| 78 | Warranty claim | ✅ | Auto‑create repair from past sale. |
| 79 | Part replacement log | ✅ | Record which parts used (serial numbers). |
| 80 | Part deduction from inventory | ✅ | Auto‑reduce stock when part consumed. |
| 81 | Part restocking (cancelled repair) | ✅ | ID 119. |
| 82 | Technician assignment | ✅ | Manual or auto‑assign (ID 113, 292). |
| 83 | Technician queue view | ✅ | Bench queue TV (ID 117). |
| 84 | Technician performance metrics | ✅ | Avg repair time, first‑time fix rate. |
| 85 | Labour commission calculation | ✅ | ID 105. |
| 86 | Repair note (internal) | ✅ | Visible to technicians only. |
| 87 | Repair note (customer visible) | ✅ | Shown in self‑service portal. |
| 88 | Photo upload (before/after) | ✅ | Up to 10 photos; stored in cloud. |
| 89 | Customer device gallery | ✅ | ID 114. |
| 90 | Repair deposit collection | ✅ | ID 310. |
| 91 | Balance due on collection | ✅ | Collect remaining amount. |
| 92 | Repair invoice | ✅ | Itemised: labour + parts. |
| 93 | Repair payment split | ✅ | Deposit at intake, balance later. |
| 94 | Repair cancellation flow | 🔄 | Restock parts; refund deposit (manager PIN). |
| 95 | No‑show follow‑up | ✅ | Auto‑reminder after 7 days uncollected. |
| 96 | Job expiry alert | ✅ | ID 116 – notify manager after 30 days. |
| 97 | Device archive (cold storage) | ✅ | ID 110 – move old repairs to separate DB. |
| 98 | Repair category manager | ✅ | ID 111 – custom categories. |
| 99 | Status colour mapping | ✅ | ID 112 – custom UI colours per status. |
| 100 | Repair cost estimator (quick quote) | ✅ | ID 115 – no part reservation. |
| 101 | Technician login via NFC | ✅ | Tap card to access bench. |
| 102 | Parts backorder list | ✅ | Alert when requested part arrives. |
| 103 | IMEI blacklist check (GSMA) | 🔄 | API with circuit breaker; manual override if API down. |
| 104 | Internal spare parts request | ✅ | Approval flow for expensive screens; manager required. |
| 105 | Labour commission engine | ✅ | % of labour for tech. |
| 106 | Service area manager | ✅ | Group repairs by branch/department. |
| 107 | Job priority toggle | ✅ | Mark as VIP or Urgent. |
| 108 | Post‑repair survey | ✅ | Auto‑send “How was your repair?”. |
| 109 | Digital repair agreement | ✅ | Mandatory T&Cs check with signature. |
| 110 | Device archive | ✅ | Move old repair data to cold storage. |
| 111 | Repair category manager | ✅ | Custom categories (Display, Audio, Power). |
| 112 | Status colour mapping | ✅ | Custom UI colours per status. |
| 113 | Auto‑assign rules | ✅ | e.g., all Samsung repairs to Technician A. |
| 114 | Customer device gallery | ✅ | Cloud storage for device photos. |
| 115 | Repair cost estimator | ✅ | Quick‑quote tool. |
| 116 | Job expiry alert | ✅ | Notify manager if not picked up in 30 days. |
| 117 | Bench queue TV | ✅ | Dashboard for techs to see upcoming jobs. |
| 118 | Component serial tracking | ✅ | Log serial of new screen. |
| 119 | Repair cancellation flow | 🔄 | Restock parts if job cancelled. |
| 120 | Job card barcode | ✅ | Scan job card to open dashboard. |

---

## Domain 3: Inventory & Supply Chain (IDs 121–180)

| ID | Feature | Status | Description |
|----|---------|--------|-------------|
| 121 | Multi‑store matrix view | ✅ | Global stock search; read‑only for cashiers. |
| 122 | Inter‑store transfer request | ✅ | Create request from store A to store B. |
| 123 | Transfer approval | ✅ | Manager at source store approves. |
| 124 | Transfer receive | ✅ | Scan items to confirm receipt. |
| 125 | Low stock dashboard | ✅ | Alerts when stock < reorder point. |
| 126 | Purchase order (PO) creation | ✅ | Create PO to supplier. |
| 127 | PO approval workflow | ✅ | Manager approval required > threshold. |
| 128 | Landed cost engine | 🔄 | Adds customs + shipping + insurance; supports non‑deductible tax. |
| 129 | PO receipt | ✅ | Receive items against PO. |
| 130 | Partial PO receipt | ✅ | Receive in multiple batches. |
| 131 | Supplier management | ✅ | Name, contact, payment terms. |
| 132 | Supplier credit tracking | ✅ | Outstanding balance to supplier. |
| 133 | Supplier return (RMA to vendor) | 🆕 | Defective parts return; track credit note. |
| 134 | Stock adjustment (manual) | ✅ | Increase/decrease with reason code. |
| 135 | Stock take (cycle count) | 🔄 | Blind count mode (ID 318). |
| 136 | Stock adjustment approval | ✅ | Manager approval for negative adjustments. |
| 137 | Stock transfer (bulk) | ✅ | Move multiple SKUs at once. |
| 138 | Stock valuation (FIFO) | ✅ | ID 141. |
| 139 | Stock valuation (average cost) | ✅ | Alternative method. |
| 140 | Stock valuation by store | ✅ | ID 172. |
| 141 | FIFO reporting | ✅ | Cost of goods sold calculation. |
| 142 | Reorder point alert | ✅ | Auto‑suggest PO when stock low. |
| 143 | Auto‑replenish (auto‑PO) | ✅ | ID 178. |
| 144 | Supplier lead time tracking | ✅ | Days from PO to receipt. |
| 145 | Batch expiry tracking | ✅ | For glues, chemicals (ID 177). |
| 146 | Serial number / IMEI tracking | ✅ | Individual item tracking. |
| 147 | Bulk IMEI registration (CSV) | ✅ | ID 286. |
| 148 | IMEI range auto‑generation | 🆕 | Enter first and last IMEI; system creates all in‑between. |
| 149 | Component serial tracking in repair | ✅ | ID 118. |
| 150 | Defective return pool | ✅ | ID 175 – virtual store for faulty parts. |
| 151 | Supplier bank details | ✅ | ID 174 – stored for wire transfers. |
| 152 | In‑transit insurance tag | ✅ | ID 176 – mark high‑value transfers. |
| 153 | Transfer manifest QR | ✅ | ID 179 – driver scans to mark arrived. |
| 154 | Inventory snapshot (export) | ✅ | ID 180 – stock levels for accounting. |
| 155 | Unit of measure (UOM) | ✅ | Pieces, boxes, meters. |
| 156 | Warehouse bin location | ✅ | Shelf, rack, bin. |
| 157 | Inventory pick list | ✅ | QR code for picking. |
| 158 | Inventory cycle count schedule | ✅ | Weekly/monthly counts by category. |
| 159 | Blind cycle count (zero visibility) | 🆕 | Staff counts without seeing expected quantity. |
| 160 | Double‑blind count (two staff) | 🆕 | Two staff count separately; system compares. |
| 161 | Post‑scan reconciliation | 🆕 | After bulk scan, show expected vs scanned. |
| 162 | Batch intake buffer (scan‑to‑bucket) | 🆕 | High‑speed scanning with exceptions tab. |
| 163 | Exceptions tab for unrecognised barcodes | 🆕 | Handle invalid scans after bulk. |
| 164 | Batch label printing (ZPL) | 🆕 | Raw ZPL pass‑through for high speed. |
| 165 | Supplier MOQ alert | 🆕 | Warn if PO quantity < supplier minimum. |
| 166 | Inter‑store loan (temporary) | 🆕 | Loan with return date; separate from permanent transfer. |
| 167 | Supplier order reminder (late PO) | ✅ | ID 289. |
| 168 | Automatic stock reconciliation | ✅ | ID 288 – suggest fixes for counts. |
| 169 | Stock valuation by warehouse | ✅ | Per‑location asset value. |
| 170 | Bulk transfer approval (one‑click) | ✅ | ID 171. |
| 171 | Bulk transfer approval | ✅ | Approve 50 items at once. |
| 172 | Stock valuation by store | ✅ | Compare branch asset values. |
| 173 | Unit of measure (UOM) | ✅ | Pieces vs boxes vs meters. |
| 174 | Supplier bank details | ✅ | Stored for wire transfers. |
| 175 | Defective return pool | ✅ | Bucket for parts removed from repairs. |
| 176 | In‑transit insurance tag | ✅ | Mark high‑value transfers. |
| 177 | Shelf life tracker | ✅ | For glues and chemicals. |
| 178 | Auto‑replenish | ✅ | Auto‑PO when stock hits zero. |
| 179 | Transfer manifest QR | ✅ | Driver scans to mark “Arrived”. |
| 180 | Inventory snapshot | ✅ | Export stock levels for accounting. |

---

## Domain 4: Governance, Security & HR (IDs 181–240 + New)

| ID | Feature | Status | Description |
|----|---------|--------|-------------|
| 181 | Master audit trail | 🔄 | Append‑only collection; user, action, reason_code, IP, timestamp. |
| 182 | Audit log viewer | ✅ | Filter by user, action, date range. |
| 183 | Audit log export (CSV) | ✅ | For external auditors. |
| 184 | Anomaly detection rules | ✅ | Configurable rules (e.g., sale <1 KD). |
| 185 | Feature toggle board | 🔄 | Enable/disable any ID 1–350 per role; searchable. |
| 186 | IP whitelisting | 🔄 | Restrict roles to specific IP ranges. |
| 187 | Geofence login | ✅ | Restrict login to store GPS radius. |
| 188 | Login attempt lockout | ✅ | After 5 failed attempts, lock 15 min. |
| 189 | Password expiry policy | ✅ | Force change every 90 days. |
| 190 | Z‑report PDF | 🔄 | Daily summary; warns if expenses > cash. |
| 191 | Mid‑shift X‑report | ✅ | Snapshot without closing. |
| 192 | Profit & loss dashboard | ✅ | Daily/monthly gross margin view. |
| 193 | Expense tracker | ✅ | Log rent, utilities, mandoob fees. |
| 194 | VAT/tax export | ✅ | Government‑ready CSV for filing. |
| 195 | Role template creator | ✅ | Presets for Cashier, Manager, etc. |
| 196 | Staff permission override | ✅ | Give one specific user extra power. |
| 197 | Payroll engine | ✅ | Base + commission – penalties. |
| 198 | Employee performance score | ✅ | Combined sales/repair metrics. |
| 199 | Store profile manager | ✅ | Logos, addresses, branch links. |
| 200 | Database health monitor | ✅ | Real‑time latency and uptime view. |
| 201 | Auto‑backups (daily cloud snapshots) | 🔄 | Enhanced to 3‑2‑1‑1‑0 rule (ID 341). |
| 202 | Remote session logout | ✅ | Admin kill any suspicious session. |
| 203 | Multi‑store comparison | ✅ | Benchmark Store A vs Store B. |
| 204 | Aged debt report | ✅ | Identify customers who owe credit. |
| 205 | Fraud detection logic | ✅ | Flag same IMEI sold twice. |
| 206 | Discount capping | ✅ | Hard‑block any discount > X%. |
| 207 | Expense receipt upload | ✅ | Photo attachments for petty cash. |
| 208 | User activity timeline | ✅ | Visual feed of staff actions. |
| 209 | Security policy enforcer | ✅ | Password expiry and complexity rules. |
| 210 | Custom field builder | ✅ | Add extra data fields to items/users. |
| 211 | System event notifications | ✅ | Email/SMS for big sales or stockouts. |
| 212 | Multi‑user concurrency | ✅ | Handle 5 people editing one job. |
| 213 | God‑mode parity | ✅ | Co‑owner role with full power. |
| 214 | Regional scoping | ✅ | Managers see only their shops. |
| 215 | Audit log encryption | ✅ | Logs non‑editable even for Admins. |
| 216 | Staff feedback loop | ✅ | Internal “Suggest a Feature” tool. |
| 217 | Access logs | ✅ | Track every login attempt and IP. |
| 218 | Global search palette (Ctrl+K) | ✅ | Jump to any feature. |
| 219 | Dark/light mode theme | ✅ | Global UI styling engine. |
| 220 | Print layout builder | ✅ | Drag‑and‑drop receipt customizer. |
| 221 | Voucher validation | ✅ | Scan physical flyers for coupons. |
| 222 | Customer merging | ✅ | Clean duplicate profiles. |
| 223 | Global heatmap | ✅ | Map of where customers live. |
| 224 | Tax compliance check | ✅ | Auto‑check for missing tax info. |
| 225 | User profile image | ✅ | Identify staff by photo in logs. |
| 226 | Shift handover note | ✅ | Digital report for next manager. |
| 227 | Training mode (sandbox) | ✅ | New hires (no real data). |
| 228 | Feature adoption score | ✅ | Show which staff use which tools. |
| 229 | Legal agreement manager | ✅ | Terms & conditions versioning. |
| 230 | Currency exchange rate | ✅ | Auto‑update USD/INR to KD. |
| 231 | GDPR/privacy tools | ✅ | Export/delete customer data. |
| 232 | System health check | ✅ | One‑click check of all API endpoints. |
| 233 | Bulk user invite (CSV) | ✅ | Onboard 50 staff via CSV. |
| 234 | Department hierarchy | ✅ | Manage sub‑teams (Sales, Tech, HR). |
| 235 | Maintenance mode toggle | ✅ | Lock app for updates. |
| 236 | API key management | ✅ | For external integrations. |
| 237 | Payment terminal setup | ✅ | Configure card machine links. |
| 238 | Webhook manager | ✅ | Send data to external URLs (Shopify/Woo). |
| 239 | Report scheduler | ✅ | Email Z‑report at 11 PM daily. |
| 240 | Dashboard widget customizer | ✅ | Staff pin favourite tools. |
| 317 | PITR restore slider | 🆕 | Time‑travel recovery for specific collections. |
| 319 | API circuit breaker panel | 🆕 | Per‑API trip switch + auto‑trip logic. |
| 330 | Manager PIN override | 🆕 | PIN required for void/refund/no‑sale; logged. |
| 331 | Fast‑switch user PIN overlay | 🆕 | Change cashier without full logout. |
| 332 | Carrier commission clawback | 🆕 | Deduct commission if customer cancels plan. |
| 334 | API kill switch (global) | 🆕 | Emergency disable all external APIs. |
| 335 | Session invalidation by branch | 🆕 | Force logout all users in a specific store. |
| 339 | Asynchronous export with notification | 🆕 | Export large data in background; notify via WhatsApp. |
| 340 | Database self‑heal dashboard | 🆕 | Nightly integrity check; repair orphaned records. |
| 341 | Three‑tier backup strategy UI | 🆕 | Hot/warm/cold backup management. |
| 342 | Read‑replica routing | 🆕 | Cockpit queries use read replica. |
| 343 | Request coalescing | 🆕 | Batch identical API requests. |
| 344 | Web Worker IMEI validation | 🆕 | Offload IMEI checks to background thread. |
| 345 | IndexedDB product cache | 🆕 | Store product catalog locally; delta sync. |

---

## Domain 5: Omnichannel, CRM & IoT (IDs 241–300 + New)

| ID | Feature | Status | Description |
|----|---------|--------|-------------|
| 241 | BOPIS (Buy Online, Pickup In Store) | ✅ | Sync web orders to store. |
| 242 | Stock sync with e‑commerce | ✅ | Real‑time inventory sync. |
| 243 | Webhook listeners (Shopify/Woo) | ✅ | Receive order updates. |
| 244 | Anomaly detection (sales) | ✅ | Flag suspicious patterns. |
| 245 | Customer queue display (TV) | ✅ | Show repair status on screen. |
| 246 | Biometric login (fingerprint) | ✅ | WebAuthn support. |
| 247 | Customer queue display (self‑service) | ✅ | Smart display via WebSockets. |
| 248 | SMS notifications | ✅ | Twilio integration. |
| 249 | Email marketing integration | ✅ | Mailchimp/Klaviyo (ID 307). |
| 250 | Social media linkage | ✅ | Attach Instagram/TikTok handles. |
| 251 | WhatsApp API config | 🔄 | Template editor; circuit breaker. |
| 252 | Customer tiering | ✅ | Silver, Gold, VIP based on spend. |
| 253 | Birthday coupon bot | ✅ | Auto‑send SMS/WhatsApp. |
| 254 | Review solicitor | ✅ | SMS link for Google Review after delivery. |
| 255 | Mandoob tracker | ✅ | Real‑time driver location. |
| 256 | Customer 360 profile | ✅ | Full history, spend, repair logs. |
| 257 | Blacklist manager | ✅ | Flag problematic customers. |
| 258 | Self‑service portal | ✅ | Online status check via Ticket ID. |
| 259 | Omnichannel search | ✅ | Find online orders in POS. |
| 260 | Click‑to‑call | ✅ | Integrated dialing from CRM. |
| 261 | Social media linkage | ✅ | Attach Instagram/TikTok handles. |
| 262 | Waitlist logic | ✅ | Notify when a part arrives. |
| 263 | Pre‑order management | ✅ | Deposits for unreleased phones. |
| 264 | Family account linking | ✅ | Share points across family. |
| 265 | Geo‑fencing alerts | ✅ | Notify shop when driver is near. |
| 266 | Integrated map | ✅ | Show addresses for delivery routing. |
| 267 | Customer CLV | ✅ | Predict long‑term profit per user. |
| 268 | Chat history archive | ✅ | Save all WhatsApp conversations. |
| 269 | Store feedback screen | ✅ | “Rate us” tablet at exit. |
| 270 | Incident log | ✅ | Record complaints or accidents. |
| 271 | Voucher validation | ✅ | Duplicate of ID 34 (removed). |
| 272 | Excel/CSV export | ✅ | Turn any list into spreadsheet. |
| 273 | Security policy | ✅ | Duplicate of ID 209 (removed). |
| 274 | Staff messenger | ✅ | Internal chat with file attachments. |
| 275 | IoT scale sync | ✅ | For weighing parts or devices. |
| 276 | Smart display screen | ✅ | Customer monitor via WebSockets. |
| 277 | RFID tag reader | ✅ | Identify devices on bench pad. |
| 278 | IoT printer status | ✅ | Alert POS if paper is low. |
| 279 | Cash drawer log | ✅ | Record every physical opening. |
| 280 | Kiosk mode | ✅ | Self‑service UI for accessory sales. |
| 281 | Audio announcements | ✅ | “Job Assigned to Ahmed” over speakers. |
| 282 | Digital signage sync | ✅ | Display promos on store TVs. |
| 283 | Payment terminal handshake | ✅ | Direct tap‑to‑POS integration. |
| 284 | Door sensor log | ✅ | Track shop foot traffic. |
| 285 | Inventory pick‑list QR | ✅ | Scan to confirm item is picked. |
| 286 | Batch IMEI registration | ✅ | Add 500 serials via CSV. |
| 287 | Web‑to‑store fulfill | ✅ | Push web orders to nearest shop. |
| 288 | Automatic stock reconciliation | ✅ | Suggest fixes for counts. |
| 289 | Supplier order reminder | ✅ | Automated emails for late POs. |
| 290 | Duplicate customer merge | ✅ | One‑click cleanup. |
| 291 | Failed payment retry | ✅ | System re‑queue for card errors. |
| 292 | Auto‑assign tech | ✅ | Lightest workload logic. |
| 293 | Executive summary email | ✅ | Daily digest for owner. |
| 294 | Product affinity analysis | ✅ | “People who bought X also bought Y”. |
| 295 | Return rate by SKU | ✅ | Identify bad batches. |
| 296 | Sales funnel analytics | ✅ | View → Cart → Pay tracking. |
| 297 | Zero‑stock impact | ✅ | Report lost sales due to stockouts. |
| 298 | Privacy anonymization | ✅ | Clean data for audit exports. |
| 299 | Tamper‑proof audit | ✅ | Append‑only log files. |
| 300 | Global search palette | ✅ | Duplicate of ID 218 (removed). |
| 322 | Customer wishlist / back in stock alert | 🆕 | Notify when out‑of‑stock item returns. |
| 347 | Customer account freeze toggle | 🆕 | Temporarily block customer from purchases. |

---

## Domain 6: Extended Features (IDs 301–315)

| ID | Feature | Status | Description |
|----|---------|--------|-------------|
| 301 | Phone trade‑in / exchange flow | ✅ | Grade device, deduct value from new purchase. |
| 302 | BNPL / instalment payment method | ✅ | Tamara, Tabby, or in‑house. |
| 303 | Two‑factor authentication (2FA) | ✅ | OTP/TOTP for staff logins. |
| 304 | Apple GSX / authorised repair integration | ✅ | API for Apple parts ordering. |
| 305 | Blacklisted / stolen device check (incoming) | ✅ | Check against GSMA database. |
| 306 | ESD safety workspace checklist | ✅ | Pre‑repair compliance log. |
| 307 | Email marketing integration | ✅ | Mailchimp/Klaviyo webhook. |
| 308 | Customs duty / HS tariff code on PO | ✅ | Per‑item HS code and customs %. |
| 309 | Customer consent & marketing opt‑in log | ✅ | Capture consent for lawful marketing. |
| 310 | Repair deposit / partial payment intake | ✅ | Pay deposit at intake, balance on collection. |
| 311 | Multi‑language UI (Arabic RTL) | 🔄 | System‑wide Arabic RTL toggle; high‑contrast accessibility mode. |
| 312 | Supplier WhatsApp / Telegram quick order | ✅ | One‑click “Send PO via WhatsApp”. |
| 313 | CCTV / camera integration hook | ✅ | Link security footage to audit events. |
| 314 | Apple Business Chat / Google Business Messages | ✅ | Additional customer channels. |
| 315 | Exchange rate auto‑updater | ✅ | Real‑time KD exchange rates. |

---

## Domain 7: New Enterprise Features (IDs 316–350)

| ID | Feature | Description |
|----|---------|-------------|
| 316 | Batch intake buffer | Scan‑to‑bucket with exceptions tab; async commit; Web Worker validation. |
| 317 | PITR restore slider | Time‑travel recovery for specific collections (products, customers, prices). |
| 318 | Blind cycle count toggle | Zero‑visibility counting for audit integrity; manager sees discrepancy only. |
| 319 | API circuit breaker panel | Per‑API trip switch (WhatsApp, KNET, GSMA); auto‑trip after 3 failures. |
| 320 | Pro‑forma quote mode | B2B quote → invoice flow; quote PDF with expiry date. |
| 321 | Store opening checklist | Digital checklist (lights, cash float, printer) before first sale. |
| 322 | Customer wishlist / back in stock alert | Customer requests notification when item returns in stock. |
| 323 | Technician certification expiry tracker | Alerts manager when Apple/GSX certification expires. |
| 324 | Inter‑store loan (temporary) | Loan with return date; auto‑reminder; separate from permanent transfer. |
| 325 | POS screen auto‑lock after inactivity | Idle timeout (configurable) with PIN resume. |
| 326 | Batch job manager UI | Global drawer (Ctrl+J) to track async jobs (exports, imports, label printing). |
| 327 | ZPL print engine (raw pass‑through) | Direct‑to‑printer ZPL commands; 10x faster than PDF. |
| 328 | Virtual scrolling for all large tables | react‑window for product list, repair history, audit log. |
| 329 | Conflict resolution UI (offline sync) | When offline sale conflicts with online, manager decides: cancel or backorder. |
| 330 | Manager PIN override | 4‑digit PIN required for void, refund >threshold, no‑sale drawer open. |
| 331 | Fast‑switch user PIN overlay | Change active cashier without full logout; 4‑digit PIN. |
| 332 | Carrier commission clawback ledger | Track SIM plan commissions; auto‑deduct if customer cancels early. |
| 333 | RMA to vendor flow (supplier return) | Defective parts return; track credit note; separate from customer returns. |
| 334 | API kill switch (global) | Emergency disable all external APIs; system switches to manual mode. |
| 335 | Session invalidation by branch | Force logout all users in a specific store (security breach response). |
| 336 | Post‑scan reconciliation UI | After bulk scan, show expected vs scanned; highlight missing units. |
| 337 | IMEI range auto‑generation | Enter first and last IMEI; system creates all in‑between. |
| 338 | Batch label spooler | Send 100+ ZPL label commands to printer in one job. |
| 339 | Asynchronous export with notification | Export large data (e.g., 50k invoices) in background; notify via WhatsApp when ready. |
| 340 | Database self‑heal dashboard | Nightly integrity check; find orphaned records; one‑click repair. |
| 341 | Three‑tier backup strategy UI | Manage hot (real‑time), warm (daily regional), cold (immutable WORM) backups. |
| 342 | Read‑replica routing | Cockpit queries automatically use read replica to avoid POS lag. |
| 343 | Request coalescing | Batch identical API requests (e.g., 50 terminals asking for exchange rate → 1 call). |
| 344 | Web Worker IMEI validation | Offload IMEI regex and duplicate checks to background thread. |
| 345 | IndexedDB product cache | Store product catalog locally; only sync delta changes. |
| 346 | Bulk SKU generation | Auto‑create SKUs for a range of IMEIs (e.g., `IP15PM-{IMEI_last4}`). |
| 347 | Customer account freeze toggle | Temporarily block a customer from making purchases (fraud investigation). |
| 348 | Repair part substitution log | Record when technician uses different part than quoted; requires manager approval. |
| 349 | Cash drawer soft count | Mid‑shift cash estimate without closing drawer; logs expected range. |
| 350 | Supplier minimum order quantity (MOQ) alert | Warn during PO creation if quantity below supplier MOQ. |

---

## Summary Totals

| Domain | ID Range | Count |
|--------|----------|-------|
| POS & Unified Sales Terminal | 1–60 | 60 |
| Deep‑Tech Repair Hub | 61–120 | 60 |
| Inventory & Supply Chain | 121–180 | 60 |
| Governance, Security & HR | 181–240 + extras | 75 |
| Omnichannel, CRM & IoT | 241–300 + extras | 62 |
| Extended Features | 301–315 | 15 |
| New Enterprise Features | 316–350 | 35 |

**Grand Total: 367 features**

---

*End of Document*