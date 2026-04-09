from playwright.sync_api import sync_playwright
import os
import shutil
import time

def clear_videos(directory):
    if os.path.exists(directory):
        shutil.rmtree(directory)
    os.makedirs(directory)

def run_cuj(page):
    page.goto("http://localhost:5173")
    page.wait_for_timeout(1000)

    # Take screenshot of POS Checkout
    page.screenshot(path="/home/jules/verification/screenshots/pos.png")
    page.wait_for_timeout(1000)

    # Navigate to Repair
    page.get_by_role("link", name="Repair").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/repair.png")
    page.wait_for_timeout(1000)

    # Navigate to Inventory
    page.get_by_role("link", name="Inventory").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/inventory.png")
    page.wait_for_timeout(1000)

    # Navigate to Governance
    page.get_by_role("link", name="Governance").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/governance.png")
    page.wait_for_timeout(1000)

    # Navigate to CRM
    page.get_by_role("link", name="CRM").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/crm.png")
    page.wait_for_timeout(1000)

    # Navigate to Health
    page.get_by_role("link", name="Health").click()
    page.wait_for_timeout(1000)
    page.screenshot(path="/home/jules/verification/screenshots/health.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    video_dir = "/home/jules/verification/videos"
    clear_videos(video_dir)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir=video_dir,
            viewport={'width': 1280, 'height': 800}
        )
        page = context.new_page()
        try:
            run_cuj(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            context.close()
            browser.close()

    # Rename the video file to something predictable
    for filename in os.listdir(video_dir):
        if filename.endswith(".webm"):
            old_path = os.path.join(video_dir, filename)
            new_path = os.path.join(video_dir, "navigation_cuj.webm")
            os.rename(old_path, new_path)
            print(f"Video saved as {new_path}")
            break
