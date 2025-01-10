// List of reliable CORS proxies
const PROXY_SERVICES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://api.codetabs.com/v1/proxy?quest='
];

let currentProxyIndex = 0;

export function getNextProxy(): string {
  const proxy = PROXY_SERVICES[currentProxyIndex];
  currentProxyIndex = (currentProxyIndex + 1) % PROXY_SERVICES.length;
  return proxy;
}