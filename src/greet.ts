export interface GreetOptions {
  name: string;
  loud?: boolean;
}

/**
 * Returns a greeting string.
 * A trivial exported function useful for verifying a preview package installs correctly.
 */
export function greet({ name, loud = false }: GreetOptions): string {
  const message = `Hello, ${name}!`;
  return loud ? message.toUpperCase() : message;
}
