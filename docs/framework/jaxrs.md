# JAX-RS

EasyYapi supports JAX-RS (Java API for RESTful Web Services) specification, including Jersey and Quarkus implementations.

## Supported Annotations

### Path Annotations

- `@Path` — Set resource path

### HTTP Method Annotations

- `@GET`
- `@POST`
- `@PUT`
- `@DELETE`
- `@PATCH`
- `@HEAD`
- `@OPTIONS`

### Parameter Annotations

- `@PathParam` — Path parameter
- `@QueryParam` — Query parameter
- `@FormParam` — Form parameter
- `@HeaderParam` — Header parameter
- `@CookieParam` — Cookie parameter
- `@BeanParam` — Bean parameter

### Consume/Produce Annotations

- `@Consumes` — Specify consumed media type
- `@Produces` — Specify produced media type

## Example

```java
/**
 * User Resource
 */
@Path("/users")
@Produces("application/json")
@Consumes("application/json")
public class UserResource {

    /**
     * Get user list
     */
    @GET
    public List<User> listUsers() {
        // ...
    }

    /**
     * Get user
     */
    @GET
    @Path("/{id}")
    public User getUser(@PathParam("id") Long id) {
        // ...
    }
}
```

## Configuration

```properties
class.is.jaxrs.ctrl=groovy:it.hasAnn("javax.ws.rs.Path")
```
