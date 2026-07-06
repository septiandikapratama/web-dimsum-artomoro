export function toWhatsAppHref(localPhone: string, message?: string) {
  const digits = localPhone.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${international}${query}`;
}
