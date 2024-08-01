### Scopesgen

This script will generate the `Scopes.ts` and `ScopesS2S.ts` files based on the scopes given as a yaml input. 
Those scopes are defined in API-Proxy repository. Assuming the API-Proxy repository is cloned in the same directory as the
extensibility-sdk one, you can run the script as follows:

```sh
cat ../apiproxy/pkg/apiv2/scope/scopes.yaml | yarn scopesgen
```