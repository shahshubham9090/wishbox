import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A relative base keeps assets working on both a custom domain and GitHub Pages.
export default defineConfig({ base: './', plugins: [react()] })
