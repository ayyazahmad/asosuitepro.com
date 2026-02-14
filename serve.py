#!/usr/bin/env python3
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Set the working directory to the script's location
os.chdir(os.path.dirname(os.path.abspath(__file__)))
print(f"Serving from: {os.getcwd()}")
print(f"Files: {os.listdir('.')[:5]}")

# Create and run the server
handler = SimpleHTTPRequestHandler
httpd = HTTPServer(("127.0.0.1", 8080), handler)
print("Server running on http://127.0.0.1:8080")
print("Press Ctrl+C to stop")

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped")
    sys.exit(0)
