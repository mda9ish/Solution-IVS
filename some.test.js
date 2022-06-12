global.TextEncoder = require("util").TextEncoder; 
global.TextDecoder = require("util").TextDecoder; 
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
let dom
let container
const html = fs.readFileSync(path.resolve(__dirname, './video-sample.html'), 'utf8');
describe('index.html', () => {
  beforeEach(() => {
    dom = new jsdom.JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })
  

  it('Renders all element properly including video tag', () => {
    expect(container.querySelector('.main')).not.toBeNull()
    expect(container.querySelector('.video')).not.toBeNull()
    expect(container.querySelector('#videomain')).not.toBeNull()
    expect(container.querySelector('.play')).not.toBeNull()
    expect(container.querySelector('.video_controls')).not.toBeNull()
    expect(container.querySelector('.play2')).not.toBeNull()
    expect(container.querySelector('.fa-play')).not.toBeNull()
    expect(container.querySelector('.seekbar')).not.toBeNull()
    
  })

  it('Red dot on seekbaar', () => {
    expect(container.querySelector('#dot')).not.toBeNull()
  })

})