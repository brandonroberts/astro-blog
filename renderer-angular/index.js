export default {
  name: '@astrojs/renderer-angular',
  server: './server.js',
  external: [
    '@nguniversal/common/engine',
    '@angular/platform-server',
    '@angular/animations',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    'rxjs',
    'zone.js'
  ],
};