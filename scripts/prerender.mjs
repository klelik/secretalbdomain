import { readFile, writeFile, rm } from 'node:fs/promises'
import { render } from '../.prerender/entry-server.js'

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const content = await render()
if (!content.includes('secretalbania.al') || !content.includes('<h1')) {
  throw new Error('Prerender failed: homepage content is missing')
}
const marker = '<div id="app"></div>'
if (!html.includes(marker)) throw new Error('Missing app container in built HTML')
await writeFile(
  new URL('../dist/index.html', import.meta.url),
  html.replace(marker, `<div id="app">${content}</div>`),
)
await rm(new URL('../.prerender/', import.meta.url), { recursive: true, force: true })
console.log('Homepage prerendered: complete content is available without JavaScript.')
