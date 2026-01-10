import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração simplificada para garantir o build do Storybook e AWS
export default defineConfig({
  plugins: [react()],
});