@echo off
echo Clearing Next.js webpack cache...
rmdir /s /q ".next\cache\webpack" 2>nul
rmdir /s /q ".next\cache\swc" 2>nul
rmdir /s /q ".next\server" 2>nul
rmdir /s /q ".next\static\chunks" 2>nul
echo Done. Now run: bun run dev
