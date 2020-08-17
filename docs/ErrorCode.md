# Error Code Doc

---

## HTTP Base

- 200 success (protocol only)
- 401 Unauthorized 
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error (protocol only)


## API Base

- code: status code 
    - 0: success
    - 1~??: error
- data: response data
- message: error message text
    - If an error occurs and server processed.
- timestamp: response timestamp

```ts
export interface Output<T> {
  code: OutputStatus;
  data?: T;
  message?: string;
  timestamp: Date;
}

```



