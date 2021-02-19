---
banner:
  name: 'EasyYapi'
  desc: 'For yapi Not only for yapi'
  btns:
    - { name: 'Start', href: './documents/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/tangcent/easy-yapi' }
  caption: '当前版本: v2.1.4'
features:
  - { name: '多语言', desc: 'Java/Kotlin/Scala' }
  - { name: '多框架', desc: 'Spring MVC/Spring boot/Spring WebFlux' }
  - { name: '多渠道', desc: 'Postman/Markdown/Yapi' }
  - { name: '丰富的扩展性', desc: '支持多种配置与扩展,满足不同框架与代码规范' }
  - { name: '调试利器', desc: '一个小巧的内置类postman工具' }

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