#!/bin/bash

mkdir -p public/images/products

# Business Cards
wget -O public/images/products/business-cards.jpg "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/premium-business-cards.jpg "https://images.unsplash.com/photo-1571867424488-4565932edb41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

# Postcards
wget -O public/images/products/postcards.jpg "https://images.unsplash.com/photo-1530989109-7aa8e4318cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/premium-postcards.jpg "https://images.unsplash.com/photo-1622645636770-11fbf0611463?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

# Stationery
wget -O public/images/products/bill-books.jpg "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/notebooks.jpg "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/notecards.jpg "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/letterheads.jpg "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

# Marketing Materials
wget -O public/images/products/brochures.jpg "https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/flyers.jpg "https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/stickers.jpg "https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

# Labels and Stickers
wget -O public/images/products/packaging-labels.jpg "https://images.unsplash.com/photo-1585559604830-91a5a6e28178?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/custom-stickers.jpg "https://images.unsplash.com/photo-1535891169584-75bcaf12e964?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/large-format-stickers.jpg "https://images.unsplash.com/photo-1626118788936-3e8c5b2a3f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
wget -O public/images/products/barcode-labels.jpg "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"

echo "All product images downloaded successfully!" 