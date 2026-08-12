import axios from 'axios';

const API_BASE = 'https://api.mock-commerce.test/2026-01';

// Direct axios call - should be CONFIRMED
export async function getProduct(id: string) {
  return axios.get(`${API_BASE}/products/${id}`);
}

// Uses removed /orders endpoint - should be CONFIRMED and flagged
export async function getOrders() {
  return axios.get(`${API_BASE}/orders`);
}

// Complex string building - should be AMBIGUOUS
export async function fetchResource(resource: string, id?: string) {
  let url = API_BASE;
  url = url + '/' + resource;
  if (id) {
    url += '/' + id;
  }
  return axios.get(url);
}

// Used by a function that calls /products - indexer needs to trace through
export function buildProductUrl(id: string): string {
  return `${API_BASE}/products/${id}`;
}

export async function loadProduct(id: string) {
  const url = buildProductUrl(id);
  return axios.get(url);
}
