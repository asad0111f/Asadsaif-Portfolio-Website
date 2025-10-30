/// <reference types="vite/client" />

// Optional: strongly type the known env vars without renaming them.
interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string
  readonly VITE_GOOGLE_MAPS_API_KEY?: string
  readonly VITE_GOOGLE_PLACE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

