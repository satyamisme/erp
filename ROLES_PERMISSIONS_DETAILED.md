# ROLES_PERMISSIONS_DETAILED.md
## Lakki Terminal OS – Feature-Level Permissions (IDs 1–350)

> **Format:** Each feature ID or logical group lists the specific permissions for each role.  
> **Roles:** Super Admin (SA), Store Manager (MGR), Cashier (CSH), Technician (TECH), Inventory Staff (INV), Security Auditor (AUD).  
> **Last updated:** April 2026 (covers all 367 features).

---

## Domain 1: POS & Unified Sales Terminal (IDs 1–60)

### Product Grid & Search (IDs 1, 3, 4)
- **SA, MGR, CSH, TECH, INV, AUD:** View product grid and search.
- **TECH, INV, AUD:** Read-only; cannot add to cart.

### IMEI Validation & Duplicate Check (IDs 5, 6)
- **SA, MGR, CSH:** Real-time validation and duplicate warning during sale.
- **TECH:** During repair intake only.
- **INV:** During inventory receiving.
- **AUD:** View logs of IMEI checks.

### Product Bundling (ID 7)
- **SA, MGR, CSH:** Create and sell bundles.
- **TECH, INV, AUD:** View bundle components only.

### Serial Number Tracking (ID 8)
- **SA, MGR, CSH, INV:** Record serial numbers at sale or receiving.
- **TECH:** Record serials for parts used in repair.
- **AUD:** View serial history.

### Cart Editing (ID 9)
- **SA, MGR, CSH:** Modify cart (quantity, remove). Removal requires reason code.
- **TECH, INV, AUD:** No cart access.

### Customer Lookup (ID 10)
- **SA, MGR, CSH, TECH, INV:** Search customer by phone.
- **AUD:** Read-only view.

### Tax Calculation (ID 11)
- **SA, MGR:** Configure tax rates per store.
- **CSH:** View applied tax.
- **TECH, INV, AUD:** View only.

### Split Payments (ID 12)
- **SA, MGR, CSH:** Use split payment UI.
- **TECH, INV, AUD:** No access.

### Discount Input (ID 13)
- **SA, MGR:** Apply any discount (capped by ID 206).
- **CSH:** Apply discount only within allowed cap (manager override required above cap).
- **TECH, INV, AUD:** No discount input.

### Loyalty Points Redemption (ID 14)
- **SA, MGR, CSH:** Redeem points at POS.
- **TECH, INV, AUD:** View points balance only.

### Receipt Printing (ID 15)
- **SA, MGR, CSH:** Print thermal receipts.
- **TECH:** Print repair job tickets.
- **INV:** Print receiving slips.
- **AUD:** No printing.

### Email Receipt (ID 16)
- **SA, MGR, CSH:** Send email receipt.
- **TECH, INV, AUD:** No.

### Hold & Retrieve Cart (IDs 17, 18)
- **SA, MGR, CSH:** Hold cart and retrieve.
- **TECH, INV, AUD:** No.

### Add Note to Sale (ID 19)
- **SA, MGR, CSH:** Add internal note.
- **TECH, INV, AUD:** No.

### Salesperson Assignment (ID 20)
- **SA, MGR, CSH:** Assign staff to sale for commission.
- **TECH, INV, AUD:** No.

### Exchange Item (ID 21)
- **SA, MGR, CSH:** Process exchange (return + repurchase).
- **TECH, INV, AUD:** No.

### Layaway / Deposit Plan (ID 22)
- **SA, MGR, CSH:** Create layaway, collect deposit.
- **TECH, INV, AUD:** No.

### Gift Card Sale & Redemption (ID 23)
- **SA, MGR, CSH:** Sell and redeem gift cards.
- **TECH, INV, AUD:** No.

### Customer Credit Limit Check (ID 24)
- **SA, MGR, CSH:** View warning if customer exceeds credit.
- **AUD:** View in audit logs.

### Multi‑Currency Cash (ID 25)
- **SA, MGR, CSH:** Accept foreign currency; system converts at store rate.
- **TECH, INV, AUD:** No.

### Rounding Adjustment (ID 26)
- **SA, MGR, CSH:** System applies rounding (e.g., to 5 fils).
- **AUD:** View rounding entries.

### Price Override (ID 27)
- **SA, MGR:** Override price. Requires manager PIN (ID 330).
- **CSH, TECH, INV, AUD:** No override.

### Cost Price Visibility (ID 28)
- **SA, MGR, INV:** View cost price.
- **CSH, TECH, AUD:** Hidden.

### Margin Indicator (ID 29)
- **SA, MGR:** View profit % during sale.
- **CSH, TECH, INV, AUD:** Hidden.

### Low Stock Warning (ID 30)
- **SA, MGR, CSH, INV:** See alert when adding item with stock < reorder point.

### Offline‑First Mode (ID 31)
- **SA, MGR, CSH:** POS works offline; queue stored locally.
- **TECH, INV:** Offline mode for repair intake and inventory receiving (limited).
- **AUD:** View offline queue logs.

### Auto‑Sync Engine (ID 32)
- **SA, MGR, CSH, TECH, INV:** Background sync when online.
- **AUD:** Monitor sync status.

### Offline Sale Storage (ID 33)
- **SA, MGR, CSH:** Up to 500 transactions stored offline.
- **AUD:** View stored offline transactions.

### Voucher / Coupon Validation (ID 34)
- **SA, MGR, CSH:** Scan or enter code; system validates.
- **TECH, INV, AUD:** No.

### BOGO & Time‑Based Sale (IDs 35, 36)
- **SA, MGR:** Configure rules.
- **CSH:** Rules apply automatically.
- **TECH, INV, AUD:** No configuration.

### Customer Group Discount (ID 37)
- **SA, MGR:** Define group discounts.
- **CSH:** Auto-applied based on customer tier.

### Minimum Cart Value Discount (ID 38)
- **SA, MGR, CSH:** Rules applied automatically.

### Free Shipping Threshold (ID 39)
- **SA, MGR:** Configure threshold.
- **CSH:** See shipping cost calculation.

### Refund / Return (ID 40)
- **SA, MGR:** Process refund of any amount (manager PIN required above threshold).
- **CSH:** Process refund only below threshold; above requires manager PIN (ID 330).
- **TECH, INV, AUD:** No refunds.

### Return to Original Payment (ID 41)
- **SA, MGR, CSH:** Refund to same card/cash.

### Store Credit Refund (ID 42)
- **SA, MGR, CSH:** Issue store credit instead of cash.

### No‑Receipt Return (ID 43)
- **SA, MGR:** Process return without receipt (manager approval required).
- **CSH:** Cannot process without manager.

### Return with Original Receipt (ID 44)
- **SA, MGR, CSH:** Auto-populate items from receipt.

### Exchange Price Difference (ID 45)
- **SA, MGR, CSH:** Collect or refund difference.

### Void Transaction (Full) (ID 46)
- **SA, MGR:** Void entire transaction after receipt printed (manager PIN required).
- **CSH:** Void only before receipt printed.

### Void Line Item (ID 47)
- **SA, MGR, CSH:** Void single item; reason code mandatory.

### Re‑print Last Receipt (ID 48)
- **SA, MGR, CSH:** Re-print from Recent Sales.

### Open Cash Drawer (No Sale) (ID 49)
- **SA, MGR:** Open drawer without sale (manager PIN required).
- **CSH:** Not allowed.

### Cash Drawer Count (ID 50)
- **SA, MGR, CSH:** Record opening/closing cash amounts.

### Sales History per Customer (ID 51)
- **SA, MGR, CSH, AUD:** View customer’s past sales.

### Recent Customers List (ID 52)
- **SA, MGR, CSH:** See last 20 customers per terminal.

### Quick Customer Creation (ID 53)
- **SA, MGR, CSH, TECH:** Create customer with minimal fields.

### Customer Edit (ID 54)
- **SA, MGR, CSH:** Edit customer profile; audit log tracks changes.
- **TECH, INV, AUD:** Read-only.

### Merge Duplicate Customers (ID 55)
- **SA, MGR:** One-click merge.
- **CSH, TECH, INV, AUD:** No.

### Customer Blacklist Flag (ID 56)
- **SA, MGR:** Flag customer; warning appears to cashier.
- **CSH:** View warning but cannot remove flag.

### Required Customer for Repair (ID 57)
- **SA, MGR, TECH:** Enforced at repair intake.

### Optional Customer for Sale (ID 58)
- **SA, MGR, CSH:** Guest checkout allowed.

### Customer Birthday Reminder (ID 59)
- **SA, MGR, CSH:** Popup on POS.

### Customer Spend Summary (CLV) (ID 60)
- **SA, MGR, AUD:** View lifetime value.
- **CSH, TECH, INV:** Hidden.

---

## Domain 2: Deep‑Tech Repair Hub (IDs 61–120)

### Repair Intake Form (ID 61)
- **SA, MGR, TECH:** Create repair job.
- **CSH, INV, AUD:** Read-only view.

### Device Catalog (ID 62)
- **SA, MGR, TECH, CSH, INV, AUD:** View devices.

### Visual Damage Mapper (ID 63)
- **SA, MGR, TECH:** Mark damage on diagram.
- **CSH, INV, AUD:** View only.

### Symptom Checklist (ID 64)
- **SA, MGR, TECH:** Select symptoms.

### Repair Priority (ID 65)
- **SA, MGR, TECH:** Set priority (normal/urgent/VIP).

### Estimated Completion Time (ID 66)
- **SA, MGR, TECH:** View calculated estimate.

### Repair Quote Generation (ID 67)
- **SA, MGR, TECH:** Generate PDF quote for customer.

### Quote Approval (ID 68)
- **SA, MGR, TECH:** Capture customer digital signature or WhatsApp approval.

### Repair Status Tracking (ID 69)
- **SA, MGR, TECH, CSH (view only), AUD:** Update and view status.

### Status Update Notifications (ID 70)
- **SA, MGR, TECH:** Trigger WhatsApp/SMS notifications.

### 20‑Point QC Gate (ID 71)
- **SA, MGR, TECH:** Complete checklist. QC fail requires manual confirm before notification.

### QC Failure Reason (ID 72)
- **SA, MGR, TECH:** Enter mandatory reason.

### Rework Workflow (ID 73)
- **SA, MGR, TECH:** Return job to “In Progress” with note.

### WhatsApp Status Bot (ID 74)
- **SA, MGR:** Configure templates.
- **TECH:** Trigger (after QC pass or manager override).

### SMS Fallback (ID 75)
- **SA, MGR:** Configure.
- **TECH:** Auto-fallback if WhatsApp fails.

### Repair History per IMEI (ID 76)
- **SA, MGR, TECH, AUD:** View all past repairs for a device.

### Warranty Tracking (ID 77)
- **SA, MGR, TECH:** View store warranty on repairs.

### Warranty Claim (ID 78)
- **SA, MGR, TECH:** Auto-create repair from past sale.

### Part Replacement Log (ID 79)
- **SA, MGR, TECH:** Log which parts used (serial numbers).

### Part Deduction from Inventory (ID 80)
- **SA, MGR, INV, TECH:** Auto-reduce stock when part consumed.

### Part Restocking (Cancelled Repair) (ID 81)
- **SA, MGR, INV:** Restock parts when repair cancelled.

### Technician Assignment (ID 82)
- **SA, MGR:** Assign tech manually or auto-assign rule.

### Technician Queue View (ID 83)
- **SA, MGR, TECH:** See bench queue.

### Technician Performance Metrics (ID 84)
- **SA, MGR, AUD:** View avg repair time, first-time fix rate.
- **TECH:** View own metrics only.

### Labour Commission Calculation (ID 85)
- **SA, MGR:** Configure commission %.
- **TECH:** View own commission.

### Repair Note (Internal) (ID 86)
- **SA, MGR, TECH:** Add internal notes.
- **AUD:** Read-only.

### Repair Note (Customer Visible) (ID 87)
- **SA, MGR, TECH:** Add notes visible in self-service portal.

### Photo Upload (Before/After) (ID 88)
- **SA, MGR, TECH:** Upload up to 10 photos.

### Customer Device Gallery (ID 89)
- **SA, MGR, TECH, AUD:** View all photos for a device.

### Repair Deposit Collection (ID 90)
- **SA, MGR, CSH, TECH:** Collect deposit at intake.

### Balance Due on Collection (ID 91)
- **SA, MGR, CSH:** Collect remaining amount.

### Repair Invoice (ID 92)
- **SA, MGR, CSH, TECH:** View itemised invoice.

### Repair Payment Split (ID 93)
- **SA, MGR, CSH:** Split deposit and balance.

### Repair Cancellation Flow (ID 94)
- **SA, MGR:** Cancel repair; restock parts; refund deposit (manager PIN required).

### No‑Show Follow‑Up (ID 95)
- **SA, MGR:** Auto-reminder after 7 days uncollected.

### Job Expiry Alert (ID 96)
- **SA, MGR:** Notify manager after 30 days uncollected.

### Device Archive (Cold Storage) (ID 97)
- **SA, MGR:** Move old repairs to separate DB.

### Repair Category Manager (ID 98)
- **SA, MGR:** Create custom categories (Display, Audio, Power).

### Status Colour Mapping (ID 99)
- **SA, MGR:** Custom UI colours per status.

### Repair Cost Estimator (Quick Quote) (ID 100)
- **SA, MGR, CSH, TECH:** Generate estimate (no part reservation).

### Technician Login via NFC (ID 101)
- **SA, MGR, TECH:** Tap NFC card to access bench.

### Parts Backorder List (ID 102)
- **SA, MGR, TECH, INV:** View backordered parts; alert when arrives.

### IMEI Blacklist Check (GSMA) (ID 103)
- **SA, MGR, TECH, INV:** Check during intake. Manual override if API down.

### Internal Spare Parts Request (ID 104)
- **TECH:** Create request.
- **SA, MGR:** Approve request (if cost > threshold).

### Labour Commission Engine (ID 105)
- **SA, MGR:** Configure; TECH views own.

### Service Area Manager (ID 106)
- **SA, MGR:** Group repairs by branch/department.

### Job Priority Toggle (ID 107)
- **SA, MGR, TECH:** Mark VIP or Urgent.

### Post‑Repair Survey (ID 108)
- **SA, MGR:** Configure auto-send.

### Digital Repair Agreement (ID 109)
- **SA, MGR, TECH:** Customer signs T&Cs.

### Device Archive (ID 110)
- **SA, MGR:** Move old data.

### Repair Category Manager (ID 111)
- **SA, MGR:** Manage categories.

### Status Colour Mapping (ID 112)
- **SA, MGR:** Map colours.

### Auto‑Assign Rules (ID 113)
- **SA, MGR:** Define rules (e.g., Samsung to Tech A).

### Customer Device Gallery (ID 114)
- **SA, MGR, TECH, AUD:** View cloud photos.

### Repair Cost Estimator (ID 115)
- **SA, MGR, CSH, TECH:** Quick quote.

### Job Expiry Alert (ID 116)
- **SA, MGR:** Receive alert.

### Bench Queue TV (ID 117)
- **SA, MGR, TECH, CSH:** View dashboard.

### Component Serial Tracking (ID 118)
- **SA, MGR, TECH:** Log serial of new screen.

### Repair Cancellation Flow (ID 119)
- **SA, MGR:** Cancel and restock.

### Job Card Barcode (ID 120)
- **SA, MGR, TECH, CSH:** Scan to open job.

---

## Domain 3: Inventory & Supply Chain (IDs 121–180 + New 316–350 related)

### Multi‑Store Matrix View (ID 121)
- **SA, MGR, INV:** Full edit.
- **CSH, TECH, AUD:** Read-only.

### Inter‑Store Transfer (IDs 122–124)
- **SA, MGR, INV:** Request, approve, receive.

### Low Stock Dashboard (ID 125)
- **SA, MGR, INV, CSH (read-only):** View alerts.

### Purchase Order (PO) Creation (ID 126)
- **SA, MGR, INV:** Create PO.

### PO Approval Workflow (ID 127)
- **SA, MGR:** Approve PO > threshold.

### Landed Cost Engine (ID 128)
- **SA, MGR, INV:** Add customs, shipping, insurance.

### PO Receipt (ID 129)
- **SA, MGR, INV:** Receive items.

### Partial PO Receipt (ID 130)
- **SA, MGR, INV:** Receive in batches.

### Supplier Management (ID 131)
- **SA, MGR, INV:** Manage supplier details.

### Supplier Credit Tracking (ID 132)
- **SA, MGR, INV, AUD:** View outstanding balance.

### Supplier Return (RMA to Vendor) (ID 133)
- **SA, MGR, INV:** Process defective return; track credit note.

### Stock Adjustment (Manual) (ID 134)
- **SA, MGR, INV:** Increase/decrease with reason code.

### Stock Take (Cycle Count) (ID 135)
- **SA, MGR, INV:** Perform count.

### Stock Adjustment Approval (ID 136)
- **SA, MGR:** Approve negative adjustments.

### Stock Transfer (Bulk) (ID 137)
- **SA, MGR, INV:** Move multiple SKUs.

### Stock Valuation (FIFO, Average, by Store) (IDs 138–140)
- **SA, MGR, INV, AUD:** View reports.

### FIFO Reporting (ID 141)
- **SA, MGR, INV, AUD:** COGS calculation.

### Reorder Point Alert (ID 142)
- **SA, MGR, INV:** Auto-suggest PO.

### Auto‑Replenish (ID 143)
- **SA, MGR:** Configure auto-PO.

### Supplier Lead Time Tracking (ID 144)
- **SA, MGR, INV:** View days from PO to receipt.

### Batch Expiry Tracking (ID 145)
- **SA, MGR, INV:** Track glues, chemicals.

### Serial / IMEI Tracking (ID 146)
- **SA, MGR, INV, TECH, CSH:** View history.

### Bulk IMEI Registration (CSV) (ID 147)
- **SA, MGR, INV:** Upload CSV.

### IMEI Range Auto‑Generation (ID 148)
- **SA, MGR, INV:** Enter first and last; system fills between.

### Component Serial Tracking in Repair (ID 149)
- **SA, MGR, TECH, INV:** Log serials.

### Defective Return Pool (ID 150)
- **SA, MGR, INV:** Move faulty parts to virtual store.

### Supplier Bank Details (ID 151)
- **SA, MGR, INV:** Store for wire transfers.

### In‑Transit Insurance Tag (ID 152)
- **SA, MGR, INV:** Mark high-value transfers.

### Transfer Manifest QR (ID 153)
- **SA, MGR, INV, driver role:** Scan to mark arrived.

### Inventory Snapshot (Export) (ID 154)
- **SA, MGR, INV, AUD:** Export stock levels.

### Unit of Measure (UOM) (ID 155)
- **SA, MGR, INV:** Define pieces, boxes, meters.

### Warehouse Bin Location (ID 156)
- **SA, MGR, INV:** Assign shelf, rack, bin.

### Inventory Pick List (ID 157)
- **SA, MGR, INV:** Generate QR pick list.

### Inventory Cycle Count Schedule (ID 158)
- **SA, MGR:** Schedule weekly/monthly counts.

### Blind Cycle Count (Zero Visibility) (ID 159)
- **INV, TECH:** Perform count (cannot see expected quantity).
- **SA, MGR:** View discrepancy report after count.

### Double‑Blind Count (Two Staff) (ID 160)
- **INV (two staff):** Count separately.
- **SA, MGR:** System compares; shows only discrepancies.

### Post‑Scan Reconciliation (ID 161)
- **SA, MGR, INV:** After bulk scan, view expected vs scanned.

### Batch Intake Buffer (Scan‑to‑Bucket) (ID 162)
- **INV:** Scan, validate, post batches.
- **MGR:** View exceptions but cannot post (unless granted override).

### Exceptions Tab (ID 163)
- **INV, MGR:** Handle invalid scans.

### Batch Label Printing (ZPL) (ID 164)
- **INV, MGR:** Print labels directly (raw ZPL).

### Supplier MOQ Alert (ID 165)
- **SA, MGR, INV:** View warning when PO quantity below minimum.

### Inter‑Store Loan (Temporary) (ID 166)
- **INV, MGR:** Create loan with return date; auto-reminder.

### Supplier Order Reminder (ID 167)
- **SA, MGR, INV:** Auto-email for late POs.

### Automatic Stock Reconciliation (ID 168)
- **SA, MGR, INV:** System suggests fixes for counts.

### Stock Valuation by Warehouse (ID 169)
- **SA, MGR, INV, AUD:** Per-location asset value.

### Bulk Transfer Approval (ID 170)
- **SA, MGR, INV:** Approve 50+ items one click.

*(IDs 171–180 as per original matrix, permissions similar to above inventory range)*

---

## Domain 4: Governance, Security & HR (IDs 181–240 + New)

### Master Audit Trail (ID 181)
- **SA, MGR, AUD:** View append-only logs.
- **CSH, TECH, INV:** No access.

### Audit Log Viewer (ID 182)
- **SA, MGR, AUD:** Filter by user, action, date.

### Audit Log Export (CSV) (ID 183)
- **SA, AUD:** Export.

### Anomaly Detection Rules (ID 184)
- **SA, MGR:** Configure rules (e.g., sale <1 KD).
- **AUD:** View rules.

### Feature Toggle Board (ID 185)
- **SA:** Enable/disable any ID 1–350 per role.
- **MGR, CSH, TECH, INV, AUD:** No access.

### IP Whitelisting (ID 186)
- **SA:** Restrict roles to IP ranges.

### Geofence Login (ID 187)
- **SA, MGR:** Configure store GPS radius.

### Login Attempt Lockout (ID 188)
- **SA, MGR, AUD:** View lockout events.

### Password Expiry Policy (ID 189)
- **SA:** Enforce expiry.

### Z‑Report PDF (ID 190)
- **SA, MGR:** Generate daily summary.
- **AUD:** Read-only.

### Mid‑Shift X‑Report (ID 191)
- **SA, MGR:** Snapshot without closing.

### Profit & Loss Dashboard (ID 192)
- **SA, MGR, AUD:** View gross margin.

### Expense Tracker (ID 193)
- **SA, MGR:** Log rent, utilities, etc.

### VAT/Tax Export (ID 194)
- **SA, MGR:** Export CSV for filing.

### Role Template Creator (ID 195)
- **SA:** Create presets.

### Staff Permission Override (ID 196)
- **SA:** Give one user extra power.

### Payroll Engine (ID 197)
- **SA, MGR:** Calculate base + commission – penalties.

### Employee Performance Score (ID 198)
- **SA, MGR, AUD:** View metrics.

### Store Profile Manager (ID 199)
- **SA, MGR:** Manage logos, addresses.

### Database Health Monitor (ID 200)
- **SA, MGR, AUD:** View latency, uptime.

### Auto‑Backups (ID 201)
- **SA:** Configure backups.
- **AUD:** View backup status.

### Remote Session Logout (ID 202)
- **SA:** Kill any session.

### Multi‑Store Comparison (ID 203)
- **SA, MGR, AUD:** Benchmark stores.

### Aged Debt Report (ID 204)
- **SA, MGR, AUD:** Identify credit customers.

### Fraud Detection Logic (ID 205)
- **SA, MGR, AUD:** Flag same IMEI sold twice.

### Discount Capping (ID 206)
- **SA, MGR:** Set hard cap.

### Expense Receipt Upload (ID 207)
- **SA, MGR:** Attach photos.

### User Activity Timeline (ID 208)
- **SA, MGR, AUD:** Visual feed.

### Security Policy Enforcer (ID 209)
- **SA:** Enforce password rules.

### Custom Field Builder (ID 210)
- **SA, MGR:** Add extra fields.

### System Event Notifications (ID 211)
- **SA, MGR:** Configure email/SMS alerts.

### Multi‑User Concurrency (ID 212)
- **SA, MGR, TECH, INV:** Handle 5 people editing one job (system feature).

### God‑Mode Parity (ID 213)
- **SA:** Assign co-owner.

### Regional Scoping (ID 214)
- **SA, MGR:** Managers see only their shops.

### Audit Log Encryption (ID 215)
- **SA, AUD:** Logs non-editable.

### Staff Feedback Loop (ID 216)
- **SA, MGR, CSH, TECH, INV, AUD:** Submit suggestions.

### Access Logs (ID 217)
- **SA, MGR, AUD:** Track login attempts and IP.

### Global Search Palette (ID 218)
- **SA, MGR, CSH, TECH, INV, AUD:** Ctrl+K to jump to features.

### Dark/Light Mode Theme (ID 219)
- **SA, MGR, CSH, TECH, INV, AUD:** Personal preference.

### Print Layout Builder (ID 220)
- **SA, MGR:** Drag-and-drop receipt customizer.

### Voucher Validation (ID 221)
- **SA, MGR, CSH:** Scan coupons.

### Customer Merging (ID 222)
- **SA, MGR:** Clean duplicates.

### Global Heatmap (ID 223)
- **SA, MGR, AUD:** Map of customer locations.

### Tax Compliance Check (ID 224)
- **SA, MGR:** Auto-check missing tax info.

### User Profile Image (ID 225)
- **SA, MGR, CSH, TECH, INV, AUD:** Upload photo.

### Shift Handover Note (ID 226)
- **SA, MGR, CSH, TECH:** Digital report for next manager.

### Training Mode (Sandbox) (ID 227)
- **SA, MGR:** New hires use sandbox (no real data).

### Feature Adoption Score (ID 228)
- **SA, MGR:** See which staff use which tools.

### Legal Agreement Manager (ID 229)
- **SA:** Version T&Cs.

### Currency Exchange Rate (ID 230)
- **SA:** Auto-update rates.

### GDPR/Privacy Tools (ID 231)
- **SA, MGR:** Export/delete customer data.

### System Health Check (ID 232)
- **SA, MGR, AUD:** One-click check of all APIs.

### Bulk User Invite (CSV) (ID 233)
- **SA:** Onboard 50 staff.

### Department Hierarchy (ID 234)
- **SA, MGR:** Manage sub-teams.

### Maintenance Mode Toggle (ID 235)
- **SA:** Lock app for updates.

### API Key Management (ID 236)
- **SA:** Generate keys for external integrations.

### Payment Terminal Setup (ID 237)
- **SA, MGR:** Configure card machines.

### Webhook Manager (ID 238)
- **SA, MGR:** Manage Shopify/Woo webhooks.

### Report Scheduler (ID 239)
- **SA, MGR:** Schedule Z-report emails.

### Dashboard Widget Customizer (ID 240)
- **SA, MGR, CSH, TECH, INV, AUD:** Pin favourite tools.

### PITR Restore Slider (ID 317)
- **SA:** Execute restore to staging collection.
- **AUD:** Preview only (cannot restore).
- **MGR, CSH, TECH, INV:** No access.

### API Circuit Breaker Panel (ID 319)
- **SA:** Manually trip/reset.
- **AUD:** View status only.
- **MGR, CSH, TECH, INV:** No access.

### Manager PIN Override (ID 330)
- **SA, MGR:** Use 4-digit PIN to approve void/refund.

### Fast‑Switch User PIN Overlay (ID 331)
- **SA, MGR, CSH, TECH:** Change active user without full logout.

### Carrier Commission Clawback (ID 332)
- **SA, MGR:** Configure clawback rules; view deductions.

### API Kill Switch (Global) (ID 334)
- **SA:** Emergency disable all external APIs.

### Session Invalidation by Branch (ID 335)
- **SA:** Force logout all users in a specific store.

### Database Self‑Heal Dashboard (ID 340)
- **SA:** Execute integrity repair.
- **AUD:** View report only.

### Three‑Tier Backup UI (ID 341)
- **SA:** Manage hot/warm/cold backups.
- **AUD:** View status.

### Read‑Replica Routing (ID 342)
- **SA:** Configure.
- **AUD:** View configuration.

### Request Coalescing (ID 343)
- **SA:** Enable (system feature).
- **AUD:** Monitor.

### Web Worker IMEI Validation (ID 344)
- **SA, MGR, INV, TECH:** Background validation (automatic).

### IndexedDB Product Cache (ID 345)
- **SA, MGR:** Configure cache settings.

---

## Domain 5: Omnichannel, CRM & IoT (IDs 241–300 + New)

### BOPIS (ID 241)
- **SA, MGR, INV, CSH:** Fulfill online orders in store.

### Stock Sync with E‑commerce (ID 242)
- **SA, MGR, INV:** Real-time sync.

### Webhook Listeners (ID 243)
- **SA, MGR:** Manage Shopify/Woo webhooks.

### Anomaly Detection (Sales) (ID 244)
- **SA, MGR, AUD:** View flagged sales.

### Customer Queue Display (TV) (ID 245)
- **SA, MGR, TECH, CSH:** View on screen.

### Biometric Login (ID 246)
- **SA, MGR, CSH, TECH, INV, AUD:** Enroll and use.

### Smart Display Screen (ID 247)
- **SA, MGR, TECH, CSH:** Customer monitor via WebSockets.

### SMS Notifications (ID 248)
- **SA, MGR, TECH:** Configure and send.

### Email Marketing Integration (ID 249)
- **SA, MGR:** Connect Mailchimp/Klaviyo.

### Social Media Linkage (ID 250)
- **SA, MGR, CSH:** Attach handles to customer profile.

### WhatsApp API Config (ID 251)
- **SA, MGR:** Configure templates, circuit breaker.

### Customer Tiering (ID 252)
- **SA, MGR:** Define Silver, Gold, VIP thresholds.

### Birthday Coupon Bot (ID 253)
- **SA, MGR:** Configure auto-send.

### Review Solicitor (ID 254)
- **SA, MGR:** Configure SMS link for Google Review.

### Mandoob Tracker (ID 255)
- **SA, MGR, CSH:** Real-time driver location.

### Customer 360 Profile (ID 256)
- **SA, MGR, CSH, TECH, INV, AUD:** View full history.

### Blacklist Manager (ID 257)
- **SA, MGR:** Flag customers.
- **CSH:** View warning.

### Self‑Service Portal (ID 258)
- **SA, MGR:** Configure.
- **CUSTOMER (external):** Check repair status.

### Omnichannel Search (ID 259)
- **SA, MGR, CSH:** Find online orders in POS.

### Click‑to‑Call (ID 260)
- **SA, MGR, CSH:** Integrated dialing.

### Social Media Linkage (ID 261)
- **SA, MGR, CSH:** Attach handles.

### Waitlist Logic (ID 262)
- **SA, MGR, CSH:** Notify when part arrives.

### Pre‑order Management (ID 263)
- **SA, MGR, CSH:** Collect deposits for unreleased phones.

### Family Account Linking (ID 264)
- **SA, MGR, CSH:** Share points across family.

### Geo‑Fencing Alerts (ID 265)
- **SA, MGR:** Notify shop when driver near.

### Integrated Map (ID 266)
- **SA, MGR, CSH:** Show delivery routing.

### Customer CLV (ID 267)
- **SA, MGR, AUD:** Predict long-term profit.

### Chat History Archive (ID 268)
- **SA, MGR, AUD:** Save WhatsApp conversations.

### Store Feedback Screen (ID 269)
- **SA, MGR, CSH:** Tablet at exit.

### Incident Log (ID 270)
- **SA, MGR:** Record complaints or accidents.

### Excel/CSV Export (ID 272)
- **SA, MGR, INV, AUD:** Export any list.

### Staff Messenger (ID 274)
- **SA, MGR, CSH, TECH, INV, AUD:** Internal chat.

### IoT Scale Sync (ID 275)
- **SA, MGR, INV:** Weigh parts.

### RFID Tag Reader (ID 277)
- **SA, MGR, TECH:** Identify devices on bench.

### IoT Printer Status (ID 278)
- **SA, MGR, CSH:** Alert if paper low.

### Cash Drawer Log (ID 279)
- **SA, MGR, AUD:** Record every opening.

### Kiosk Mode (ID 280)
- **SA, MGR:** Configure self-service UI.

### Audio Announcements (ID 281)
- **SA, MGR, TECH:** “Job assigned to Ahmed” over speakers.

### Digital Signage Sync (ID 282)
- **SA, MGR:** Display promos on store TVs.

### Payment Terminal Handshake (ID 283)
- **SA, MGR:** Configure tap-to-POS.

### Door Sensor Log (ID 284)
- **SA, MGR, AUD:** Track foot traffic.

### Inventory Pick‑List QR (ID 285)
- **SA, MGR, INV:** Scan to confirm pick.

### Batch IMEI Registration (ID 286)
- **SA, MGR, INV:** Add 500 serials via CSV.

### Web‑to‑Store Fulfill (ID 287)
- **SA, MGR, INV:** Push orders to nearest shop.

### Automatic Stock Reconciliation (ID 288)
- **SA, MGR, INV:** Suggest fixes.

### Supplier Order Reminder (ID 289)
- **SA, MGR, INV:** Auto-email late POs.

### Duplicate Customer Merge (ID 290)
- **SA, MGR:** One-click cleanup.

### Failed Payment Retry (ID 291)
- **SA, MGR:** System re-queue.

### Auto‑Assign Tech (ID 292)
- **SA, MGR:** Lightest workload logic.

### Executive Summary Email (ID 293)
- **SA, MGR:** Daily digest for owner.

### Product Affinity Analysis (ID 294)
- **SA, MGR, AUD:** “People who bought X also bought Y”.

### Return Rate by SKU (ID 295)
- **SA, MGR, INV, AUD:** Identify bad batches.

### Sales Funnel Analytics (ID 296)
- **SA, MGR, AUD:** View → Cart → Pay tracking.

### Zero‑Stock Impact (ID 297)
- **SA, MGR, AUD:** Report lost sales.

### Privacy Anonymization (ID 298)
- **SA:** Clean data for audit exports.

### Tamper‑Proof Audit (ID 299)
- **SA, AUD:** Append-only log files.

### Global Search Palette (ID 300)
- (Duplicate of 218, same permissions)

### Customer Wishlist / Back in Stock Alert (ID 322)
- **SA, MGR, CSH:** View wishlists; approve alerts.
- **CUSTOMER (external):** Request notification.

### Customer Account Freeze Toggle (ID 347)
- **SA, MGR:** Temporarily block customer purchases.

---

## Domain 6: Extended Features (IDs 301–315)

### Phone Trade‑In / Exchange Flow (ID 301)
- **SA, MGR, CSH:** Grade device, deduct value.

### BNPL / Instalment Payment (ID 302)
- **SA, MGR, CSH:** Use Tamara/Tabby or in-house.

### Two‑Factor Authentication (2FA) (ID 303)
- **SA, MGR, CSH, TECH, INV, AUD:** Enroll and use. Enforced for SA and AUD.

### Apple GSX Integration (ID 304)
- **SA, MGR, TECH:** Order parts, validate warranty.

### Blacklisted Device Check (Incoming) (ID 305)
- **SA, MGR, INV, TECH:** Check against GSMA.

### ESD Safety Checklist (ID 306)
- **TECH:** Complete before repair.
- **SA, MGR, AUD:** View compliance log.

### Email Marketing Integration (ID 307)
- **SA, MGR:** Connect Mailchimp/Klaviyo.

### Customs Duty / HS Tariff Code (ID 308)
- **SA, MGR, INV:** Enter HS code and duty %.

### Customer Consent & Opt‑In Log (ID 309)
- **SA, MGR, CSH:** Capture consent.
- **AUD:** View log.

### Repair Deposit / Partial Payment (ID 310)
- **SA, MGR, CSH, TECH:** Collect deposit at intake.

### Multi‑Language UI (Arabic RTL) (ID 311)
- **SA, MGR, CSH, TECH, INV, AUD:** Switch language in profile.

### Supplier WhatsApp Quick Order (ID 312)
- **SA, MGR, INV:** Send PO via WhatsApp.

### CCTV Integration Hook (ID 313)
- **SA, MGR, AUD:** Link footage to audit events.

### Apple Business Chat / Google Messages (ID 314)
- **SA, MGR:** Configure additional channels.

### Exchange Rate Auto‑Updater (ID 315)
- **SA:** Real‑time KD rates.

---

## Domain 7: New Enterprise Features (IDs 316–350 – detailed above where relevant)

### Summary of Role-Based Access

| Role | Total Accessible IDs (approx) | Key Restrictions |
|------|-------------------------------|------------------|
| **Super Admin** | 367 | None |
| **Store Manager** | ~200 | No feature toggle, no PITR restore, no audit log decryption |
| **Cashier** | ~80 | No price override, no cost price, no blind count discrepancy |
| **Technician** | ~70 | No POS sales, no inventory adjustments, no manager approvals |
| **Inventory Staff** | ~90 | No sales data, no price changes, no customer PII beyond stock |
| **Security Auditor** | ~60 | Read-only on all audit, anomaly, backup, and circuit breaker data |

---

*End of Document*