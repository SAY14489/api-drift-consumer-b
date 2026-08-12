// Code that accesses schema fields that will change

interface Product {
  id: string;
  title: string;  // This field gets renamed to 'name' in 2026-04
  price: string;  // This becomes an object in 2026-04
}

// This code is not a call site but references fields that will break
export function displayProduct(product: Product) {
  console.log(`${product.title}: $${product.price}`);
}

// For M3, we're focused on call-site detection, not type analysis
// But this shows the fixture has realistic schema-aware code
export async function fetchAndDisplay(productId: string) {
  // This is a call site - should be CONFIRMED
  const response = await fetch(`https://api.mock-commerce.test/2026-01/products/${productId}`);
  const product = await response.json() as Product;

  // Field access - out of scope for M3, but realistic
  return product.title;
}
