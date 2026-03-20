#!/bin/bash
# VIBO IT CONSULTING - FTP Deploy Script
# Deploys the Next.js static export to the FTP server

set -e

echo "=== Building Next.js static export ==="
npm run build

echo ""
echo "=== Deploying to FTP ==="
echo "Host: $FTP_HOST"
echo "Webroot: $FTP_WEBROOT"

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_HOST" -e "
  set ssl:verify-certificate no;
  mirror --reverse --verbose --parallel=5 out/ /;
  quit
"

echo ""
echo "=== Deployment complete ==="
echo "Site live at: https://aidev.be"
