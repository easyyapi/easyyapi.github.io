**兼容旧版本yapi/定制化yapi**

对于旧版本yapi或定制化yapi等`token`不可用的情况，可按以下步骤改为配置`projectId`

1. 开启`loginMode`: 勾选<kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Yapi</kbd> > <kbd>loginMode</kbd> , 参见:[IDEA配置](/setting/ide-setting.html)

2. 在<kbd>Preferences(Settings)</kbd> > <kbd>Other Settings</kbd> > <kbd>EasyApi</kbd> > <kbd>Built-in config</kbd> 中配置鉴权逻辑:

    - 如登录接口可用，则可以尝试[配置](/setting/local-file-config.html)如下:
    
    ``````
    yapi.export.before=groovy:```
        httpClient.request().url("http://127.0.0.1:3000/api/user/login")
                    .method("POST")
                    .contentType("application/json")
                    .body(["email":"xxx@xxx.com","password":"*******"])
                    .call();
    ```
    ``````

    - 对于某些sso登录的，可以尝试类似如下[配置](/setting/local-file-config.html):

    ``````
    yapi.export.before=groovy:```
        httpClient.request().url("https://sso.xxx.com/login/")
                    .method("POST")
                    .contentType("application/json")
                    .body(["name":"xxx","pswd":"xxxx"])
                    .call();
        //如果发生了域名转换，也进行cookie转换
        def cookieStore=httpClient.cookieStore()
        for(cookie in cookieStore.cookies()){
            logger.info(cookie.toString())
            if(cookie.getName()=="sso"){//取需要转换到yapi域名的cookie
                def sso_cookie = cookieStore.newCookie()
                sso_cookie.setName("sso")
                sso_cookie.setValue(cookie.getValue())
                sso_cookie.setDomain("yapi.xxx.com")//这里从sso.xxx.com切换到了yapi.xxx.com
                sso_cookie.setPath("/")
                sso_cookie.setExpiryDate(new Date().time+94608000000)
                cookieStore.addCookie(sso_cookie)
            }
        }
        httpClient.request().url("https://yapi.xxx.com/api/user/login")
                    .method("POST")
                    .contentType("application/json; charset=utf-8")
                    .body([])
                    .call();
    ```
    ``````

    - 对于无法自动登录的，可以尝试直接[配置](/setting/local-file-config.html)`cookie`:

    ``````
    yapi.export.before=groovy:```
    def cookieStore=httpClient.cookieStore()

    def yapi_uid_cookie = cookieStore.newCookie()
    yapi_uid_cookie.setName("_yapi_uid")
    yapi_uid_cookie.setValue("11")
    yapi_uid_cookie.setDomain("yapi.xxx.com")
    yapi_uid_cookie.setPath("/")
    yapi_uid_cookie.setExpiryDate(new Date().time+94608000000)
    cookieStore.addCookie(_yapi_uid_cookie)

    def yapi_token_cookie = cookieStore.newCookie()
    yapi_token_cookie.setName("_yapi_token")
    yapi_token_cookie.setValue("eyJhbGciOiJIUzI2NiItInR5cCI5IkpXVCJ9.eyJ1aWQiOlExLCJpYXQaOjE2MTM3NTE4ODgsInV4cCI6MTYxNDI1NjY4OH0.QrlwD8yFhB8KnO7-_tZ0eCUgXWzFp6PxEeDy3-EwW_Y")
    yapi_token_cookie.setDomain("yapi.xxx.com")
    yapi_token_cookie.setPath("/")
    yapi_token_cookie.setExpiryDate(new Date().time+94608000000)
    cookieStore.addCookie(_yapi_token_cookie)

    ```
    ``````
