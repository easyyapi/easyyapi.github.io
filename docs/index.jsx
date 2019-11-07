---
banner:
  name: 'Simplifies API Development'
  desc: 'Parsing based on javadoc&KDoc'
  btns:
    - { name: 'Start', href: './documents/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/tangcent/easy-yapi' }
  caption: 'current version: v1.2.1'
features:
  - { name: 'Several Sources', desc: 'Java/Kotlin' }
  - { name: 'Several Output', desc: 'Postman/Markdown/Yapi' }

footer:
  copyRight:
    name: 'tangcent'
    href: 'http://www.itangcent.com/'
  links:
    Git仓库:
      - { name: 'Github', href: 'https://github.com/tangcent/easy-yapi' }
      - { name: 'Github Issue', href: 'https://github.com/tangcent/easy-yapi/issues' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />