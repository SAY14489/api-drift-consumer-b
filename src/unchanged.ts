// Calls to endpoints that are NOT affected by version transitions
// These should NOT be flagged as impacted

import axios from 'axios';

const API_BASE = 'https://api.mock-commerce.test/2026-01';

// GET /products/{id} exists in all versions - should NOT be flagged
export async function getProductById(id: string) {
  return axios.get(`${API_BASE}/products/${id}`);
}

// Internal API, not mock-commerce - should NOT be flagged
export async function getInternalData() {
  return axios.get('https://internal-api.example.com/data');
}

// Completely different API - should NOT be flagged
export async function fetchFromShopify() {
  return axios.get('https://shopify.com/api/products');
}
