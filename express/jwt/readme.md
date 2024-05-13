# JWT
## Axios
When working with Axios to make HTTP requests, adding an authorization header is a common requirement, especially when dealing with secure endpoints that require authentication. However, sending such headers in cross-origin requests may lead to complications.

When working with Axios to make HTTP requests, adding an authorization header is a common requirement, especially when dealing with secure endpoints that require authentication. 

## what are Authorization Headers?
Authorization headers are HTTP request headers that are used to send credentials and authenticate requests for protected resources and data on servers.

## Key Things about Authorization Headers:

### They enable clients to securely send credentials or tokens to prove their identity and access rights. Common examples are API keys, JWT tokens, OAuth tokens.
### They follow a standard format - the most common being "Bearer" followed by the credential data:

``` Authorization: Bearer <token>```


Other authorization types include Basic, Digest, HOBA etc which transmit credentials in different ways.


### When clients make requests to protected endpoints, the server checks the authorization header to determine if the client is authorized to access that resource or not.

### If the header is missing or the credentials are invalid, the server will reject the request with a 401 Unauthorized error.
### Using authorization headers prevents sending raw credentials in each request. The credentials are validated on the server separately through decryption or lookups in a database.
