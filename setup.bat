@echo off
TITLE BIRD - Auto Configuration

echo =======================================================
echo          BIRD Personal Brand | Setup Wizard
echo =======================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is NOT installed or not in your PATH.
    echo.
    echo Please install Node.js (v18+) to run this project.
    echo Opening download page...
    start https://nodejs.org/en/download/
    pause
    exit
) else (
    echo [OK] Node.js detected.
)

:: Check for node_modules
if exist "node_modules\" (
    echo [INFO] Dependencies already installed.
) else (
    echo [INFO] Installing dependencies... This may take a minute.
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit
    )
)

echo.
echo [SUCCESS] System is ready for takeoff.
echo.
echo Launching development server...
echo Access the site at: http://localhost:3000
echo.

call npm run dev
pause
