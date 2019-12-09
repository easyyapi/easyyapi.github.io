---
banner:
  name: 'EasyYapi'
  desc: '优雅的文档来自优雅的注释'
  btns:
    - { name: 'Start', href: './documents/index.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/tangcent/easy-yapi' }
  caption: '当前版本: v1.4.1'
features:
  - { name: '多语言', desc: 'Java/Kotlin' }
  - { name: '多框架', desc: 'Spring MVC/Spring boot/Spring WebFlux' }
  - { name: '多渠道', desc: 'Postman/Markdown/Yapi' }
  - { name: '丰富的扩展性', desc: '支持多种配置与扩展,满足不同框架与代码规范' }
  - { name: '调试利器', desc: '无需导出,直接请求' }

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