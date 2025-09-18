/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENROLL_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


